import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/buttons/HeaderButton';
import { Ionicons } from '@expo/vector-icons';
import AlphabetFlatListView from '../../components/alphabetFlatListView';
import { useSelector, useDispatch } from 'react-redux';
import { addFavState, removeFavState } from '../../store/actions/auth';

import SearchInput from '../../components/inputs/SearchInput';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import Colors from '../../contants/Colors';

import states from '../../data/states.json';

const FavoriteStateScreen = (props) => {
	const dispatch = useDispatch();
	const [stateSelected, setStateSelected] = useState(false);
	const favoriteStates = useSelector((state) => state.auth.favStates);

	const groupData = (data, key) => {
		let groupedData = [];
		const filteredData = data.sort((a, b) => {
			const m = a[key].toLowerCase();
			const n = b[key].toLowerCase();
			return m < n ? -1 : m > n ? 1 : 0;
		});

		let pattern = /[a-z]/i;
		groupedData['non-alphabet'] = [];

		for (let i = 0; i < filteredData.length; i++) {
			//loop throug collection
			var firstLetter = filteredData[i][key].charAt(0).toLowerCase();
			if (groupedData[firstLetter] === undefined && pattern.test(firstLetter)) {
				groupedData[firstLetter] = [];
				groupedData[firstLetter].push({ id: i, ...filteredData[i] });
			} else if (
				groupedData[firstLetter] !== undefined &&
				pattern.test(firstLetter)
			) {
				groupedData[firstLetter].push({ id: i, ...filteredData[i] });
			} else if (
				groupedData[firstLetter] === undefined &&
				!pattern.test(firstLetter)
			)
				groupedData['non-alphabet'].push({ id: i, ...filteredData[i] });
		}
		if (groupedData['non-alphabet'].length === 0) {
			delete groupedData['non-alphabet'];
		}
		return Object.entries(groupedData);
	};

	const data = groupData(states, 'name');

	const selectItemHandler = (stateId) => {
		if (favoriteStates.data.includes(stateId)) {
			dispatch(removeFavState(stateId));
		} else {
			dispatch(addFavState(stateId));
		}
	};

	return (
		<View style={styles.screen}>
			<View style={styles.mainContainer}>
				<SearchInput
					id="search"
					placeholder="Ex. Virginia"
					keyboardType="default"
					secureTextEntry
					required
					minLength={3}
					autoCapitalize="none"
					errorText="Please enter a valid state."
					onInputChange={() => {}}
					initialValue=""
					noValidate
				/>
			</View>
			<View style={styles.stateContainer}>
				<AlphabetFlatListView
					selectedItems={favoriteStates.data}
					listData={data}
					onSelectItem={selectItemHandler}
				/>
			</View>
			<View style={styles.footer}>
				<PrimaryButton
					title="Next"
					disabled={
						favoriteStates.data && favoriteStates.data.length > 0 ? false : true
					}
					onPress={() => {
						favoriteStates.data && favoriteStates.data.length > 0
							? props.navigation.navigate('select_fav_region')
							: null;
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: Colors.white
	},
	mainContainer: {
		width: '100%',
		paddingHorizontal: 16
	},
	stateContainer: {
		width: '100%',
		flex: 1
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		paddingVertical: 0,
		paddingHorizontal: 16
	}
});

FavoriteStateScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Select Favorite State',
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

export default FavoriteStateScreen;
