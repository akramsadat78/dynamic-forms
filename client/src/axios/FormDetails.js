/* imports */
import React from 'react';
import axios from 'axios';
import UserComponent from '../user/UserComponent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

/* component of FormDetails for getting details of form from backend */
export default class FormDetails extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                isLoaded: false,
                fields: []
            };
        }

        componentDidMount() {
            axios.get(`http://localhost:5000/api/forms/${this.props.idform}`)
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            fields: result.data.fields,
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
            const { error, isLoaded, fields } = this.state;

            if (error) {
                return <div > Error: { error.message } </div>;
            } else if (!isLoaded) {
                return <div > Loading... </div>;
            } else {

                return ( < ul >

                    { /* component of UserComponent for showing user's form and send imformations to backend*/ } {
                        fields.map((item, index) => ( <
                                Route path = { `/user${index + 1}` }
                                component = {
                                    () => < UserComponent i = { fields }
                                    /> }/ >
                                ))
                        }

                        </ul>
                    );
                }
            }
        }