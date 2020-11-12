import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { AppLoading } from 'expo';

import Colors from '../../contants/Colors';

export default function SkipButton(props) {
	return props.typefaces ? (
		<AppLoading />
	) : (
		<View style={styles.buttonContainer}>
			<Text onPress={() => props.onPress()} style={styles.buttonText}>
				Skip
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		width: '100%',
		marginTop: 60,
		marginRight: 36,
		marginBottom: -24,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		color: Colors.red
	},
	buttonText: {
		color: Colors.red,
		fontSize: 16,
		fontWeight: 'bold'
	}
});
