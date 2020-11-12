import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/buttons/HeaderCloseButton';
import { Ionicons } from '@expo/vector-icons';

import PrimaryButton from '../../components/buttons/PrimaryButton';
import Colors from '../../contants/Colors';
import FontSizes from '../../contants/FontSizes';

const SkipRegScreen = (props) => {
	return (
		<View style={styles.screen}>
			<View style={styles.heading}>
				<Text style={styles.headingTxt}>
					Are you sure want to skip the signup process?
				</Text>
			</View>
			<View style={styles.subHeading}>
				<Text style={styles.subHeadingTxt}>
					You can always setup your profile and favorite region later via app
					settings.
				</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<PrimaryButton
					title="Continue process"
					onPress={() => {
						props.navigation.pop();
					}}
				/>
				<PrimaryButton
					title="Skip for now"
					outline
					onPress={() => {
						props.navigation.pop();
					}}
				/>
			</View>
		</View>
	);
};

SkipRegScreen.navigationOptions = (navData) => {
	return {
		headerShown: true,
		headerTitleStyle: {
			opacity: 0
		},
		headerBackTitleVisible: false,
		headerLeft: null,
		headerStyle: {
			backgroundColor: Colors.white,
			elevation: 0,
			shadowOpacity: 0
		},
		headerRight: () => {
			return (
				<HeaderButtons HeaderButtonComponent={HeaderButton}>
					<Item
						title="Close"
						iconName="ios-close"
						buttonStyle={{
							textTransform: 'capitalize'
						}}
						onPress={() => {
							navData.navigation.pop();
						}}
					/>
				</HeaderButtons>
			);
		}
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.white
	},
	heading: {
		marginBottom: 16
	},
	headingTxt: {
		fontSize: FontSizes.subHeading,
		color: Colors.black,
		textAlign: 'center',
		fontFamily: 'source-sans-pro-bold'
	},
	subHeading: {
		marginHorizontal: 32,
		paddingHorizontal: 16,
		marginBottom: 36
	},
	subHeadingTxt: {
		fontSize: FontSizes.default,
		color: Colors.gray500,
		textAlign: 'center',
		fontFamily: 'source-sans-pro'
	},
	buttonsContainer: {
		width: '100%',
		paddingHorizontal: 16
	}
});

export default SkipRegScreen;
