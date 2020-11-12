import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from '../../screens/profile/ProfileScreen';

const ProfileStackScreen = (props) => {
	const ProfileStack = createStackNavigator();

	return (
		<ProfileStack.Navigator>
			<ProfileStack.Screen name="Profile" component={ProfileScreen} />
		</ProfileStack.Navigator>
	);
};

export default ProfileStackScreen;
