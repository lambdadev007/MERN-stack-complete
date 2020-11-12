import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function WineActiveTabMenuSvg(props) {
	return (
		<Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
			<Path
				d="M14.154 14.343a.783.783 0 01-.204.131c-.5.222-.804.654-.804 1.123V19.5c0 .654.63 1.2 1.424 1.2h1.474c.426 0 .786.295.786.675 0 .38-.36.675-.786.675H8.675c-.426 0-.787-.295-.787-.675 0-.38.36-.675.787-.675h1.474c.793 0 1.424-.546 1.424-1.2v-3.903c0-.47-.305-.9-.804-1.123 0 0 0 0 0 0l3.385-.131zm0 0c3.017-.71 5.255-3.17 5.255-6.093 0-.985-.364-2.408-.735-3.6a35.501 35.501 0 00-.78-2.241c-.109-.278-.412-.459-.745-.459h-9.58c-.333 0-.635.181-.745.46m7.33 11.933l-3.6-.009.01.009c-3.016-.71-5.255-3.17-5.255-6.093 0-.985.365-2.408.735-3.6a35.55 35.55 0 01.78-2.241m0 0s0 0 0 0l.047.018-.047-.018zm.06 5.841c0-.689.222-1.678.494-2.627.265-.927.576-1.809.765-2.323h8.433c.189.514.5 1.396.765 2.323.272.948.495 1.937.495 2.627 0 2.725-2.452 4.95-5.477 4.95-3.024 0-5.476-2.225-5.476-4.95z"
				fill="url(#prefix__paint0_linear)"
				stroke="url(#prefix__paint1_linear)"
				strokeWidth={0.1}
			/>
			<Defs>
				<LinearGradient
					id="prefix__paint0_linear"
					x1={5.089}
					y1={2}
					x2={20.063}
					y2={2.209}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FDE446" />
					<Stop offset={0.505} stopColor="#F75E2F" />
					<Stop offset={1} stopColor="#B0337D" />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint1_linear"
					x1={5.089}
					y1={2}
					x2={20.063}
					y2={2.209}
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

export default WineActiveTabMenuSvg;
