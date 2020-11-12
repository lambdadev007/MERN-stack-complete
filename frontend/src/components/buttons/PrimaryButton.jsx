import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Platform,
	TouchableOpacity,
	TouchableNativeFeedback
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import Colors from '../../contants/Colors';
import FontSizes from '../../contants/FontSizes';

const PrimaryButton = (props) => {
	let TouchableComp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableComp = TouchableNativeFeedback;
	}

	return (
		<View
			style={
				props.outline ? styles.outlineBtnContainer : styles.buttonContainer
			}
		>
			<TouchableComp
				onPress={props.onPress}
				useForeground
				style={styles.button}
			>
				<LinearGradient
					colors={
						props.disabled
							? [Colors.gray300, Colors.gray300]
							: props.outline
							? [Colors.white, Colors.white, Colors.white]
							: [Colors.yellow, Colors.orange, Colors.red]
					}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
					style={styles.gradient}
				>
					<Text
						style={props.outline ? styles.outlineBtnTxt : styles.buttonText}
					>
						{props.title}
					</Text>
				</LinearGradient>
			</TouchableComp>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		width: '100%',
		height: 42,
		borderRadius: 20,
		overflow: 'hidden',
		marginVertical: 8
	},
	outlineBtnContainer: {
		width: '100%',
		height: 42,
		borderRadius: 20,
		overflow: 'hidden',
		marginVertical: 8,
		borderWidth: 1,
		borderColor: Colors.red
	},
	gradient: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	button: {},
	outlineBtnTxt: {
		color: Colors.red,
		marginLeft: 10,
		fontSize: 16,
		fontFamily: 'source-sans-pro-semibold'
	},
	buttonText: {
		color: Colors.white,
		marginLeft: 10,
		fontSize: FontSizes.default,
		fontFamily: 'source-sans-pro-semibold'
	}
});

export default PrimaryButton;
