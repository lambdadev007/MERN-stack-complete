import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Global from '../../contants/Global';
import Colors from '../../contants/Colors';
import FontSizes from '../../contants/FontSizes';

const ProfileScreen = (props) => {
	return (
		<View style={[Global.container, styles.screen]}>
			<Text style={FontSizes.default}>Profile Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: Colors.white
	}
});

export default ProfileScreen;
