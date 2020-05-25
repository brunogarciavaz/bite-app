import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../Banner/'
import MiscProductsList from '../../MiscProductsList'
import Container from '../../Container'
import * as S from './styles'

export default class Home extends Component {
  render() {
    return (

				<S.Section>
					<div className="columns">
						<Link className="column" to="/order/sandwich">
							<Banner type="sandwich" />
						</Link>
						<Link className="column" to="/order/wrap">
							<Banner type="wrap" />
						</Link>
					</div>
						<MiscProductsList/>
				</S.Section>

    );
  }
}
