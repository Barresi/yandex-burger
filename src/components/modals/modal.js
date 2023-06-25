import React from 'react';
import ReactDOM from 'react-dom';


import ModalIngredients from './modal-ingredients/modal-ingredients';

const modalRootElement = document.querySelector("#modal");

const ModalWindow = (props) => {
     
     return ReactDOM.createPortal(<ModalIngredients dataIngredients={props.dataIngredients}/>, modalRootElement)
}

export default ModalWindow

