import React from 'react';

const ModalPopup = ({show, children}) => {
    
    return (
        show && (
            <div className="popupBackground">
                <div className="popupContainer">
                    {children}
                </div>
            </div>
        )
    )
}

export default ModalPopup;
