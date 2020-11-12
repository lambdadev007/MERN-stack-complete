import React, { useReducer, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Colors from '../../contants/Colors';

const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
	switch (action.type) {
		case INPUT_CHANGE:
			return {
				...state,
				value: action.value,
				isValid: action.isValid
			};
		case INPUT_BLUR:
			return {
				...state,
				touched: true
			};
		default:
			return state;
	}
};

const SearchInput = (props) => {
	const [inputState, dispatch] = useReducer(inputReducer, {
		value: props.initialValue ? props.initialValue : '',
		isValid: props.initiallyValid,
		touched: false
	});

	const { onInputChange, id } = props;

	useEffect(() => {
		if (inputState.touched) {
			onInputChange(id, inputState.value, inputState.isValid);
		}
	}, [inputState, onInputChange, id]);

	const textChangeHandler = (text) => {
		const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let isValid = true;
		if (props.required && text.trim().length === 0) {
			isValid = false;
		}
		if (props.email && !emailRegex.test(text.toLowerCase())) {
			isValid = false;
		}
		if (props.min != null && +text < props.min) {
			isValid = false;
		}
		if (props.max != null && +text > props.max) {
			isValid = false;
		}
		if (props.minLength != null && text.length < props.minLength) {
			isValid = false;
		}
		dispatch({ type: INPUT_CHANGE, value: text, isValid: isValid });
	};

	const lostFocusHandler = () => {
		dispatch({ type: INPUT_BLUR });
	};

	return (
		<View style={styles.formControl}>
			<View style={styles.inputGroup}>
				<AntDesign
					name="search1"
					size={18}
					style={styles.icon}
					color={Colors.black100}
				/>
				<TextInput
					{...props}
					style={styles.input}
					value={inputState.value}
					onChangeText={textChangeHandler}
					onBlur={lostFocusHandler}
				/>
			</View>
			{!inputState.isValid && inputState.touched && !props.noValidate && (
				<View style={styles.errorContainer}>
					<Text style={styles.errorText}>{props.errorText}</Text>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	formControl: {
		width: '100%',
		marginVertical: 8
	},
	inputGroup: {
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		borderColor: Colors.gray300,
		borderWidth: 1,
        borderRadius: 25,
        height: 42
    },
    icon: {
        position: 'absolute',
        left: 16
    },
	input: {
		paddingHorizontal: 20,
		paddingLeft: 54,
		paddingRight: 8,
		fontFamily: 'source-sans-pro',
		fontSize: 16,
		textAlignVertical: 'center',
		lineHeight: 24,
		width: '100%'
	},
	errorContainer: {
		marginVertical: 5
	},
	errorText: {
		fontFamily: 'source-sans-pro',
		color: 'red',
		fontSize: 13
	}
});

export default SearchInput;
