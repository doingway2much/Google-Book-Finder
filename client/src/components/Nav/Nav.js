import React from "react";
import {Link} from "react-router-dom";
import  "./Nav.css";

function Nav() {
    return(
        <nav>
            <Link className="btn btn-secondary btn-lg" to="/">Search for Books</Link>
            <Link className="btn btn-secondary btn-lg" to="/saved">View Saved Books</Link>
        </nav>
    );
}

export default Nav;