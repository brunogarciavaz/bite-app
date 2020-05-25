import React from 'react';
import * as S from './styles'

export default function Banner({type}) {
	const BannerType = S[type]
    return (
			<BannerType>
				{type} placeholder
			</BannerType>
    );
}
