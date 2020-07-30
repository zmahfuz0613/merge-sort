import React, { Component } from 'react';
import './index.css'



class App extends Component {
  constructor() {
    super()
    

    this.state = {

      email: '',
      password: '',
      passwordConfirm: '',
      emailError: "",
      passwordError: "",
      passwordConfirmError: "",
      valid: false

    }
  }
  
  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    let emailError = "";
    let passwordConfirmError = ""
    let passwordError = ""

    if (this.state.password !== this.state.passwordConfirm) {
      passwordError = "password doesn't match";
    }

    if (emailError || passwordConfirmError) {
      this.setState({ emailError, passwordConfirmError });
      return false;
    } else if (passwordError || passwordConfirmError) {
      this.setState({ passwordError, passwordConfirmError })
      return false
    }
  
    return true;
  };

handleSubmit = event => {
  event.preventDefault();
  const isValid = this.validate();
  if (isValid) {
    console.log(this.state);
    // clear form
    this.setState({valid:true});
  } else {
    this.setState({valid:false})
  }
};


    render() {
    
      return (
    
        <form onSubmit={this.handleSubmit}>

          <div>
            <h1> Sign up</h1>
          </div>

          <div>
            <input
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordError}
            </div>
          </div>
          <div>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="confirm password"
              value={this.state.passwordConfirm}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordConfirmError}
            </div>
          </div>
          <button type="submit">submit</button>

          <h4>{this.state.valid ? 'valid' : 'invalid'}</h4>

        </form>
    
  
    
      )
    
  }
}

export default App;

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       email: "",
//       password: "",
//       passwordConfirm: "",
//       passwordsMatch: true,
//     }
//   }
//   handlePasswordChange = (e) => {
//     this.setState({
//       password: e.target.value,
//     })
//   }
//   handlePasswordConfirmChange = (e) => {
//     this.setState({
//       passwordConfirm: e.target.value,
//     })
//   }
//   checkPasswords = (e) => {
//     e.preventDefault()
//     const passwordsMatch = this.state.password === this.state.passwordConfirm
//     this.setState({
//       passwordsMatch: passwordsMatch,
//     })
//   }
//   render() {
//     return (
//       <form onSubmit={this.checkPasswords}>
//         <input type="text" />
//         <input type="password" onChange={this.handlePasswordChange} />
//         <input type="password" onChange={this.handlePasswordConfirmChange} />
//         <input type="submit" />
//         {this.state.passwordsMatch ? 'Valid!' : 'Passwords do not match'}
//       </form>
//     )
//   }
// }
// done
