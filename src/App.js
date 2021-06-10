import React, { useState } from "react";
import "./App.css";
import UsersData from "./Users.json";
import ReactPaginate from "react-paginate";

const App = () => {
const [users] = useState(UsersData.slice(0,12));
const [pageNumber, setPageNumber] = useState(1);

const UsersPerPage = 6
const pagesVisited = pageNumber * UsersPerPage

const displayUsers = users.slice(pagesVisited, pagesVisited + UsersPerPage).map((user) => {
    return (
        <div className="users">
            <h3>{user.id} {user.first_name} {user.last_name}</h3>
        </div>

    );
});

const pageCount = Math.ceil(users.length/UsersPerPage);

const changePage = ({selected}) =>  {
    setPageNumber(selected);
}

    return (
        <div className="page">
        <h1 className="heading">List of Users</h1>
        {displayUsers}
        <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        />
        </div>
    )
}

export default App;