import React from 'react';

export default function FormField({ label, type, nome, valor, onChange }){
    return(
        <div>
            <label>
            {label}: 
            <input 
                type={type}
                name={nome}
                value={valor} 
                onChange={onChange}/>
        </label>
        </div>
    )
}