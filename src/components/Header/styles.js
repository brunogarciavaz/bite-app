import styled from 'styled-components'
import * as V from '../globals/variables'


export const Header = styled.header`
	box-shadow: 1px -6px 20px 0px #00000036;
	height: ${V.height.header};
	background-color: #FFF;
	display: flex;
	z-index: 999;
  color: black;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: background-color .3s;
  width: 100%;

`
export const HeaderContainer = styled.div`
	padding: 10px 50px;
	display: flex;
	width: 100%;
	justify-content: space-between;
`

export const Logo = styled.img`
	height: 100%;
	align-self: center;

`
