import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function TripsActiveTabMenuSvg(props) {
	return (
		<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
			<Path
				clipRule="evenodd"
				d="M2.875 7.25v14L9 17.75l7 3.5 6.125-3.5v-14L16 7.25l-7-3.5-6.125 3.5v0z"
				stroke="url(#prefix__paint0_linear)"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M9 3.75v14"
				stroke="url(#prefix__paint1_linear)"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				d="M16 7.25v14"
				stroke="url(#prefix__paint2_linear)"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Defs>
				<LinearGradient
					id="prefix__paint0_linear"
					x1={2.504}
					y1={3.75}
					x2={23.087}
					y2={4.202}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FDE446" />
					<Stop offset={0.505} stopColor="#F75E2F" />
					<Stop offset={1} stopColor="#B0337D" />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint1_linear"
					x1={8.983}
					y1={3.75}
					x2={9.919}
					y2={3.751}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FDE446" />
					<Stop offset={0.505} stopColor="#F75E2F" />
					<Stop offset={1} stopColor="#B0337D" />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint2_linear"
					x1={15.983}
					y1={7.25}
					x2={16.919}
					y2={7.251}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FDE446" />
					<Stop offset={0.505} stopColor="#F75E2F" />
					<Stop offset={1} stopColor="#B0337D" />
				</LinearGradient>
			</Defs>
		</Svg>
	);
}

export default TripsActiveTabMenuSvg;
