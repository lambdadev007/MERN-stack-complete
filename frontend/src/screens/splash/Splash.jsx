import React, { useEffect, useState } from 'react';
import { Animated, Text, Image, StyleSheet, View } from 'react-native';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';

import Global from '../../contants/Global';
import Colors from '../../contants/Colors';
import FontSizes from '../../contants/FontSizes';

import logoImg from '../../../public/images/logo/logo.png';
import brandImg from '../../../public/images/brand/brand.png';

const AnimatedSplash = (props) => {
	const [fadeAnim] = useState(new Animated.Value(0));

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: props.duration,
			useNativeDriver: true
		}).start();
	}, []);

	return (
		<Animated.View
			style={{
				opacity: fadeAnim
			}}
		>
			{props.children}
		</Animated.View>
	);
};

export default function SplashScreen() {
	const [isReady, setIsReady] = useState(false);

	const _cacheResourcesAsync = async () => {
		const images = [logoImg, brandImg];

		const cacheImages = images.map((image) => {
			return Asset.fromModule(image).downloadAsync();
		});

		return Promise.all(cacheImages);
	};

	return !isReady ? (
		<AppLoading
			startAsync={_cacheResourcesAsync}
			onFinish={() => setIsReady(true)}
			onError={console.warn}
		/>
	) : (
		<View style={[Global.container, styles.splash]}>
			<AnimatedSplash duration={2500}>
				<Image source={logoImg} style={styles.logo} />
			</AnimatedSplash>
			<Image source={brandImg} style={styles.brand} />
			<Text style={[styles.slogan, FontSizes.default]}>
				Connecting wine makers and wine lovers
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	splash: {
		backgroundColor: Colors.gray200
	},
	logo: {
		marginBottom: 12,
		resizeMode: 'contain'
	},
	brand: {
		resizeMode: 'contain',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	slogan: {
		lineHeight: 24,
		color: Colors.gray500
	}
});
