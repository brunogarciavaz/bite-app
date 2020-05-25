import styled from 'styled-components'
import Button from '../../Button';
import { colors } from '../../globals/variables'


// TODO: FIX BUTTON IMPORT
export const MiscButton = styled(Button)`

	background: linear-gradient(to bottom, #cdd6cc 0%, #e2e7e1 100%);
	position: relative;
	overflow: hidden;
	display: block;
	min-height: 100px;




`


export const MiscImage = styled.img`
	position: absolute;
	top: 0%;
	width: 47%;
	right: -2%;
	z-index: 3;

`
// TODO: FIX MANUAL POSITIONING
export const MiscTitle = styled.div`
	width: 100%;
	padding: 5px;
	display: block;
	position: absolute;
	text-align: left;
	padding-left: 25px;
	left: 0;
	top: 25%;
	background-color: ${colors.green};
h1 {
	color: white;
	font-weight: 600;
}
`

export const MiscPrice = styled.p`
	position: absolute;
	bottom: 0;
	padding-left: 15px;
	bottom: 8px;

`
