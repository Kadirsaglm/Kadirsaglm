import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Email:"",
        pass:"",
        isLoggedIn:false
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }

    handleChange(event) {
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleClick(){

        if(this.state.pass==='123'&& this.state.Email==='123@gmail.com'){
            this.setState({
                isLoggedIn: true
            })
        }
        else{
            alert("Invalid e-mail or password");
        }
    }



  render() {
          return (
            <div id="loginpage">
                {!this.state.isLoggedIn ?
                    <div id="form">
                        <form>
                            <input id="mail" name="Email" type="email" placeholder="E-mail "
                                   onChange={this.handleChange}/>
                            <input id="pass" name="pass" type="password" placeholder="Password"
                                   onChange={this.handleChange}/>
                            <button type="submit" onClick={this.handleClick}> Log In</button>
                        </form>
                    </div> : <h1>You logged in</h1>
                }
            </div>
          );
  }
}

export default App
