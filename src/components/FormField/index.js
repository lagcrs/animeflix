import React from 'react';
import PropTypes from 'prop-types';

export default function FormField({ label, type, nome, valor, onChange }){
    const fieldId = `id_${nome}`;
    return(
        <div>
            <label htmlFor={fieldId}>
            {label}: 
            <input 
                id={fieldId}
                type={type}
                name={nome}
                value={valor} 
                onChange={onChange}/>
        </label>
        </div>
    )
};

FormField.defaultProps = {
    type: 'text'
}

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func
}