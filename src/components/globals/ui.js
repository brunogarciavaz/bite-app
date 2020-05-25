
import styled, {createGlobalStyle} from 'styled-components'
import { colors } from './variables'


export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');
	body, * {
		font-family: Lato;
	}
`

export const Divider = styled.div`
	width: 100%;
	border-top: #dcdcdc solid 1px;
	margin: 10px 0;
`

export const FlexRow = styled.div`
	display: flex;
	flex-flow: row nowrap;
	&>* {
		flex-grow: ${props => (props.grow ? `1` : '0')};
	}

`

export const Button = styled.button.attrs(props => ({
  className: "button",
}))`
	width: ${props => props.isFullWidth ? '100%' : 'auto'};
	transition: all 0.2s ease-out;

	${props => {
	 if (props.isPrimary) {
		return `
			background: ${colors.green};
			color: white;

			&:hover {
				background-color: ${colors.greenDarken};
				color: white;
			}
	`
	}}}
	${props => {
	 if (props.isDanger) {
		return `
			background: ${colors.danger};
			color: white;

			&:hover {
				background-color: ${colors.dangerDarken};
				color: white;
			}
	`
	}}}

`

export const Card = styled.div`
	padding: 2rem;
	box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.20);
	border: 1px solid #dfdfdf;
	margin: 3rem;
	h1 {
		padding-top: 1rem;
		padding-bottom: 1.5rem;
	}

`

export const ModalTitle = styled.div`
	text-transform: capitalize;
	padding: 0 20px;

`
