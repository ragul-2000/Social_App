import React, { useContext } from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
const Login = () => {
  const {login}= useContext(AuthContext);
  const handleLogin = () =>{
    login()
  }
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quos facilis id ipsum tempore dolores sed vero alias dolor accusantium. Perferendis maxime necessitatibus doloremque architecto omnis a placeat ad aspernatur?</p>
                <span>Don't you have an account?</span>
                <Link to ="/register">
                <button>Register</button>
                </Link>
            </div>
             <div className="right">
                <h1>Login</h1>
                <form>
                <input placeholder="Username" type="text"></input>
                <input placeholder="Password" type="password"></input>
                <button onClick={handleLogin}>Login</button>
                </form>
             </div>
        </div>
    </div>
  )
}

export default Login