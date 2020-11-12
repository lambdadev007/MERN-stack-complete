import * as React from 'react';
import Svg, { Path, Mask } from 'react-native-svg';

function HomeInactiveTabMenuSvg(props) {
	return (
		<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M18.99 20H16v-7a1 1 0 00-1-1H9a1 1 0 00-1 1v7H5l.006-8.417 6.992-7.151L19 11.624 18.99 20zM10 20h4v-6h-4v6zm10.424-9.815l-7.709-7.884c-.377-.385-1.053-.385-1.43 0l-7.71 7.885A2.075 2.075 0 003 11.624V20c0 1.103.847 2 1.888 2H19.111C20.152 22 21 21.103 21 20v-8.376c0-.539-.21-1.063-.576-1.439z"
				fill="#959595"
			/>
			<Mask
				id="prefix__a"
				maskUnits="userSpaceOnUse"
				x={3}
				y={2}
				width={18}
				height={20}
			>
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M18.99 20H16v-7a1 1 0 00-1-1H9a1 1 0 00-1 1v7H5l.006-8.417 6.992-7.151L19 11.624 18.99 20zM10 20h4v-6h-4v6zm10.424-9.815l-7.709-7.884c-.377-.385-1.053-.385-1.43 0l-7.71 7.885A2.075 2.075 0 003 11.624V20c0 1.103.847 2 1.888 2H19.111C20.152 22 21 21.103 21 20v-8.376c0-.539-.21-1.063-.576-1.439z"
					fill="#fff"
				/>
			</Mask>
		</Svg>
	);
}

export default HomeInactiveTabMenuSvg;
