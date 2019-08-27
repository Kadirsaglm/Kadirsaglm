import React from "react"

function Condition(props) {
   if(!props.isLoggedIn) {
       return (
           <div id="form">
               <form>
                   <input id="mail" name="Email" type="email" placeholder="E-mail "
                          onChange={props.handleChange}/>
                   <input id="pass" name="pass" type="password" placeholder="Password"
                          onChange={ props.handleChange}/>
                   <button type="submit" onClick={ props.handleClick}> Log In</button>
               </form>
           </div>
       )
   }

}

export default Condition