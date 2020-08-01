/* imports */
import React, { Component, useReducer } from 'react';
import '../css/secondPage.css';
import axios from 'axios';
import InputTextField from './InputTextField';
import DropdownSelect from './DropdownSelect';
import googleImg from "../img/google.jpg";

{ /* component of UserComponent for showing user's form and send imformations to backend*/ }
export default class UserComponent extends Component {

    state = {
        fields: this.props.idform
    }

    _handleChange = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }

    submitform = event => {
        const { fields, ...inputFields } = this.state;

        event.preventDefault();

        alert("form information enterd :) ")

        axios
            .post('http://localhost:3001/getData', inputFields)
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        const { fields } = this.state;

        return (

            <
            div >
            <
            div id = "name" > please fill out this form < /div> <
            form onSubmit = { this.submitform } >
            <
            div id = "border" > {
                fields.map(form => {
                    if (form.options != null) {
                        return ( <
                            div id = "section" >

                            <
                            div id = "lables" >
                            <
                            label > { form.title } < /label> <
                            /div>

                            <
                            DropdownSelect name = { form.name }
                            required = { Boolean(form.required) }
                            lableName = {
                                form.options.map(i => {
                                    return i.label
                                })
                            }
                            val = {
                                form.options.map(i => {
                                    if (form.type === "Text") {
                                        return i.value
                                    } else {
                                        return i.value.lat + " " + i.value.long
                                    }
                                })
                            }
                            placeholder = { form.title }
                            _handleChange = { this._handleChange }
                            />

                            <
                            /div>
                        );
                    }
                    if (form.type === "Text") {
                        return ( <
                            div id = "section" >

                            <
                            div id = "lables" >
                            <
                            label > { form.title } < /label> <
                            /div>

                            <
                            InputTextField name = { form.name }
                            placeholder = "enter text"
                            type = "text"
                            required = { Boolean(form.required) }
                            _handleChange = { this._handleChange }
                            />

                            <
                            /div>
                        );
                    }
                    if (form.type === "Number") {
                        return ( <
                            div id = "section" >

                            <
                            div id = "lables" >
                            <
                            label > { form.title } < /label> <
                            /div>

                            <
                            InputTextField name = { form.name }
                            placeholder = "enter float number"
                            required = { Boolean(form.required) }
                            type = "text"
                            _handleChange = { this._handleChange }
                            regex = { "^[-+]?[0-9]+[.][0-9]" }
                            />

                            <
                            /div>
                        );
                    }
                    if (form.type === "Date") {
                        return ( <
                            div id = "section" >

                            <
                            div id = "lables" >
                            <
                            label > { form.title } < /label> <
                            /div>

                            <
                            InputTextField name = { form.name }
                            type = { form.type }
                            required = { Boolean(form.required) }
                            _handleChange = { this._handleChange }
                            />

                            <
                            /div>
                        );
                    }
                    if (form.type === "Location") {
                        return ( <
                            div id = "section" >

                            <
                            div id = "lables" >
                            <
                            label > { form.title } < /label> <
                            /div>

                            <
                            img src = { googleImg }
                            />

                            <
                            /div>
                        );
                    }
                })
            } <
            /div>

            <
            div id = "border2" >
            <
            div id = "sectionSubmit" >
            <
            button type = "submit"
            class = "button" > submit < /button> <
            /div> <
            /div>

            <
            /form>

            <
            /div>
        )
    }
}