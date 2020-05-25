import React, { Component } from 'react';
import Button from '../../Button';
import {Divider, FlexRow, Card} from '../../globals/ui'
import OrderTable from '../../OrderTable';
import Modal from '../../Modal';
import { removeOrder } from '../../../actions/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import * as S from './styles';

class Checkout extends Component {

	state = {
		isRemoveModalActive: false,
		activeOrder: null,
	 };

	 toggleRemoveModal(order) {
	 		 this.setState({isRemoveModalActive: !this.state.isRemoveModalActive, activeOrder: order})
	 	}

	renderRemoveModal() {
	 			return (
	 				<Modal
	 					isActive={this.state.isRemoveModalActive}
	 					hideModal={(e) => this.toggleRemoveModal()}
	 				>
	 					<div className="modal-card">
	 						<header className="modal-card-head">
	 							<p className="modal-card-title">Are you sure?</p>
	 							<button onClick={(e) => this.toggleRemoveModal()} className="delete" aria-label="close"></button>
	 						</header>
	 						<section className="modal-card-body">

								<Button className="button is-danger" onClick={(e) => {this.props.removeOrder(this.state.activeOrder); this.toggleRemoveModal()}}>Remove Item</Button>
								<Button onClick={(e) => this.toggleRemoveModal()} className="button">Cancel</Button>
	 						</section>
	 					</div>

	 				</Modal>
	 			)

	 	}

	renderShoppingBagList() {
			return this.props.shoppingBag.orders.map((order, index) => {
				return (
					<CSSTransition key={order.id} timeout={400} classNames="transition">
						<S.ShoppingBagTableItem>
							<FlexRow grow>
								<div>
									<h2>{order.orderName[0].toUpperCase() + order.orderName.slice(1)} </h2>
									{order.orderFillings ? order.orderFillings.map((filling, i) => { return <S.Filling key={filling.id}>{(i ? ', ': '') + filling.name}</S.Filling>}) : '' }
									<S.Remove onClick={(e) => this.toggleRemoveModal(order)}>Remove</S.Remove>
								</div>
								<S.ItemPrice className="has-text-right">{order.orderData.price}</S.ItemPrice>
							</FlexRow>


						</S.ShoppingBagTableItem>
					</CSSTransition>
				)
			})

	}

  render() {
		if(!this.props.shoppingBag.orders.length) {
			return (
				<h1>No orders placeholder</h1>
			)
		}
		return (
			<>
			<div className="columns">
				<div className="column">
				</div>
				<div className="column">
					<Card>
						<h1 className="title is-3">Review your order</h1>
						<TransitionGroup component={S.TransitionGroup}>
							{this.renderShoppingBagList()}
						</TransitionGroup>
						<Divider/>
						<FlexRow grow>
						<span>Total:</span>
						<span className="has-text-right">{this.props.shoppingBag.totalPrice}</span>
						</FlexRow>
					</Card>
					<Card>
						<h1 className="title is-3">Your meal's nutrition table</h1>
						<OrderTable data={this.props.shoppingBag.totalNutrients} />
					</Card>
				</div>
			</div>
			{this.renderRemoveModal()}
		</>
		);

  }
}

function mapStateToProps(state) {
	return {
		shoppingBag: state.shoppingBag,
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({removeOrder}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
