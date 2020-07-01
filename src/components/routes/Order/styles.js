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

export const ModalFillings = styled.div`
 span {
	 color: #7a7a7a;
 }
`

export const PriceRows = styled.div`

	span {
		color: #464646;
		&:nth-child(2) {
			text-align: right;
		}
	}

`

export const ModalTitle = styled.div`
	text-transform: capitalize;
	padding: 0 20px;

`

export const ModalMisc = styled.div`

`
