import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Colors from '../../contants/Colors';

const SelectBox = (props) => {
	const [city, setCity] = useState('');

	return (
		<View style={styles.container}>
			<View style={styles.pickerView}>
				<Picker
					selectedValue={city}
					style={styles.picker}
					onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
					itemStyle={styles.pickerItem}
				>
					<Picker.Item label={props.default} value="" />
					{props.itemData.map((item) => {
						return (
							<Picker.Item label={item.label} value={item.id} key={item.id} />
						);
					})}
				</Picker>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%'
	},
	pickerView: {
		width: '100%',
		borderWidth: 1,
		borderColor: Colors.gray300,
		borderStyle: 'solid',
		borderRadius: 25,
		paddingHorizontal: 10,
		marginVertical: 8
	},
	picker: {
		color: Colors.gray300,
		height: 42,
		width: '100%'
	},
	pickerItem: {
		backgroundColor: Colors.red,
		color: Colors.red,
		width: '100%'
	}
});

export default SelectBox;
