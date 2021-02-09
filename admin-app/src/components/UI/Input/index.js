import React from 'react'

function Input(props) {
    return (
        <div className="formgroup">
            <label className="form-label">{props.label}</label>
            <input 
                type={props.type} 
                className="form-control" 
                value={props.value}
                onChange={props.onChange}    
            />
            <div className="invalid-feedback">
                {props.errorMessage}
            </div>
        </div>
    )
}

export default Input
