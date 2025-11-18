const bcrypt = require('bcryptjs');
const Role = require('../../models/role');
const User = require('../../models/user');
const Profession = require('../../models/profession');
const Offer = require('../../models/offers');

async function seedInitialData() {
    try {
        // Crear roles si no existen
        const rolesCount = await Role.countDocuments();
        if (rolesCount === 0) {
            await Role.insertMany([
                { name: 'ADMIN' },
                { name: 'CONTRATIST_ROLE' },
                { name: 'CLIENT_ROLE' }
            ]);
            console.log('Seed: roles creados');
        }

        // Usuarios de prueba
        const users = [
            {
                name: 'Admin',
                lastname: 'User',
                email: 'admin@example.com',
                password: 'Admin123!',
                roleName: 'ADMIN',
                residence: 'San Salvador',
                birthdate: new Date('1990-01-01'),
                phone: '0000-0000',
                dui: '01234567-8'
            },
            {
                name: 'Contratista',
                lastname: 'Demo',
                email: 'contractor@example.com',
                password: 'Contratista123',
                roleName: 'CONTRATIST_ROLE',
                residence: 'Santa Tecla',
                birthdate: new Date('1992-06-15'),
                phone: '0000-0001',
                dui: '02345678-9'
            },
            {
                name: 'Cliente',
                lastname: 'Demo',
                email: 'client@example.com',
                password: 'Cliente123',
                roleName: 'CLIENT_ROLE',
                residence: 'Antiguo Cuscatlán',
                birthdate: new Date('1995-09-20'),
                phone: '0000-0002',
                dui: '03456789-0'
            }
        ];

        for (const u of users) {
            const exists = await User.findOne({ email: u.email });
            if (exists) continue;

            const roleDoc = await Role.findOne({ name: u.roleName });
            const salt = bcrypt.genSaltSync(10);
            const hashed = bcrypt.hashSync(u.password, salt);

            const newUser = new User({
                name: u.name,
                lastname: u.lastname,
                email: u.email,
                password: hashed,
                google: false,
                status: true,
                role: roleDoc ? roleDoc._id : u.roleName,
                residence: u.residence,
                birthdate: u.birthdate,
                phone: u.phone,
                dui: u.dui
            });

            await newUser.save();
            console.log(`Seed: usuario creado -> ${u.email}`);
        }

        // --- PROFESIONES ---
        const professions = [
            'Plomería',
            'Electricista',
            'Carpintería',
            'Pintura',
            'Mecánica'
        ];

        for (const name of professions) {
            const exists = await Profession.findOne({ name });
            if (!exists) {
                await Profession.create({ name });
                console.log(`Seed: profesión creada -> ${name}`);
            }
        }

        // --- OFERTAS DE EJEMPLO ---
        // Buscar contratista y una profesión para referenciar
        const contractor = await User.findOne({ email: 'contractor@example.com' });
        const firstProfession = await Profession.findOne({ name: professions[0] });

        if (contractor && firstProfession) {
            const offers = [
                {
                    title: 'Reparación de tuberías',
                    description: 'Reparación de tuberías en vivienda, incluye cambio de juntas y pruebas de presión.',
                    salary: 120,
                    professionName: firstProfession.name
                },
                {
                    title: 'Instalación eléctrica básica',
                    description: 'Instalación de enchufes y luces en casa habitación.',
                    salary: 150,
                    professionName: 'Electricista'
                }
            ];

            for (const o of offers) {
                const exists = await Offer.findOne({ title: o.title });
                if (exists) continue;

                const professionDoc = await Profession.findOne({ name: o.professionName });
                const newOffer = new Offer({
                    title: o.title,
                    description: o.description,
                    salary: o.salary,
                    profession: professionDoc ? professionDoc._id : firstProfession._id,
                    contratist: contractor._id,
                    payday: 'Inmediato',
                    payment: 'Efectivo',
                    area: 'Santa Tecla', // <-- añadido: ajusta según tu dominio (ej. 'Residencial', 'Comercial')
                    // Ajusta/añade otros campos requeridos por tu esquema (ej. location, duration, status)
                });

                await newOffer.save();
                console.log(`Seed: oferta creada -> ${o.title}`);
            }
        } else {
            console.log('Seed: no se encontró contratista o profesión; ofertas no creadas');
        }

    } catch (error) {
        console.error('Error en seeder:', error);
    }
}

module.exports = { seedInitialData };