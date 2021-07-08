import React from 'react';
import {button, Form} from 'react-bootstrap';
import UserBar from '../todo/todo';
import RegisterBar from '../todo/todoregist'




export class NameForm extends React.Component {


  render() {
    return (
      
        <h3><h1>Form Register</h1>
        <Form >
        <Form.Group controlId="name">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="name" 
      	name="name" class="field" placeholder="Example: UserName"/>
        
        <Form.Label>Email Adress</Form.Label>
        <Form.Control id="email"
      	name="email" type="email"  placeholder="Example: example@gmail.com"/>
    
        <Form.Label>Pasword</Form.Label>
        <Form.Control type="pasword" name="pasword" placeholder="Enter Pasword"/>
        
        <Form.Label>Confirm Pasword</Form.Label>
        <Form.Control type="pasword" placeholder="Enter Confirm Pasword"/>
        </Form.Group>
        <button variant="primary" type="submit">Submit</button>
        </Form>
        
        </h3>
        
        
    
    );
  }
}

