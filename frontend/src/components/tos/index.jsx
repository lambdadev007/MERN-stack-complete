import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../contants/Colors';
import FontSizes from '../../contants/FontSizes';

const Tos = () => {
	return (
		<View style={styles.tosContainer}>
			<Text style={styles.tosText}>
				By continuing with service above, you agree to Wineclub’s{' '}
			</Text>
			<TouchableOpacity>
				<Text style={styles.link}>Terms of Service </Text>
			</TouchableOpacity>
			<Text style={styles.tosText}>and </Text>
			<TouchableOpacity>
				<Text style={styles.link}>Privacy Policy</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	tosContainer: {
		marginBottom: 8,
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center'
	},
	link: {
		textAlign: 'center',
		color: Colors.gray400,
		fontSize: FontSizes.level_1,
		fontFamily: 'source-sans-pro',
		lineHeight: 22,
		textDecorationColor: Colors.gray400,
		textDecorationStyle: 'solid',
		textDecorationLine: 'underline'
	},
	tosText: {
		textAlign: 'center',
		color: Colors.gray400,
		fontSize: FontSizes.level_1,
		fontFamily: 'source-sans-pro',
		lineHeight: 22
	}
});

export default Tos;
