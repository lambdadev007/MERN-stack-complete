import * as React from 'react';
import Svg, { Path, Mask, G } from 'react-native-svg';

function ProfileActiveButtonSvg(props) {
	return (
		<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18 10a1.001 1.001 0 00-2 0 1.001 1.001 0 002 0zm2 0c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm-9-3c0-1.103-.897-2-2-2s-2 .897-2 2 .897 2 2 2 2-.897 2-2zm2 0c0 2.206-1.794 4-4 4S5 9.206 5 7s1.794-4 4-4 4 1.794 4 4zm.94 8.046A4.994 4.994 0 0117 14c2.757 0 5 2.243 5 5a1 1 0 11-2 0c0-1.654-1.346-3-3-3-.683 0-1.332.234-1.856.649.544.996.856 2.138.856 3.351a1 1 0 11-2 0c0-2.757-2.243-5-5-5s-5 2.243-5 5a1 1 0 11-2 0c0-3.86 3.141-7 7-7 1.927 0 3.673.783 4.94 2.046z"
				fill="#231F20"
			/>
			<Mask
				id="prefix__a"
				maskUnits="userSpaceOnUse"
				x={2}
				y={3}
				width={20}
				height={18}
			>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M18 10a1.001 1.001 0 00-2 0 1.001 1.001 0 002 0zm2 0c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm-9-3c0-1.103-.897-2-2-2s-2 .897-2 2 .897 2 2 2 2-.897 2-2zm2 0c0 2.206-1.794 4-4 4S5 9.206 5 7s1.794-4 4-4 4 1.794 4 4zm.94 8.046A4.994 4.994 0 0117 14c2.757 0 5 2.243 5 5a1 1 0 11-2 0c0-1.654-1.346-3-3-3-.683 0-1.332.234-1.856.649.544.996.856 2.138.856 3.351a1 1 0 11-2 0c0-2.757-2.243-5-5-5s-5 2.243-5 5a1 1 0 11-2 0c0-3.86 3.141-7 7-7 1.927 0 3.673.783 4.94 2.046z"
					fill="#fff"
				/>
			</Mask>
			<G mask="url(#prefix__a)">
				<Path fill="#0D1C2E" d="M0 0h24v24H0z" />
			</G>
		</Svg>
	);
}

export default ProfileActiveButtonSvg;
