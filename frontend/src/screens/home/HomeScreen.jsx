import React from 'react';
import {
	TouchableHighlight,
	StyleSheet,
	Text,
	SafeAreaView
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Global from '../../contants/Global';
import Colors from '../../contants/Colors';
import FontSizes from '../../contants/FontSizes';

import SearchButton from '../../components/buttons/SearchButton';
import NotificationsInactiveButtonSvg from '../../components/svg/NotificationsInactiveButtonSvg';
import ProfileInactiveButtonSvg from '../../components/svg/ProfileInactiveButtonSvg';

const HomeScreen = ({ navigation }) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<TouchableHighlight
					onPress={() => navigation.navigate('Notifications')}
					activeOpacity={1}
					underlayColor={'transparent'}
					style={{ paddingLeft: 16, paddingRight: 16 }}
				>
					<NotificationsInactiveButtonSvg />
				</TouchableHighlight>
			),
			headerRight: () => (
				<TouchableHighlight
					onPress={() => navigation.navigate('Friends List')}
					activeOpacity={1}
					underlayColor={'transparent'}
					style={{ paddingLeft: 16, paddingRight: 16 }}
				>
					<ProfileInactiveButtonSvg />
				</TouchableHighlight>
			)
		});
	}, [navigation]);

	return (
		<SafeAreaView style={[Global.container, styles.screen]}>
			<ScrollView style={styles.scrollView}>
				<SearchButton onPress={() => navigation.push('Search')} />
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		marginTop: 6,
		backgroundColor: Colors.white
	},
	scrollView: {
		width: '100%',
		paddingHorizontal: 16
	}
});

export default HomeScreen;
