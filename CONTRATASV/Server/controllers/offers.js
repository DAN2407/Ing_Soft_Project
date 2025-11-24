const { response, request } = require("express");

const { Profession, Offer } = require("../models/");

const getOffers = async (req = request, res = response) => {
  //const {q, nombre = 'No name', page = '1'} = req.query;
  const { limit = 10, from = 0 } = req.query;
  const query = { status: true };

  // const users = await User.find(query)
  // .skip(Number(from))
  // .limit(Number(limit));

  // const total = await User.countDocuments(query);

  const [total, offers] = await Promise.all([
    Offer.countDocuments(query),
    Offer.find(query).skip(Number(from)).limit(Number(limit)),
  ]);

  res.status(200).json({
    total,
    offers,
  });
};

const getOfferById = async (req = request, res = response) => {
  const { id } = req.params;

  const offer = await Offer.find(id)
    .populate({ path: "contratist", select: "name -_id, lastname -_id" })
    .populate({ path: "profession", select: "name -_id" });

  res.status(200).json(offer);
};

const searchOffers = async (req = request, res = response) => {
  const { q = "" } = req.query;

  if (!q.trim()) {
    return res.status(400).json({
      msg: "Search query 'q' is required",
    });
  }

  try {
    const offers = await Offer.find(
      {
        $text: { $search: q },
        status: true,
      },
      {
        score: { $meta: "textScore" },
      }
    )
      .sort({ score: { $meta: "textScore" } })
      .populate({ path: "contratist", select: "name lastname -_id" })
      .populate({ path: "profession", select: "name -_id" });

    res.status(200).json({
      total: offers.length,
      offers,
    });
  } catch (error) {
    res.status(500).json({ msg: "Error searching offers", error });
  }
};

const searchOffersByTags = async (req = request, res = response) => {
  let { tags = "" } = req.query;

  if (!tags) {
    return res.status(400).json({
      msg: "Query param 'tags' is required. Example: ?tags=albañil,urgente",
    });
  }

  const tagsArray = tags.split(",").map((t) => t.trim().toUpperCase());

  try {
    const offers = await Offer.find({
      tags: { $in: tagsArray },
      status: true,
    })
      .populate({ path: "contratist", select: "name lastname -_id" })
      .populate({ path: "profession", select: "name -_id" });

    res.status(200).json({
      total: offers.length,
      offers,
    });
  } catch (error) {
    res.status(500).json({ msg: "Error searching by tags", error });
  }
};

const postOffers = async (req, res = response) => {
  const loggedUser = req.user;

  const paytimes = ["HOURLY", "DAYLY", "WEEKLY", "BIWEEKLY", "MONTHLY"];

  const {
    title,
    payment,
    profession,
    cost,
    area,
    payday,
    tags = [],
    ...body
  } = req.body;

  body.tags = tags.map((t) => t.toUpperCase());

  //validar payment y cost

  if (payment.toUpperCase() != "TO AGREE" && payment.toUpperCase() != "FIXED") {
    return res.status(401).json({
      msg: `The offer needs one of this payment methods: TO AGREE, FIXED`,
    });
  }

  if (payment.toUpperCase() === "FIXED") {
    let USDollar = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    if (!cost) {
      return res.status(400).json({
        msg: `You need to specify a cost for the offer`,
      });
    }
    body.cost = USDollar.format(cost);
  }

  if (!paytimes.includes(payday.toUpperCase())) {
    return res.status(401).json({
      msg: `The offer needs one of this paytimes: ${paytimes}`,
    });
  }

  //validar area
  if (
    !area.toUpperCase().includes("SANTA TECLA") &&
    !area.toUpperCase().includes("SAN SALVADOR")
  ) {
    return res.status(401).json({
      msg: `The area of the offer needs to be in: SANTA TECLA, SAN SALVADOR}`,
    });
  }

  //validar profession
  const professionDB = await Profession.findOne({
    name: profession.toUpperCase(),
  });

  if (!loggedUser.profession.includes(professionDB._id)) {
    return res.status(400).json({
      msg: `The offer profession is not in your professions`,
    });
  }

  const offer = new Offer({
    title: title.toUpperCase(),
    contratist: loggedUser._id,
    payment: payment.toUpperCase(),
    payday: payday.toUpperCase(),
    profession: professionDB._id,
    area,
    ...body,
  });

  //Guardar en DB
  await offer.save();

  return res.status(201).json(offer);
};

