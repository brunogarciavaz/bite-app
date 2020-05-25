import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as S from './styles'
import { ReactComponent as ShoppingBagIcon } from '../../assets/icons/shopping-bag.svg'

class ShoppingBag extends Component {


	render() {

    return (
			<S.ShoppingBagContainer>
				<S.Wrapper>
					<S.Icon>
						<ShoppingBagIcon />
					</S.Icon>

				<S.Label>
					<S.LabelName> Shopping Bag </S.LabelName>
					<S.LabelCounter>{this.props.shoppingBag.orders.length}</S.LabelCounter>
				</S.Label>
			</S.Wrapper>



			</S.ShoppingBagContainer>
    )

	}


}

function mapStateToProps(state) {
	return {
		shoppingBag: state.shoppingBag,
	}
}


export default connect(mapStateToProps)(ShoppingBag);
