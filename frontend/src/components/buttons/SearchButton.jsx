import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Platform,
	TouchableOpacity,
	TouchableNativeFeedback
} from 'react-native';

import Colors from '../../contants/Colors';
import FontSizes from '../../contants/FontSizes';

import SearchButtonSvg from '../../components/svg/SearchButtonSvg';

const SearchButton = (props) => {
	let TouchableComp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableComp = TouchableNativeFeedback;
	}

	return (
		<View>
			<TouchableComp
				onPress={props.onPress}
				useForeground
				style={styles.button}
			>
				<SearchButtonSvg style={styles.buttonIcon} />
				<Text style={styles.buttonText}>Find wine and wineries</Text>
			</TouchableComp>
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		flex: 1,
		width: '100%',
		height: 42,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: Colors.gray300,
		marginTop: 18,
		padding: 12,
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexDirection: 'row'
	},
	buttonText: {
		fontFamily: 'source-sans-pro-semibold',
		fontSize: FontSizes.default,
		color: Colors.gray400,
		marginLeft: 12
	}
});

export default SearchButton;
