

import React from 'react';
import {Form} from 'react-bootstrap';





export class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    handleSubmit(event) {

        event.preventDefault();
        const formData = new FormData(event.target);

        const email = formData.get('email');
        const password = formData.get('password');

        fetch("http://localhost:4000/api/registration", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify({email: email,
                password: password })})
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);

                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    console.log(error);

                }
            )

        event.preventDefault();
    }

    render() {
        return (

            <h3><h1>Form Register</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="name"
                                      name="name" class="field" placeholder="Example: UserName"/>

                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control id="email"
                                      name="email" type="email"  placeholder="Example: example@gmail.com"/>

                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Enter Pasword"/>

                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Confirm Pasword"/>
                    </Form.Group>
                    <button variant="primary" type="submit">Submit</button>
                </Form>

                </h3>



        );
    }
}

