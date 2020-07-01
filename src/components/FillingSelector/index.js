import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFillings, addFilling, removeFilling, clearCurrentOrder } from '../../actions/index';

import * as S from './styles'

 class FillingSelector extends Component {

	componentDidMount() {
		if(!this.props.fillings.fillingsArray.length) {
			this.props.fetchFillings();
	 }
	}


	renderFillingsCategories() {
	const { fillingsArray } = this.props.fillings

		const groupedCategories = fillingsArray.reduce((accumulator, filling) => {
			if (!accumulator[filling.category]) accumulator[filling.category] = [];
			accumulator[filling.category].push(filling);
			return accumulator;
		}, {});

		return Object.keys(groupedCategories).map((category, i) => {
			return (
				<React.Fragment key={i}>
				<S.CategoryTitle><h1>{category}</h1></S.CategoryTitle>

				<S.FillingList>{
						groupedCategories[category].map((filling) => (
							<li key={filling.id}>
									<input type="checkbox" id={filling.name} onChange={e => e.target.checked ? this.props.addFilling(filling) : this.props.removeFilling(filling) } />
									<label htmlFor={filling.name}>{filling.name}</label>

							</li>
						))
				}</S.FillingList>
				</React.Fragment>
			)
		})
	}

	render() {
		const { fillingsArray, isLoading, error } = this.props.fillings
		if(isLoading && !fillingsArray.length) {
			return <h2>Loading</h2>
		}
		if(error) {
			return <h2>{error.errorMessage}</h2>
		}
		return (
			<div>

			{this.renderFillingsCategories()}
			</div>
		)
  }
}


function mapStateToProps(state) {
	return {
		fillings: state.fillings,


	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchFillings, addFilling, removeFilling, clearCurrentOrder}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FillingSelector);
