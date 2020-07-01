import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
			<div className={`modal ${props.isActive ? "is-active" : ""}`}>
				<div onClick={props.hideModal} className="modal-background"></div>
					<div className="modal-content">
					{props.children}
				</div>
			</div>,
			document.getElementById('modals-root')
		)
}

export default Modal
