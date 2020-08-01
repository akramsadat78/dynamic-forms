/* import **/
import React from 'react';

/* select tag */
const DropdownSelect = ({ required, name, lableName, _handleChange, val }) => ( <
        div >
        <
        select name = { name }
        onChange = { _handleChange }
        required = { required } >
        <
        option value = "" > select item < /option> {
            lableName.map((values, i) => < option value = { val[i] }
                key = { values } > { values } < /option>)} <
                /select>

                <
                /div>
            );

            export default DropdownSelect;