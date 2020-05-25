import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'bulma/css/bulma.css';
import Header from "../Header";
import Home from "../routes/Home";
import Order from "../routes/Order";
import Checkout from "../routes/Checkout";
import {GlobalStyle} from '../globals/ui';

import * as S from './styles';

class App extends React.Component {
	render() {
		return (
			<>
				<GlobalStyle/>
				<BrowserRouter>
					<Header />
					<S.MainContainer>
						<Route path="/" exact component={Home} />
						<Route path="/checkout" exact component={Checkout} />
						<Switch>
							<Redirect from='/order/' to='/' exact />
							<Route path='/order/:type' component={Order}/>
						</Switch>
					</S.MainContainer>
				</BrowserRouter>

			</>
		);
	};
};

export default App;
