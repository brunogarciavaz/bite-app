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
