import React, { useState } from 'react';
import {
	Image,
	ImageBackground,
	View,
	Text,
	StyleSheet,
	Button,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Global from '../../contants/Global';
import Colors from '../../contants/Colors';
import FontSizes from '../../contants/FontSizes';

import SignUpBgSvg from '../../components/svg/SignUpBgSvg';

import Tos from '../../components/tos';
import EmailButton from '../../components/buttons/EmailButton';
import FacebookButton from '../../components/buttons/FacebookButton';
import GoogleButton from '../../components/buttons/GoogleButton';

const SignUpScreen = (props) => {
	const [isReady, setIsReady] = useState(false);
	let TouchableComp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableComp = TouchableNativeFeedback;
	}

	const onSigninHandler = (type) => {
		// console.log('[auth type]', type);
		if (type === 'email') {
			props.navigation.navigate('login');
		}
	};

	return (
		<View style={styles.screen}>
			<View style={styles.authMainContainer}>
				<View style={styles.headingContainer}>
					<Text style={styles.heading}>Signup</Text>
				</View>
				<View style={styles.subHeadingContainer}>
					<Text style={styles.subHeading}>
						To connect with all wine lover and wineries around the world.
					</Text>
				</View>
				<View style={styles.signupBgContainer}>
					<SignUpBgSvg />
					<LinearGradient
						colors={['rgba(256,256,256,0)', 'rgba(256,256,256,1)']}
						start={{ x: 0.5, y: 0 }}
						end={{ x: 0.5, y: 1 }}
						style={styles.gradient}
					>
						<View style={{ width: '100%' }}></View>
					</LinearGradient>
				</View>
				<View style={styles.buttonsContainer}>
					<EmailButton
						title="Continue with email"
						onPress={() => onSigninHandler('email')}
					/>
					<FacebookButton
						title="Continue with Facebook"
						onPress={() => onSigninHandler('facebook')}
					/>
					<GoogleButton
						title="Continue with Google"
						onPress={() => onSigninHandler('google')}
					/>
				</View>
				<View style={{ paddingHorizontal: 16 }}>
					<Tos />
				</View>
			</View>
			<View style={styles.authBottomContainer}>
				<View style={styles.lineBreak}></View>
				<View style={styles.askContainer}>
					<Text style={styles.askText}>Already have an account?</Text>
				</View>
				<TouchableOpacity
					style={styles.linkBtn}
					onPress={() => {
						props.navigation.navigate('login');
					}}
				>
					<Text style={styles.linkText}>Login Here</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		backgroundColor: Colors.white
	},
	authMainContainer: {
		flex: 0.95,
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'center',
		width: '100%'
	},
	gradient: {
		width: '100%',
		height: '50%',
		marginTop: -180,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	heading: {
		fontFamily: 'goudy-bookletter-1911',
		fontSize: FontSizes.heading,
		color: Colors.black
	},
	subHeadingContainer: {
		marginVertical: 16,
		width: '80%'
	},
	subHeading: {
		color: Colors.gray500,
		textAlign: 'center',
		fontSize: FontSizes.default,
		fontFamily: 'source-sans-pro',
		lineHeight: 24
	},
	signupBgContainer: {
		width: '100%',
		height: 285,
		marginTop: 16
	},
	signupBg: {
		width: '100%',
		height: '100%'
	},
	buttonsContainer: {
		width: '100%',
		paddingHorizontal: 16,
		marginTop: -48,
		marginBottom: 25
	},
	authBottomContainer: {
		flex: 0.15,
		width: '100%',
		alignItems: 'center'
	},
	lineBreak: {
		borderBottomColor: Colors.gray300,
		borderBottomWidth: 1,
		marginTop: 8,
		marginBottom: 24,
		height: 0,
		width: '30%'
	},
	askText: {
		color: Colors.gray500,
		fontSize: FontSizes.default,
		textAlign: 'center'
	},
	linkBtn: {
		marginTop: 2
	},
	linkText: {
		textAlign: 'center',
		textDecorationStyle: 'solid',
		textDecorationLine: 'underline',
		textDecorationColor: Colors.red,
		color: Colors.red,
		textTransform: 'uppercase',
		fontFamily: 'source-sans-pro-bold',
		fontSize: FontSizes.default,
		marginTop: 6
	}
});

SignUpScreen.navigationOptions = {
	headerShown: false
};

export default SignUpScreen;
