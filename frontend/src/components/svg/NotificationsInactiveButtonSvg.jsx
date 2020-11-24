import * as React from 'react';
import Svg, { Path, Mask } from 'react-native-svg';

function FavoritesInactiveButtonSvg(props) {
	return (
		<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.514 16l1.18-1.182c.378-.378.586-.88.586-1.414V8.727c0-1.357.59-2.654 1.62-3.556a4.66 4.66 0 013.737-1.13c2.327.31 4.082 2.414 4.082 4.896v4.467c0 .534.208 1.036.585 1.413L18.485 16H5.515zM14 18.34c0 .9-.916 1.66-2 1.66s-2-.76-2-1.66V18h4v.34zm6.521-3.132l-1.8-1.804V8.937c0-3.481-2.503-6.438-5.82-6.877a6.722 6.722 0 00-5.318 1.607 6.728 6.728 0 00-2.302 5.06v4.677l-1.802 1.804a1.631 1.631 0 00-.354 1.782c.255.614.848 1.01 1.512 1.01H8v.34C8 20.36 9.793 22 12 22s4-1.641 4-3.66V18h3.363c.664 0 1.256-.396 1.51-1.01a1.63 1.63 0 00-.352-1.782z"
				fill="#231F20"
			/>
			<Mask
				id="prefix__a"
				maskUnits="userSpaceOnUse"
				x={2}
				y={2}
				width={19}
				height={20}
			>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M5.514 16l1.18-1.182c.378-.378.586-.88.586-1.414V8.727c0-1.357.59-2.654 1.62-3.556a4.66 4.66 0 013.737-1.13c2.327.31 4.082 2.414 4.082 4.896v4.467c0 .534.208 1.036.585 1.413L18.485 16H5.515zM14 18.34c0 .9-.916 1.66-2 1.66s-2-.76-2-1.66V18h4v.34zm6.521-3.132l-1.8-1.804V8.937c0-3.481-2.503-6.438-5.82-6.877a6.722 6.722 0 00-5.318 1.607 6.728 6.728 0 00-2.302 5.06v4.677l-1.802 1.804a1.631 1.631 0 00-.354 1.782c.255.614.848 1.01 1.512 1.01H8v.34C8 20.36 9.793 22 12 22s4-1.641 4-3.66V18h3.363c.664 0 1.256-.396 1.51-1.01a1.63 1.63 0 00-.352-1.782z"
					fill="#fff"
				/>
			</Mask>
		</Svg>
	);
}

export default FavoritesInactiveButtonSvg;