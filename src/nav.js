import {Link} from "react-router-dom";

 

const Nav = () =>{

    return (

        <div className="nav-bar-links">

            <header className="nav-bar-links"> 

                <Link to="/"> Home

                </Link>

                <Link to="/list"> My To Do List

                </Link>

                <Link to="/createNew"> Create A New Task

                </Link>

                <Link to="/details"> View the Details of A Task

                </Link>
                <Link to="/login">
                sign-innnn
                </Link>

                <Link to="createaccount">
                create-account
                </Link>
  
                <Link to="searching">
                search
                </Link>
                

            </header>

 

        </div>

 

    );

};

 

export default Nav;