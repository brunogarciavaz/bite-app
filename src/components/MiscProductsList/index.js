import React, { Component } from 'react';
import {Divider, FlexRow, Button, ModalTitle} from '../globals/ui'
import Modal from '../Modal';
import MiscProduct from './MiscProduct'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMisc, addOrder } from '../../actions/index';

 class MiscProductsList extends Component {
	state = {
		isModalActive: false,
		activeProduct: null,
	 };

	componentDidMount() {
		if(!this.props.products.miscArray.length) {
			this.props.fetchMisc();
		}
	}

 addMiscOrder(product) {
	 this.props.addOrder({
		 orderData: {
			 nutrients: product.nutrients,
			 price: product.price,
		 },
		 orderType: "misc",
		 orderName: product.name
	 })
 }
	renderList() {
		const { miscArray } = this.props.products
		return miscArray.map((product) => {
			return (
				<div className="column" key={product.id}>
					<MiscProduct
						product={product}
						onClick={(e) => this.setState({activeProduct: product}, this.toggleModal())}
						isMini={this.props.isMini}
					/>
				</div>
			)
		})
	}

	toggleModal() {
		this.setState({isModalActive: !this.state.isModalActive})
	}
	renderModal() {
		if(this.state.activeProduct) {
			return (
				<Modal
					isActive={this.state.isModalActive}
					hideModal={(e) => this.toggleModal()}
				>
					<div className="modal-card">
						<header className="modal-card-head">
							<p className="modal-card-title">{this.state.activeProduct.name}</p>
							<button onClick={(e) => this.toggleModal()} className="delete" aria-label="close"></button>
						</header>
						<section className="modal-card-body">
						<ModalTitle>
							<FlexRow grow>
								<span className="title is-4">1x {this.state.activeProduct.name}</span>
								<span className="title is-5 has-text-right">U$ {this.state.activeProduct.price}</span>
							</FlexRow>
						</ModalTitle>
						<Divider/>
						<FlexRow grow>
							<span className="title is-4">Kcal:</span>
							<span className="title is-5 has-text-right">{this.state.activeProduct.nutrients.kcal}</span>
						</FlexRow>
						</section>
						<footer className="modal-card-foot">
							<Button isPrimary isFullWidth onClick={(e) => {this.addMiscOrder(this.state.activeProduct); this.toggleModal()}}>Add to cart</Button>
							<Button isDanger isFullWidth onClick={(e) => this.toggleModal()}>Cancel</Button>
						</footer>
					</div>

				</Modal>
			)
		}
	}

  render() {
    return (
      <div className="columns">
			{this.renderList()}
			{this.renderModal()}
      </div>
    );
  }
}


function mapStateToProps(state) {
	return {
		products: state.miscProducts,

	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchMisc, addOrder}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MiscProductsList);
