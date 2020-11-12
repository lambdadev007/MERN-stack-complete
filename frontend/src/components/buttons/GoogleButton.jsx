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

const GoogleButton = (props) => {
	let TouchableComp = TouchableOpacity;
	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableComp = TouchableNativeFeedback;
	}

	return (
		<View style={{ ...styles.buttonContainer, ...styles.googleBtn }}>
			<TouchableComp
				onPress={props.onPress}
				useForeground
				style={styles.button}
			>
				<LinearGradient
					colors={[Colors.white, Colors.white, Colors.white]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
					style={styles.gradient}
				>
					<FontAwesome name="google" size={22} color={Colors.red} />
					<Text style={{ ...styles.buttonText, color: Colors.red }}>
						{props.title}
					</Text>
				</LinearGradient>
			</TouchableComp>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonsContainer: {
		width: '100%'
	},
	buttonContainer: {
		width: '100%',
		height: 42,
		borderRadius: 20,
		overflow: 'hidden',
		marginVertical: 8
	},
	gradient: {
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	button: {},
	buttonText: {
		color: Colors.white,
		marginLeft: 10,
		fontSize: FontSizes.default,
		fontFamily: 'source-sans-pro-semibold'
	},
	googleBtn: {
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: Colors.red
	}
});

export default GoogleButton;
