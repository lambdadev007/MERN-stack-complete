import React from 'react';
import {
	View,
	Text,
	Platform,
	StyleSheet,
	KeyboardAvoidingView,
	TouchableNativeFeedback,
	TouchableOpacity
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/buttons/HeaderButton';
import { Ionicons } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';
import Input from '../../components/inputs/Input';
import SelectBox from '../../components/inputs/Picker';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import Colors from '../../contants/Colors';
import FontSizes from '../../contants/FontSizes';

import cities from '../../data/cities.json';
import states from '../../data/states.json';

const CompleteProfileScreen = (props) => {
	const inputChangeHandler = () => {};

	return (
		<View style={styles.screen}>
			<KeyboardAvoidingView
				style={styles.mainContainer}
				behavior="padding"
				keyboardVerticalOffset={100}
			>
				<View style={styles.photoContainer}>
					<View style={styles.photo}>
						<Feather name="user" size={40} color={Colors.gray300} />
					</View>
					<TouchableOpacity style={styles.addPhotoBtn}>
						<Text style={styles.addPhotoTxt}>Add Photo</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.form}>
					<Input
						id="username"
						placeholder="Username"
						keyboardType="default"
						required
						autoCapitalize="none"
						errorText="Please enter a valid username."
						onInputChange={inputChangeHandler}
						initialValue=""
					/>
					<Input
						id="bio"
						placeholder="Bio"
						keyboardType="default"
						required
						autoCapitalize="none"
						errorText="Please enter a valid bio."
						onInputChange={inputChangeHandler}
						initialValue=""
						multiline={true}
						numberOfLines={5}
					/>
					<SelectBox
						itemData={cities.map((item, index) => {
							return {
								id: index,
								label: item.name
							};
						})}
						default="Select city"
					/>
					<SelectBox
						itemData={states.map((item, index) => {
							return {
								id: index,
								label: item.name
							};
						})}
						default="Select state"
					/>
				</View>

				<View style={styles.footer}>
					<PrimaryButton
						title="Next"
						onPress={() => {
							props.navigation.navigate('select_fav_state');
						}}
					/>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'flex-start',
		paddingTop: 56,
		alignItems: 'center',
		backgroundColor: Colors.white,
		width: '100%'
	},
	mainContainer: {
		width: '100%',
		flex: 1
	},
	photoContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	photo: {
		borderWidth: 1,
		borderColor: Colors.gray300,
		width: 110,
		height: 110,
		borderRadius: 55,
		justifyContent: 'center',
		alignItems: 'center'
	},
	addPhotoBtn: {
		alignItems: 'center',
		marginVertical: 8
	},
	addPhotoTxt: {
		fontFamily: 'source-sans-pro-bold',
		fontSize: FontSizes.default,
		color: Colors.red
	},
	form: {
		width: '100%',
		paddingHorizontal: 16
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		paddingVertical: 0,
		paddingHorizontal: 16
	}
});

CompleteProfileScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Complete Profile',
		headerRight: () => {
			return (
				<HeaderButtons HeaderButtonComponent={HeaderButton}>
					<Item
						title="Skip"
						buttonStyle={{
							textTransform: 'capitalize'
						}}
						onPress={() => {
							navData.navigation.navigate('Skip_reg');
						}}
					/>
				</HeaderButtons>
			);
		}
	};
};

export default CompleteProfileScreen;
