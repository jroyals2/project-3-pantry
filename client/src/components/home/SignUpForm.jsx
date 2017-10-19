import React, { Component } from 'react';
import styled from 'styled-components'

const SignUpWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`
//Found a fun button generator at http://css3buttongenerator.com/

const SignUpButton = styled.button`
justify-content: center;
-webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  background: #424242;
  padding: 4px 8px 4px 11px;
  border: solid #000000 2px;
  text-decoration: none;
  &:hover {
  background: #6e6e6e;
  background-image: -webkit-linear-gradient(top, #6e6e6e, #f2f2f2);
  background-image: -moz-linear-gradient(top, #6e6e6e, #f2f2f2);
  background-image: -ms-linear-gradient(top, #6e6e6e, #f2f2f2);
  background-image: -o-linear-gradient(top, #6e6e6e, #f2f2f2);
  background-image: linear-gradient(to bottom, #6e6e6e, #f2f2f2);
  text-decoration: none;
}
`
class SignUpForm extends Component {
    state = {
        newUser: {
            userName: '',
            password: ''
        }
    }
    handleChange = (event) => {
        const attribute = event.target.name
        const newUser = { ...this.state.newUser }
        newUser[attribute] = event.target.value
        console.log("Cha cha change!")
        this.setState({ newUser })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        this.props.updateUser(this.state.newUser)
        const emptyForm = {
            userName: '',
            password: '',
        }
        this.setState({ newUser: emptyForm })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} action="">
                    <SignUpWrapper>
                        <h1>Sign Up Here!</h1>
                        <div>
                            <label htmlFor="userName">User Name: </label>
                            <input onChange={this.handleChange} type="text" name="userName" value={this.state.newUser.userName} />
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input onChange={this.handleChange} type="text" name="password" value={this.state.newUser.password} />
                        </div>
                        <SignUpButton type="submit">Sign up!</SignUpButton>
                    </SignUpWrapper>
                </form>
            </div>
        );
    }
}

export default SignUpForm;