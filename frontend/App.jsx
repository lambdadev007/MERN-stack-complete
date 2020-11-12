import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { AppRegistry } from 'react-native';
import Home from './src/screens/index';

import homeReducer from './src/store/reducers/home';
import authReducer from './src/store/reducers/auth';

const rootReducer = combineReducers({
	home: homeReducer,
	auth: authReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
	return Font.loadAsync({
		'goudy-bookletter-1911': require('./public/fonts/GoudyBookletter1911-Regular.ttf'),
		'source-sans-pro': require('./public/fonts/SourceSansPro-Regular.ttf'),
		'source-sans-pro-light': require('./public/fonts/SourceSansPro-Light.ttf'),
		'source-sans-pro-extralight': require('./public/fonts/SourceSansPro-ExtraLight.ttf'),
		'source-sans-pro-bold': require('./public/fonts/SourceSansPro-Bold.ttf'),
		'source-sans-pro-semibold': require('./public/fonts/SourceSansPro-SemiBold.ttf')
	});
};

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setFontLoaded(true)}
			/>
		);
	}

	return (
		<Provider store={store}>
			<Home />
		</Provider>
	);
}

AppRegistry.registerComponent('frontend', () => App);
