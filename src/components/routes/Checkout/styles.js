import styled from 'styled-components'
import * as V from '../../globals/variables'

export const Section = styled.div.attrs(props => ({
	className: "section",
}))`

`
export const ColumnSection = styled.div.attrs(props => ({
	className: "section column",
}))`
	background-color: ${props => props.bgColor};
`

export const Fixed = styled.div`
	position: fixed;
	width: 46%;
`

export const ShoppingBagTable = styled.div`
	padding: 2rem;
	box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.20);
	border: 1px solid #dfdfdf;
	margin: 3rem;
	h1 {
		padding-top: 1rem;
		padding-bottom: 1.5rem;
	}

`

export const ShoppingBagTableItem = styled.div`
	padding: 1rem 0;
	border-top: 1px solid #dfdfdf;
	h2 {
		font-size: 1.5em;
	}

`

export const ItemPrice = styled.span`
align-self: center;
`

export const Filling = styled.span`
font-size: .8em;
color: #6b6b6b;

`

export const Remove = styled.p`

color: #bf2d2d;
font-size: .8em;



`

export const TransitionGroup = styled.div`

.transition-enter {
	opacity: 0.01;
	transform: translateX(10px);
}
.transition-enter-active {
	opacity: 1;
	transform: translateX(0);
	transition: all 300ms ease-in;
}
.transition-exit {
	opacity: 1;
	transform: translateX(0);
}
.transition-exit-active {
	opacity: 0.01;
	transform: translateX(-10px);
	transition: all 300ms ease-in;
}

`
