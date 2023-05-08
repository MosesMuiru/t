import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Nav from './nav';
import './css/style.css';

import {auth, provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import home from './home';


function LogIn() {
    const[value,setValue] = useState(""); {/* may change to [] */}
    const handleClick = () => {
        signInWithPopup(auth, provider).tlshen((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        } )
    }

    useEffect(()=> {
        setValue(localStorage.getItem('email'))
    })

    return(
        <div>
            {value?<Home/>:
            <button onClick={handleClick}>Sign In</button>
    }
        </div>
    );
}

// const LogIn = () => {
//     return (
//         <div className="login">
//             <h1>Log-In</h1>
//             <label htmlFor="username">Enter your username</label><br />
//             <input type="text" placeholder="Username" /><br />
//             <label htmlFor="Password">Enter your password</label><br />
//             <input type="password" placeholder="Password" /><br />
//         </div>
//     );
// }

export default LogIn;