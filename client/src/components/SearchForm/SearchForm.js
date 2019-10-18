import React from "react";
import "./SearchForm.css";

function SearchForm(props) {
    return(
        <div id="searchContainer">
            <h3>Book Search:</h3>
            <form id="bookSearch">
                <label htmlFor="bookInput" form="bookSearch">Enter the tile of a book below and click "Search" to view the results:</label>
                <br></br>
                <input type="text" name="bookInput" id="bookInput" form="bookSearch" onChange={(e) => props.handleChange(e)} placeholder="Book Title" required/>
                <br></br>
                <button className="btn btn-secondary btn-lg" type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
            </form>
        </div>
    );
}
 
export default SearchForm;