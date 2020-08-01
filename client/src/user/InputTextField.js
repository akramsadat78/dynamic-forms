/* import */
import React from 'react';

/* input tag */
const InputTextField = ({ type, regex, required, name, _handleChange, placeholder }) => (

    <
    div >
    <
    input type = { type }
    name = { name }
    placeholder = { placeholder }
    autoComplete = "off"
    required = { required }
    pattern = { regex }
    onChange = { _handleChange }
    /> <
    /div>
);

export default InputTextField;