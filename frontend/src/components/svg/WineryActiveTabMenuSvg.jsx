import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

function WineryActiveTabMenuSvg(props) {
	return (
		<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
			<Path
				d="M19.36 5.226l-.69-3.65A.708.708 0 0017.974 1H6.024a.708.708 0 00-.695.576l-.69 3.65a36.273 36.273 0 000 13.548l.69 3.65a.708.708 0 00.695.576h11.95c.34 0 .632-.242.696-.576l.69-3.65a36.269 36.269 0 000-13.548zM6.61 2.416h10.778l.295 1.56H6.315l.296-1.56zM6.03 5.488l.018-.097h11.904l.019.097c.052.275.1.55.146.824H5.883c.045-.275.094-.55.146-.824zm11.359 16.096H6.611l-.27-1.427h11.317l-.27 1.427zm.582-3.074l-.044.232H6.073l-.044-.232c-.042-.22-.08-.441-.118-.662h12.177c-.037.221-.076.442-.118.662zm.33-2.077H5.7a34.78 34.78 0 01-.02-8.705h12.64c.357 2.896.35 5.81-.02 8.705z"
				fill="url(#prefix__paint0_linear)"
			/>
			<Defs>
				<LinearGradient
					id="prefix__paint0_linear"
					x1={3.691}
					y1={1}
					x2={20.803}
					y2={1.248}
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

export default WineryActiveTabMenuSvg;
