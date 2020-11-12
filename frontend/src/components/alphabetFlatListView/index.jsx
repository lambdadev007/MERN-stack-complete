import React, { useRef } from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	ScrollView,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../contants/Colors';
import FontSizes from '../../contants/FontSizes';

const itemHeight = 50;

const AlphabetFlatListView = (props) => {
	const alphabet = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];
	const listEl = useRef(null);
	let TouchableCmp = TouchableOpacity;

	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableCmp = TouchableNativeFeedback;
	}

	const ItemRenderer = ({ item }) => {
		return (
			<TouchableCmp onPress={() => props.onSelectItem(item.id)}>
				{props.selectedItems.includes(item.id) ? (
					<View style={styles.item}>
						<Text style={{ ...styles.itemText, color: Colors.red }}>
							{item.name}
						</Text>
						<Ionicons name="ios-checkmark" size={40} color={Colors.red} />
					</View>
				) : (
					<View style={styles.item}>
						<Text style={{ ...styles.itemText, color: Colors.black }}>
							{item.name}
						</Text>
					</View>
				)}
			</TouchableCmp>
		);
	};

	const renderCollection = (itemData) => {
		return (
			<View style={{ width: '100%', paddingHorizontal: 16 }}>
				{itemData.item[1].map((item, index) => (
					<ItemRenderer item={item} key={index} />
				))}
			</View>
		);
	};

	const scrollHandler = (item) => {
		let targetIndex = 0;

		for (let i = 0; i < props.listData.length; i++) {
			if (props.listData[i][0] === item || props.listData[i][0] < item)
				targetIndex = i;
		}

		console.log('[targetItem]', targetIndex);
		listEl.current.scrollToIndex({
			animated: true,
			index: targetIndex
		});

		return;
	};

	return (
		<View style={styles.container}>
			<View style={styles.subContainer}>
				<View style={styles.main}>
					<FlatList
						ref={listEl}
						showsVerticalScrollIndicator={false}
						data={props.listData}
						keyExtractor={(item, index) => item[0]}
						renderItem={renderCollection}
						style={{ width: '100%' }}
					/>
				</View>
				<View style={styles.sidebar}>
					<ScrollView>
						{alphabet.map((item, index) => {
							return (
								<View style={styles.alphabetContainer} key={item + index}>
									<TouchableCmp
										onPress={() => {
											scrollHandler(item);
										}}
									>
										<View style={{ width: '100%', height: '100%' }}>
											<Text
												style={{
													textTransform: 'uppercase',
													textAlign: 'center',
													color: Colors.gray400
												}}
											>
												{item}
											</Text>
										</View>
									</TouchableCmp>
								</View>
							);
						})}
					</ScrollView>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 0.9,
		paddingVertical: 10
	},
	subContainer: {
		flex: 1,
		flexDirection: 'row'
	},
	main: {
		flex: 0.9
	},
	sidebar: {
		flex: 0.1,
		alignItems: 'flex-end',
		paddingTop: 15
	},
	item: {
		width: '100%',
		height: itemHeight,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: Colors.gray200
	},
	itemText: {
		fontSize: FontSizes.default,
		fontFamily: 'source-sans-pro-bold'
	},
	alphabetContainer: {
		width: 20,
		height: 20,
		marginRight: 16,
		borderRadius: 10,
		overflow: 'hidden'
	}
});

export default AlphabetFlatListView;
