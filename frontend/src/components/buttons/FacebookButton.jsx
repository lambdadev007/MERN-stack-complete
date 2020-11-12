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

const FacebookButton = (props) => {
	let TouchableComp = TouchableOpacity;
	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableComp = TouchableNativeFeedback;
	}

	return (
		<View style={styles.buttonContainer}>
			<TouchableComp
				onPress={props.onPress}
				useForeground
				style={styles.button}
			>
				<LinearGradient
					colors={[Colors.blue, Colors.blue, Colors.blue]}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
					style={styles.gradient}
				>
					<FontAwesome name="facebook" size={22} color={Colors.white} />
					<Text style={styles.buttonText}>{props.title}</Text>
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
	buttonText: {
		color: Colors.white,
		marginLeft: 10,
		fontSize: 16,
		fontFamily: 'source-sans-pro-semibold'
	},
	googleBtn: {
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: Colors.primaryColor
	}
});

export default FacebookButton;
