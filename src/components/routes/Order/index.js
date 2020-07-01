import React, { Component } from 'react';
import OrderTable from '../../OrderTable';
import FillingSelector from '../../FillingSelector';
import MiscProductsList from '../../MiscProductsList'
import Modal from '../../Modal';
import {Divider, FlexRow, Card, Button} from '../../globals/ui'
import { newCurrentOrder, clearCurrentOrder, addOrder } from '../../../actions/';
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as S from './styles'

class Order extends Component {

	state = {
		isModalActive: false,
	 };

	componentDidMount() {
	this.props.newCurrentOrder(this.props.match.params.type)
 }

	componentWillUnmount() {
	 this.props.clearCurrentOrder();
 }


toggleModal() {
		 this.setState({isModalActive: !this.state.isModalActive})
	}

renderModal() {

 			return (
 				<Modal
 					isActive={this.state.isModalActive}
 					hideModal={(e) => this.toggleModal()}
 				>
 					<div className="modal-card">
 						<header className="modal-card-head">
 							<p className="modal-card-title">Your {this.props.match.params.type} order </p>
 							<button onClick={(e) => this.toggleModal()} className="delete" aria-label="close"></button>
 						</header>
 						<section className="modal-card-body">
						<S.ModalTitle>
							<FlexRow grow>
								<span className="title is-4">1x {this.props.currentOrder.orderType}</span>
								<span className="title is-5 has-text-right">U$ {this.props.currentOrder.orderData.price}</span>
							</FlexRow>
						</S.ModalTitle>
						<S.ModalFillings>
							{this.props.currentOrder.orderFillings.map((filling, i) => { return <span key={filling.id}>{(i ? ', ': '') + filling.name}</span>})}
						</S.ModalFillings>
						<Divider/>
						<S.PriceRows>
							<FlexRow grow>
								<span>Delivery Fee:</span>
								<span>U$ 0</span>
							</FlexRow>
							<FlexRow grow>
								<span>Total:</span>
								<span>U$ {this.props.currentOrder.orderData.price}</span>
							</FlexRow>
						</S.PriceRows>
						<Divider/>
						<S.ModalMisc>
						<h4 className="title is-4">People also order:</h4>
						<MiscProductsList isMini/>
						</S.ModalMisc>

 						</section>
 						<footer className="modal-card-foot">
 							<Button isPrimary isFullWidth as={Link} to="/checkout" onClick={(e) => this.props.addOrder(this.props.currentOrder)} className="is-large"> Proceed to checkout </Button>
 							<Button isDanger isFullWidth onClick={(e) => this.toggleModal()} className="is-large">Cancel</Button>
 						</footer>
 					</div>

 				</Modal>
 			)

 	}
render() {
		const { match: { params } } = this.props;
		if (params.type !== 'sandwich' && params.type !== 'wrap') return <Redirect to='/' />

		return (
				<>
				<div className="columns">
				<S.ColumnSection bgColor="#f7f7f7">
						<h3 className="title is-3">Customize your {params.type}</h3>
						<FillingSelector/>
				</S.ColumnSection>

				<div className="column">
					<S.Fixed>
						<Card>
							<FlexRow grow>
								<span className="title is-4">1x {this.props.currentOrder.orderType}</span>
								<span className="title is-5 has-text-right">U$ {this.props.currentOrder.orderData.price}</span>
							</FlexRow>
							<div className="columns">
							<div className="column">
									<Button isPrimary isFullWidth onClick={(e) => this.toggleModal()} className="is-large"> Finish Order </Button>
							</div>
							<div className="column">
								<Button isDanger isFullWidth as={Link} to="/" className="is-large"> Cancel Order </Button>
							</div>
							</div>
						</Card>
						<Card>
							<h1 className="title is-3">Nutrition Facts</h1>
							<OrderTable data={this.props.currentOrder.orderData.nutrients}/>
						</Card>
					</S.Fixed>
				</div>
				</div>
				{this.renderModal()}
				</>

		)


  }
}

function mapStateToProps(state) {
	return {
		currentOrder: state.currentOrder,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({newCurrentOrder, clearCurrentOrder, addOrder}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);
