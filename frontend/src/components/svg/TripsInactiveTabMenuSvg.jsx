import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function TripsInactiveTabMenuSvg(props) {
	return (
		<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
			<Path
				clipRule="evenodd"
				d="M2.875 7.25v14L9 17.75l7 3.5 6.125-3.5v-14L16 7.25l-7-3.5-6.125 3.5v0z"
				stroke="#959595"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M9 3.75v14M16 7.25v14"
				stroke="#959595"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}

export default TripsInactiveTabMenuSvg;
