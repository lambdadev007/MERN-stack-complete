import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity
} from 'react-native';

import Colors from '../../contants/Colors';
import FontSizes from '../../contants/FontSizes';

import Tos from '../../components/tos';
import Input from '../../components/inputs/Input';
import PrimaryButton from '../../components/buttons/PrimaryButton';

const SignInScreen = (props) => {
	const inputChangeHandler = () => {};

	const loginHandler = () => {};

	return (
		<View style={styles.screen}>
			<KeyboardAvoidingView
				style={styles.authMainContainer}
				behavior="padding"
				keyboardVerticalOffset={100}
			>
				<View style={{ width: '100%' }}>
					<View style={styles.form}>
						<Input
							id="email"
							placeholder="Email"
							keyboardType="email-address"
							required
							email
							autoCapitalize="none"
							errorText="Please enter a valid email address."
							onInputChange={inputChangeHandler}
							initialValue=""
						/>
						<Input
							id="password"
							placeholder="Password"
							keyboardType="default"
							secureTextEntry
							required
							minLength={5}
							autoCapitalize="none"
							errorText="Please enter a valid password."
							onInputChange={inputChangeHandler}
							initialValue=""
						/>
						<View style={styles.buttonsContainer}>
							<PrimaryButton title="Login" onPress={loginHandler} />
						</View>
						<Tos />
					</View>
				</View>
			</KeyboardAvoidingView>
			<View style={styles.authBottomContainer}>
				<View style={styles.lineBreak}></View>
				<View style={styles.askContainer}>
					<Text style={styles.askText}>Don't have an account?</Text>
				</View>
				<TouchableOpacity
					style={styles.linkBtn}
					onPress={() => {
						props.navigation.navigate('email_signup');
					}}
				>
					<Text style={styles.linkText}>Sign Up Here</Text>
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
		backgroundColor: Colors.white
	},
	authMainContainer: {
		flex: 0.85,
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%'
	},
	form: {
		width: '100%',
		paddingVertical: 56,
		paddingHorizontal: 16,
		alignItems: 'center'
	},
	buttonsContainer: {
		width: '100%',
		paddingVertical: 16
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

SignInScreen.navigationOptions = {
	headerTitle: 'Login'
};

export default SignInScreen;
