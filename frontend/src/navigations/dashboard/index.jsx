import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from '../../screens/home/HomeStackScreen';
import WineryStackScreen from '../../screens/winery/WineryStackScreen';
import WineStackScreen from '../../screens/wine/WineStackScreen';
import TripsStackScreen from '../../screens/trips/TripsStackScreen';
import ProfileStackScreen from '../../screens/profile/ProfileStackScreen';

import Colors from '../../contants/Colors';

import HomeInactiveTabMenuSvg from '../../components/svg/HomeInactiveTabMenuSvg';
import HomeActiveTabMenuSvg from '../../components/svg/HomeActiveTabMenuSvg';
import WineryInactiveTabMenuSvg from '../../components/svg/WineryInactiveTabMenuSvg';
import WineryActiveTabMenuSvg from '../../components/svg/WineryActiveTabMenuSvg';
import WineInactiveTabMenuSvg from '../../components/svg/WineInactiveTabMenuSvg';
import WineActiveTabMenuSvg from '../../components/svg/WineActiveTabMenuSvg';
import TripsInactiveTabMenuSvg from '../../components/svg/TripsInactiveTabMenuSvg';
import TripsActiveTabMenuSvg from '../../components/svg/TripsActiveTabMenuSvg';
import ProfileInactiveTabMenuSvg from '../../components/svg/ProfileInactiveTabMenuSvg';
import ProfileActiveTabMenuSvg from '../../components/svg/ProfileActiveTabMenuSvg';

const Tab = createBottomTabNavigator();

const Dashboard = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused }) => {
						let iconImage;

						if (route.name === 'Home') {
							iconImage = focused ? (
								<HomeActiveTabMenuSvg />
							) : (
								<HomeInactiveTabMenuSvg />
							);
						} else if (route.name === 'Winery') {
							iconImage = focused ? (
								<WineryActiveTabMenuSvg />
							) : (
								<WineryInactiveTabMenuSvg />
							);
						} else if (route.name === 'Wine') {
							iconImage = focused ? (
								<WineActiveTabMenuSvg />
							) : (
								<WineInactiveTabMenuSvg />
							);
						} else if (route.name === 'Trips') {
							iconImage = focused ? (
								<TripsActiveTabMenuSvg />
							) : (
								<TripsInactiveTabMenuSvg />
							);
						} else {
							iconImage = focused ? (
								<ProfileActiveTabMenuSvg />
							) : (
								<ProfileInactiveTabMenuSvg />
							);
						}

						return iconImage;
					}
				})}
				tabBarOptions={{
					activeTintColor: Colors.red,
					inactiveTintColor: Colors.gray400,
					style: {
						borderTopColor: Colors.gray600,
						borderTopWidth: 1,
						flex: 0.075
					},
					tabStyle: {
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
						paddingTop: 6,
						paddingBottom: 10
					},
					labelStyle: {
						fontSize: 12,
						textAlign: 'center'
					}
				}}
			>
				<Tab.Screen name="Home" component={HomeStackScreen} />
				<Tab.Screen name="Winery" component={WineryStackScreen} />
				<Tab.Screen name="Wine" component={WineStackScreen} />
				<Tab.Screen name="Trips" component={TripsStackScreen} />
				<Tab.Screen name="Profile" component={ProfileStackScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default Dashboard;
