import React from 'react'

function RemoveItemButton(props) {    
    const removeItemButtonHandler = () => {
        props.removeItem(props.id);
    };

    return (
        <div className="remove-item-button">
            <img 
                src="https://img.icons8.com/windows/40/000000/cancel.png" 
                width="25px"
                alt="Remove Item"
                onClick={removeItemButtonHandler}
                />
        </div>
    );
}

export default RemoveItemButton;