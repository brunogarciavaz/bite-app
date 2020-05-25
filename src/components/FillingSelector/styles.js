import styled from 'styled-components'
import checkSvg from '../../assets/icons/check-solid.svg';
import plusSvg from '../../assets/icons/plus-solid.svg';

export const CategoryTitle = styled.div`
	width: 100%;
	background: linear-gradient(45deg, #1f6b1c, #168812);
	font-size: 1.5rem;
	font-weight: 500;
	padding: 0.5rem;
	h1 {
		color: white;
		font-weight: 600;
	}


`

export const FillingList = styled.ul`
	list-style: none;
	padding: 20px;
	label {
		display: inline-block;
		background-color: rgba(255, 255, 255, .9);
		border: 2px solid rgba(139, 139, 139, .3);
		color: #adadad;
		border-radius: 15px;
		width: 100%
		white-space: nowrap;
		margin: 3px 0px;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		transition: all .2s;
		padding: 8px 12px;
		cursor: pointer;
		&::before {
			display: inline-block;
			width: 1.2rem;
			padding: 2px 6px 2px 2px;
			content: url(${plusSvg});
			transition: transform .3s ease-in-out;
		}
	}
	input[type="checkbox"] {
		&:checked {
			&+label {
				&::before {
					content: url(${checkSvg});
					width: 1.2rem;
					transform: rotate(-360deg);
					transition: transform .3s ease-in-out;
				}

				background-color: #24282d;
				color: #fff;
				transition: all .2s;
			}
		}
		display: absolute;
		position: absolute;
		opacity: 0;
		&:focus {
			&+label {
				border: 2px solid #e9a1ff;
			}
		}
	}
	}
	}


`
