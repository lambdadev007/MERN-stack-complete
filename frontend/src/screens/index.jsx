import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// import MainNavigator from '../navigations';
import Dashboard from '../navigations/dashboard';

import SplashScreen from './splash/Splash';
import WizardScreen from './wizard/Wizard';

const Home = () => {
	const [timePassed, setTimePassed] = useState(false);
	let timeOut = 5000;

	const onboarding = useSelector((state) => state.home.onboarding);

	setTimeout(() => {
		setTimePassed(true);
	}, timeOut);

	if (!timePassed) {
		return <SplashScreen />;
	}

	if (onboarding) {
		return <WizardScreen />;
	}

	// return <MainNavigator />;
	return <Dashboard />;
};

export default Home;
