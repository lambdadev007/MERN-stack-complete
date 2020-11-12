import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ProfileInactiveTabMenuSvg(props) {
	return (
		<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
			<Path
				d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
				stroke="#959595"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				clipRule="evenodd"
				d="M12 11a4 4 0 100-8 4 4 0 000 8z"
				stroke="#959595"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}

export default ProfileInactiveTabMenuSvg;
