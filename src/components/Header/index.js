import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/logo.png';
import ShoppingBag from '../ShoppingBag'
import * as S from './styles'

class Header extends Component {
  render() {
    return (
			<S.Header>
				<S.HeaderContainer>
					<Link to="/">
						<S.Logo src={logo} alt="Logo" />
					</Link>
				<Link to="/checkout">
					<ShoppingBag />
				</Link>
				</S.HeaderContainer>
			</S.Header>
    );
  }
}

export default Header
