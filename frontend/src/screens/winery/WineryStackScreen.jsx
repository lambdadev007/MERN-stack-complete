import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WineryScreen from '../../screens/winery/WineryScreen';

const WineryStackScreen = (props) => {
	const WineryStack = createStackNavigator();

	return (
		<WineryStack.Navigator>
			<WineryStack.Screen name="Winery" component={WineryScreen} />
		</WineryStack.Navigator>
	);
};

export default WineryStackScreen;
