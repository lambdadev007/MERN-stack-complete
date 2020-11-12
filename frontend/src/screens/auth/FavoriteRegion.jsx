import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../components/buttons/HeaderButton';
import { Ionicons } from '@expo/vector-icons';
import AlphabetFlatListView from '../../components/alphabetFlatListView';
import { useSelector, useDispatch } from 'react-redux';
import { addFavRegion, removeFavRegion } from '../../store/actions/auth';

import SearchInput from '../../components/inputs/SearchInput';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import Colors from '../../contants/Colors';

import regions from '../../data/regions.json';

const FavoriteRegionScreen = (props) => {
	const dispatch = useDispatch();
	const [stateSelected, setStateSelected] = useState(false);
	const favoriteRegions = useSelector((state) => state.auth.favRegions);

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

	const data = groupData(regions, 'name');

	const selectItemHandler = (regionId) => {
        console.log('[regionId]', regionId);
		if (favoriteRegions.data.includes(regionId)) {
			dispatch(removeFavRegion(regionId));
		} else {
			dispatch(addFavRegion(regionId));
		}
	};

	return (
		<View style={styles.screen}>
			<View style={styles.mainContainer}>
				<SearchInput
					id="search"
					placeholder="Ex. Lake Country"
					keyboardType="default"
					secureTextEntry
					required
					minLength={3}
					autoCapitalize="none"
					errorText="Please enter a valid region."
					onInputChange={() => {}}
					initialValue=""
					noValidate
				/>
			</View>
			<View style={styles.stateContainer}>
				<AlphabetFlatListView
					selectedItems={favoriteRegions.data}
					listData={data}
					onSelectItem={selectItemHandler}
				/>
			</View>
			<View style={styles.footer}>
				<PrimaryButton
					title="Next"
					disabled={
						favoriteRegions.data && favoriteRegions.data.length > 0
							? false
							: true
					}
					onPress={() => {
						favoriteRegions.data && favoriteRegions.data.length > 0
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

FavoriteRegionScreen.navigationOptions = (navData) => {
	return {
		headerTitle: 'Favorite Wine Region',
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

export default FavoriteRegionScreen;
