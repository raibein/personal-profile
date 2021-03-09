import React, { Component }from 'react';

import { MemoryRouter, Switch, Route } from 'react-router-dom';

import {Jumbotron, Container, Button, Form} from 'react-bootstrap';
import {ButtonToolbar} from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';


class SignupComponent extends Component {
    render() {
        return (
            <div>
                <Container className="p-3">
                    <Jumbotron>
                        <h1 className="header">Welcome To Sign Up Page</h1>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form>
                            Sign up form here
                    </Jumbotron>
                </Container>
            </div>
        )
    }
}

export default SignupComponent