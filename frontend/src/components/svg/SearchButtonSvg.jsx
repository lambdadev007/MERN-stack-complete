import * as React from 'react';
import Svg, { Path, Mask } from 'react-native-svg';

function SearchButtonSvg(props) {
	return (
		<Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.167 9.167c0-2.758 2.242-5 5-5 2.757 0 5 2.242 5 5 0 2.757-2.243 5-5 5-2.758 0-5-2.243-5-5zm13.089 6.91l-2.83-2.83a6.626 6.626 0 001.407-4.08A6.674 6.674 0 009.167 2.5 6.674 6.674 0 002.5 9.167a6.674 6.674 0 006.667 6.666c1.538 0 2.952-.529 4.08-1.406l2.83 2.829a.831.831 0 001.179 0 .832.832 0 000-1.178z"
				fill="#231F20"
			/>
			<Mask
				id="prefix__a"
				maskUnits="userSpaceOnUse"
				x={2}
				y={2}
				width={16}
				height={16}
			>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M4.167 9.167c0-2.758 2.242-5 5-5 2.757 0 5 2.242 5 5 0 2.757-2.243 5-5 5-2.758 0-5-2.243-5-5zm13.089 6.91l-2.83-2.83a6.626 6.626 0 001.407-4.08A6.674 6.674 0 009.167 2.5 6.674 6.674 0 002.5 9.167a6.674 6.674 0 006.667 6.666c1.538 0 2.952-.529 4.08-1.406l2.83 2.829a.831.831 0 001.179 0 .832.832 0 000-1.178z"
					fill="#fff"
				/>
			</Mask>
		</Svg>
	);
}

export default SearchButtonSvg;
