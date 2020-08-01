/* imports */
import React, { Component } from 'react';
import '../css/firstPage.css';

/* component of FormsTitle for showing titles's link */
export default class FormsTitle extends Component {


    render() {
        return ( <
            div >

            <
            div id = "name" > in the name of God < /div> <
            div id = "border" >

            { /* url and name of titles's link */ } {
                this.props.i.map((item, index) => ( <
                    li key = { index } >
                    <
                    a href = { `/user${index + 1}` } > { item.title } < /a> <
                    /li>
                ))
            }

            <
            /div> <
            /div>
        );
    }
}