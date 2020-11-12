import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TripsScreen from '../../screens/trips/TripsScreen';

const TripsStackScreen = (props) => {
	const TripsStack = createStackNavigator();

	return (
		<TripsStack.Navigator>
			<TripsStack.Screen name="Trips" component={TripsScreen} />
		</TripsStack.Navigator>
	);
};

export default TripsStackScreen;
