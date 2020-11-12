import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/home/HomeScreen';
import NotificationsScreen from '../../screens/notifications/NotificationsScreen';
import FriendsListScreen from '../../screens/friends-list/FriendsListScreen';
import SearchScreen from '../../screens/search/SearchScreen';

import HeaderTitle from '../../components/header/HeaderTitle';

const HomeStackScreen = () => {
	const HomeStack = createStackNavigator();

	return (
		<HomeStack.Navigator
			screenOptions={{
				headerStyle: {
					shadowColor: 'transparent',
					elevation: 0
				}
			}}
		>
			<HomeStack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerTitle: () => <HeaderTitle name="Activity" />
				}}
			/>
			<HomeStack.Screen name="Notifications" component={NotificationsScreen} />
			<HomeStack.Screen name="Friends List" component={FriendsListScreen} />
			<HomeStack.Screen name="Search" component={SearchScreen} />
		</HomeStack.Navigator>
	);
};

export default HomeStackScreen;
