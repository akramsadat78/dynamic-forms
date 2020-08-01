/* imports */
import React from 'react';
import axios from 'axios';
import FormsTitle from '../axios/FormsTitle';
import FormDetails from '../axios/FormDetails';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import UserComponent from '../user/UserComponent';

/* component AxiosComponent for getting titles and details of forms from backend  */
export default class AxiosComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                isLoaded: false,
                items: [],
                url: ''
            };
        }

        componentDidMount() {
            axios.get("http://localhost:5000/api/forms")
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            items: result.data.items,
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )
        }

        render() {
                const { error, isLoaded, items } = this.state;
                if (error) {
                    return <div > Error: { error.message } < /div>;
                } else if (!isLoaded) {
                    return <div > Loading... < /div>;
                } else {

                    return ( <
                        Router >

                        { /* component of FormsTitle for showing titles's link */ } <
                        Route exact path = { `/` }
                        component = {
                            () => < FormsTitle i = { items }
                            /> }/ >

                            { /* component of FormDetails for getting details of form from backend*/ } {
                                items.map((item, index) => ( <
                                        Route path = { `/user${index + 1}` }
                                        component = {
                                            () => < UserComponent idform = { item.fields }
                                            />}/ >
                                        ))
                                }

                                <
                                /Router>
                            );
                        }
                    }
                }