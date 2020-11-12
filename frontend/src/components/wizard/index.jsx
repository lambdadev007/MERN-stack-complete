import React, { useState } from 'react';
import { View } from 'react-native';

import Global from '../../contants/Global';

import Step from '../step';

export default function Wizard(props) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const _nextStep = () => {
		if (currentIndex !== props.children.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	return (
		<View style={[Global.container]}>
			{React.Children.map(props.children, (el, index) => {
				if (currentIndex === index) {
					return React.cloneElement(el, {
						currentIndex: currentIndex,
						totalCount: props.children.length,
						isLast: currentIndex === props.children.length - 1,
						nextStep: _nextStep
					});
				}
			})}
		</View>
	);
}

Wizard.Step = Step;
