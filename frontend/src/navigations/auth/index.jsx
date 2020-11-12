import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

import SignUpScreen from '../../screens/auth/SignUp';
import SignInScreen from '../../screens/auth/SignIn';
import EmailSignupScreen from '../../screens/auth/EmailSignUp';
import CompleteProfileScreen from '../../screens/auth/CompleteProfile';
import FavoriteStateScreen from '../../screens/auth/FavoriteState';
import FavoriteRegionScreen from '../../screens/auth/FavoriteRegion';

import Colors from '../../contants/Colors';

const Stack = createStackNavigator();

const defaultOptions = {
	headerTitleStyle: {
		alignSelf: 'center',
		fontFamily: 'source-sans-pro-bold',
		fontSize: 20
	},
	headerRight: () => <View />,
	headerStyle: {
		backgroundColor: Colors.white,
		elevation: 0,
		shadowOpacity: 0
	},
	headerBackTitleVisible: false,
	headerTintColor: Colors.black
};

const AuthNavigator = () => {
	return (
		<Stack.Navigator screenOptions={defaultOptions}>
			<Stack.Screen
				name="signup"
				component={SignUpScreen}
				options={SignUpScreen.navigationOptions}
			/>
			<Stack.Screen
				name="login"
				component={SignInScreen}
				options={SignInScreen.navigationOptions}
			/>
			<Stack.Screen
				name="email_signup"
				component={EmailSignupScreen}
				options={EmailSignupScreen.navigationOptions}
			/>
			<Stack.Screen
				name="complete_profile"
				component={CompleteProfileScreen}
				options={CompleteProfileScreen.navigationOptions}
			/>
			<Stack.Screen
				name="select_fav_state"
				component={FavoriteStateScreen}
				options={FavoriteStateScreen.navigationOptions}
			/>
			<Stack.Screen
				name="select_fav_region"
				component={FavoriteRegionScreen}
				options={FavoriteRegionScreen.navigationOptions}
			/>
		</Stack.Navigator>
	);
};

export default AuthNavigator;
