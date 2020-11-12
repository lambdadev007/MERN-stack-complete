import React, { useState } from 'react';
import { Alert, Image, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';

import Global from '../../contants/Global';
import Colors from '../../contants/Colors';

import SkipButton from '../../components/buttons/SkipButton';
import Wizard from '../../components/wizard';

import brandImg from '../../../public/images/brand/brand.png';
import wizardStepFirstImg from '../../../public/images/steps/1.png';
import wizardStepSecondImg from '../../../public/images/steps/2.png';
import wizardStepThirdImg from '../../../public/images/steps/3.png';
import wizardStepFourthImg from '../../../public/images/steps/4.png';

import { authStart } from '../../store/actions/home';

export default function WizardScreen() {
	const [isReady, setIsReady] = useState(false);

	const dispatch = useDispatch();

	const _cacheResourcesAsync = async () => {
		const images = [
			brandImg,
			wizardStepFirstImg,
			wizardStepSecondImg,
			wizardStepThirdImg,
			wizardStepFourthImg
		];

		const cacheImages = images.map((image) => {
			return Asset.fromModule(image).downloadAsync();
		});

		return Promise.all(cacheImages);
	};

	const _onStartHandler = () => {
		dispatch(authStart());
	};

	const wizardSteps = [
		{
			screen: wizardStepFirstImg,
			title: 'Discover',
			description: 'Explore the best local wineries and wines around you'
		},
		{
			screen: wizardStepSecondImg,
			title: 'Trip',
			description:
				'Plan out vacations to wineries you haven’t checked out before'
		},
		{
			screen: wizardStepThirdImg,
			title: 'Deals',
			description: 'Find out wineries specials, events, and deals in your area'
		},
		{
			screen: wizardStepFourthImg,
			title: 'List',
			description: 'List your winery and show them the best product you have'
		}
	];

	return !isReady ? (
		<AppLoading
			startAsync={_cacheResourcesAsync}
			onFinish={() => setIsReady(true)}
			onError={console.warn}
		/>
	) : (
		<>
			<View style={[Global.root, styles.screen]}>
				<SkipButton />
				<Image source={brandImg} style={styles.logo} />
			</View>
			<View style={styles.root}>
				<Wizard>
					{wizardSteps.map((el) => (
						<Wizard.Step
							key={el.title}
							screen={el.screen}
							title={el.title}
							description={el.description}
							isLast={() => Alert.alert('I am last')}
							onStart={_onStartHandler}
						/>
					))}
				</Wizard>
			</View>
		</>
	);
}
const styles = StyleSheet.create({
	screen: {
		backgroundColor: Colors.gray200
	},
	root: {
		flex: 0.6
	},
	logo: {
		maxWidth: '35%',
		resizeMode: 'contain'
	}
});