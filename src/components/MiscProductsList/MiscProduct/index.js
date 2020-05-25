import React, { Component } from 'react';
import { Button } from '../../globals/ui'
import * as S from './styles';



const MiscProduct = props => {



		return (
			<S.MiscButton onClick={props.onClick} isMini={props.isMini}>
			<S.MiscImage src={`/assets/imgs/misc/${props.product.id}.png`}/>
			<S.MiscTitle>
				<h1>{props.product.name}</h1>
			</S.MiscTitle>
			<S.MiscPrice>
				${props.product.price}
			</S.MiscPrice>

		</S.MiscButton>
    );

}


export default MiscProduct;
