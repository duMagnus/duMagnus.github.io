import React from "react";
import {Backdrop, ModalContainer} from "./modal.styles";

export const Modal = ({ closeModal, children }) => {
    return(
        <>
            <Backdrop onClick={closeModal}/>
            <ModalContainer>
                {children}
            </ModalContainer>
        </>
    )
}