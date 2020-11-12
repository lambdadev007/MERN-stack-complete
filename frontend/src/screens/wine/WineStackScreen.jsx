import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WineScreen from '../../screens/wine/WineScreen';

const WineStackScreen = (props) => {
	const WineStack = createStackNavigator();

	return (
		<WineStack.Navigator>
			<WineStack.Screen name="Wine" component={WineScreen} />
		</WineStack.Navigator>
	);
};

export default WineStackScreen;
