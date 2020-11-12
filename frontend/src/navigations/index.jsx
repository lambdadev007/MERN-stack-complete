import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigator from './auth';
import SkipRegScreen from '../screens/auth/SkipReg';

const Stack = createStackNavigator();

const defaultOptions = {
	headerShown: true
};

const MainStack = () => {
	return (
		<Stack.Navigator screenOptions={defaultOptions} mode="modal">
			<Stack.Screen
				name="Main"
				component={AuthNavigator}
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen
				name="Skip_reg"
				component={SkipRegScreen}
				options={SkipRegScreen.navigationOptions}
			/>
		</Stack.Navigator>
	);
};

const MainNavigator = () => {
	return (
		<NavigationContainer>
			<MainStack />
		</NavigationContainer>
	);
};

export default MainNavigator;
