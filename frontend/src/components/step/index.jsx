import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Colors from '../../contants/Colors';
import FontSizes from '../../contants/FontSizes';

import PrimaryButton from '../buttons/PrimaryButton';

export default function Step(props) {
	return (
		<>
			<View style={[styles.screen]}>{<Image source={props.screen} />}</View>
			<View style={[styles.boxShadow, styles.wrapper]}>
				<Text style={{ color: Colors.purple, ...styles.heading }}>
					{props.title}
				</Text>
				<Text style={[FontSizes.default, styles.subHeading]}>
					{props.description}
				</Text>
				<View style={[styles.footer]}>
					<View style={[styles.stepsNav]}>
						{Array.from(Array(props.totalCount), (e, i) => {
							return (
								<View
									key={i + 1}
									style={[
										styles.dotsNavigation,
										props.currentIndex === i && styles.dotsNavigationActive
									]}
								></View>
							);
						})}
					</View>
				</View>
				<View style={styles.buttonContainer}>
					{props.isLast ? (
						<PrimaryButton title="Start Now" onPress={props.onStart} />
					) : (
						<PrimaryButton title="Next" onPress={props.nextStep} />
					)}
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	screen: {
		zIndex: -1,
		top: -312,
		position: 'absolute'
	},
	boxShadow: {
		shadowColor: Colors.black,
		shadowOpacity: 0.12,
		shadowOffset: {
			height: 1
		},
		shadowRadius: 0
	},
	wrapper: {
		zIndex: 2,
		width: '100%',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		backgroundColor: Colors.white
	},
	heading: {
		fontFamily: 'goudy-bookletter-1911',
		fontSize: FontSizes.heading,
		marginTop: 24,
		marginBottom: 12
	},
	subHeading: {
		fontFamily: 'source-sans-pro-semibold',
		lineHeight: 24,
		maxWidth: '75%',
		textAlign: 'center',
		color: Colors.gray500
	},
	footer: {
		flex: 1,
		alignItems: 'center'
	},
	stepsNav: {
		flexDirection: 'row',
		marginTop: 36
	},
	dotsNavigation: {
		width: 8,
		height: 8,
		borderRadius: 50,
		marginLeft: 6,
		marginRight: 6,
		backgroundColor: Colors.gray300
	},
	dotsNavigationActive: {
		backgroundColor: Colors.red
	},
	buttonContainer: {
		flexDirection: 'column',
		height: 128,
		alignItems: 'center',
		width: '100%',
		paddingHorizontal: 16
	}
});