const putOffers = async (req = request, res = response) => {
  const loggedUser = req.user;
  const { id } = req.params;

  const paytimes = ["HOURLY", "DAYLY", "WEEKLY", "BIWEEKLY", "MONTHLY"];

  const offerUser = await Offer.findById(id);

  if (offerUser.contratist.toString() !== loggedUser._id.toString()) {
    return res.status(400).json({
      msg: `You can't edit this offer`,
    });
  }

  const { title, payment, profession, area, cost, payday, tags, ...body } =
    req.body;

  body.contratist = loggedUser._id;

  if (title) {
    //validar title
    const titleExists = await Offer.findOne({
      title: title,
      contratist: loggedUser._id,
    });

    if (titleExists) {
      return res.status(400).json({
        msg: `You already have a offer with this title`,
      });
    }

    body.title = title.toUpperCase();
  }

  if (payment) {
    if (
      payment.toUpperCase() != "TO AGREE" &&
      payment.toUpperCase() != "FIXED"
    ) {
      return res.status(401).json({
        msg: `The offer needs one of this payment methods: TO AGREE, FIXED`,
      });
    }

    body.payment = payment.toUpperCase();

    if (payment.toUpperCase() === "FIXED") {
      let USDollar = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

      if (!cost) {
        return res.status(400).json({
          msg: `You need to specify a cost for the offer`,
        });
      }

      body.cost = USDollar.format(cost);
    }
  }

  if (payday) {
    if (!paytimes.includes(payday.toUpperCase())) {
      return res.status(401).json({
        msg: `The offer needs one of this paytimes: ${paytimes}`,
      });
    }

    body.payday = payday.toUpperCase();
  }

  if (area) {
    //validar area
    if (
      !area.toUpperCase().includes("SANTA TECLA") &&
      !area.toUpperCase().includes("SAN SALVADOR")
    ) {
      return res.status(401).json({
        msg: `The area of the offer needs to be in: SANTA TECLA, SAN SALVADOR}`,
      });
    }

    body.area = area.toUpperCase();
  }

  if (profession) {
    //validar profession
    const professionDB = await Profession.findOne({
      name: profession.toUpperCase(),
    });

    if (!loggedUser.profession.includes(professionDB._id)) {
      return res.status(400).json({
        msg: `The offer profession is not in your professions`,
      });
    }

    body.profession = professionDB._id;
  }

  if (tags) {
    body.tags = tags.map((t) => t.toUpperCase());
  }

  await Offer.findByIdAndUpdate(id, body, { new: true })
    .populate({ path: "contratist", select: "name -_id" })
    .populate({ path: "profession", select: "name -_id" });

  return res.status(201).json({ msg: "Profile succesfully modified" });
};

const deleteOffers = async (req, res = response) => {
  const loggedUser = req.user;
  const { id } = req.params;

  const offerUser = await Offer.findById(id);

  if (offerUser.contratist.toString() !== loggedUser._id.toString()) {
    return res.status(400).json({
      msg: `You can't delete this offer`,
    });
  }

  const offer = await Offer.findByIdAndUpdate(id, { status: false });
  //const userAuth = req.user;

  res.status(200).json(offer);
};

const unarchiveOffers = async (req, res = response) => {
  const loggedUser = req.user;
  const { id } = req.params;

  const offerUser = await Offer.findById(id);

  if (offerUser.contratist.toString() !== loggedUser._id.toString()) {
    return res.status(400).json({
      msg: `You can't access this offer`,
    });
  }

  const offer = await Offer.findByIdAndUpdate(id, { status: true });
  //const userAuth = req.user;

  res.status(200).json(offer);
};

module.exports = {
  getOffers,
  searchOffers,
  searchOffersByTags,
  postOffers,
  getOfferById,
  putOffers,
  deleteOffers,
  unarchiveOffers,
};
