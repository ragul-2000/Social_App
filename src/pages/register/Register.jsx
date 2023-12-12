import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Register Here.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quos facilis id ipsum tempore dolores sed vero alias dolor accusantium. Perferendis maxime necessitatibus doloremque architecto omnis a placeat ad aspernatur?</p>
                <span>Do you have an account?</span>
                <Link to = "/login">
                <button>Login</button>
                </Link>
            </div>
             <div className="right">
                <h1>Register</h1>
                <form>
                <input placeholder="Username" type="text"></input>
                <input placeholder="email" type="email"></input>
                <input placeholder="Password" type="password"></input>
                <input placeholder="Name" type="text"></input>
                <button>Register</button>
                </form>
             </div>
        </div>
    </div>
  )
}

export default Register