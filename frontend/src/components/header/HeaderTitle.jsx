import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../contants/Colors';
import FontSizes from '../../contants/FontSizes';

const HeaderTitle = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>{props.name}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		flexGrow: 1
	},
	headerTitle: {
		fontFamily: 'source-sans-pro-bold',
		fontSize: FontSizes.level_5,
		color: Colors.black,
		textAlign: 'center'
	}
});

export default HeaderTitle;
