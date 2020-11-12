import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function ProfileActiveTabMenuSvg(props) {
	return (
		<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
			<Path
				d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
				stroke="url(#prefix__paint0_linear)"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				clipRule="evenodd"
				d="M12 11a4 4 0 100-8 4 4 0 000 8z"
				stroke="url(#prefix__paint1_linear)"
				strokeWidth={1.8}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Defs>
				<LinearGradient
					id="prefix__paint0_linear"
					x1={3.691}
					y1={15}
					x2={20.76}
					y2={15.908}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FDE446" />
					<Stop offset={0.505} stopColor="#F75E2F" />
					<Stop offset={1} stopColor="#B0337D" />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint1_linear"
					x1={7.846}
					y1={3}
					x2={16.401}
					y2={3.171}
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

export default ProfileActiveTabMenuSvg;
