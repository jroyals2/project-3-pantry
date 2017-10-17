import React, { Component } from 'react';

class SignUpForm extends Component {
    state = {
        newUser: {
            userName: '',
            password: ''
        }
    }
    handleChange = (event) => {
        const attribute = event.target.name
        const newUser = {...this.state.newUser}
        newUser[attribute] = event.target.value
        console.log("Cha cha change!")
        this.setState({newUser})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        this.props.updateUser(this.state.newUser)
        const emptyForm = {
        userName: '',
        password: '',
        }
        this.setState({newUser: emptyForm})
    }


    render() {
        return (
            <div>
                <h1>Sign Up Here!</h1>
                <form onSubmit={this.handleSubmit} action="">
                    <div>
                        <label htmlFor="userName">User Name</label>
                        <input onChange={this.handleChange} type="text" name="userName" value={this.state.newUser.userName}/>
                    </div>                
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} type="text" name="password" value={this.state.newUser.password}/>
                    </div>
                    <button type="submit">Sign up!</button>
                </form>
            </div>
        );
    }
}

export default SignUpForm;