import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store/index.js';

import InicialPage from '../../contrata-sv/pages/home/inicialPage.jsx';
import Error from '../../contrata-sv/pages/404/notFound.jsx';
import Login from '../../contrata-sv/pages/login/login.jsx';
import RegisterMain from '../../contrata-sv/pages/register/registerMain.jsx';
import RegisterForm from '../../contrata-sv/pages/register/registerForm.jsx';
import TalentP from '../../contrata-sv/pages/talentPage/talentP.jsx';
import ActP from '../../contrata-sv/pages/talentPage/actividades/actPA.jsx';
import OfferPage from '../../contrata-sv/pages/talentPage/actividades/Ofertas/offerPage.jsx';
import OfferPageArc from '../../contrata-sv/pages/talentPage/actividades/Ofertas/offerPageArc.jsx';
import ContracsPageAct from '../../contrata-sv/pages/talentPage/actividades/Contratos/contracsPageAct.jsx';
import ContracsHistorial from '../../contrata-sv/pages/talentPage/actividades/Contratos/contratosHistorial.jsx';
import SolicitudesP from '../../contrata-sv/pages/talentPage/solicitudes/soliP.jsx';
import SolicitudesR from '../../contrata-sv/pages/talentPage/solicitudes/soliR.jsx';
import ProfileTalent from '../../contrata-sv/pages/talentPage/profileTalent.jsx';
import UserP from '../../contrata-sv/pages/userPage/userP.jsx';
import ContratosUser from '../../contrata-sv/pages/userPage/contratos/contratosUA.jsx';
import ContratosUserHistorial from '../../contrata-sv/pages/userPage/contratos/contratosUH.jsx';
import ServiciosUser from '../../contrata-sv/pages/userPage/servicios/serviciosU.jsx';
import SolicitudesUser from '../../contrata-sv/pages/userPage/solicitudes/solicitudesUP.jsx';
import SolicitudesUserR from '../../contrata-sv/pages/userPage/solicitudes/solicitudesUR.jsx';
import ProfileUser from '../../contrata-sv/pages/userPage/profileUser.jsx';

import Footer from '../../contrata-sv/components/footer/footer.jsx';
import Header from '../../contrata-sv/components/header/header.jsx';

export const AppRouter = () => {
	
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Header/>
				<Routes>
					<Route path="/" element={<InicialPage />}/>
					<Route path="*" element={<Error />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<RegisterMain />} />
					<Route path="/register/client" element={<RegisterForm />} />
					<Route path="/register/contratist" element={<RegisterForm />} />
					{/* Pagina de Talento */}
					<Route path="/contratist-page" element={<TalentP />} />
					<Route path="/contratist-page/activities" element={<ActP />} />
					<Route path="/contratist-page/activities/offers/active" element={<OfferPage />} />
					<Route path="/contratist-page/activities/offers/archived" element={<OfferPageArc />} />
					<Route path="/contratist-page/activities/contracts/active" element={<ContracsPageAct />} />
					<Route path="/contratist-page/activities/contracts/history" element={<ContracsHistorial />} />
					<Route path="/contratist-page/requests/pending" element={<SolicitudesP />} />
					<Route path="/contratist-page/requests/declined" element={<SolicitudesR />} />
					<Route path="/contratist-page/profile" element={<ProfileTalent />} />
					{/* Pagina de Usuario */}
					<Route path="/client-page" element={<UserP />} />
					<Route path="/client-page/contracts/active" element={<ContratosUser />} />
					<Route path="/client-page/contracts/history" element={<ContratosUserHistorial />} />
					<Route path="/client-page/services" element={<ServiciosUser />} />
					<Route path="/client-page/requests/pending" element={<SolicitudesUser />} />
					<Route path="/client-page/requests/declined" element={<SolicitudesUserR />} />
					<Route path="/client-page/profile" element={<ProfileUser />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</Provider>
	);
};
