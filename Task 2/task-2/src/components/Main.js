import React, { useState } from "react";
import "../css/main.css";
import Loading from "./Loading";

const Navbar = () => {
  const [user, setuser] = useState([]);
  const [loading, setloading] = useState(false)
  const getUser = async () => {
    setloading(true)
    const response = await fetch("https://reqres.in/api/users?page=1");
    let data = await response.json();
    setuser(data.data);
    setloading(false)

  };
  const next = async () => {
    setloading(true)

    const response = await fetch("https://reqres.in/api/users?page=2");
    let data = await response.json();
    setuser(data.data);
    setloading(false)

  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Get Users from API
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navitem collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page">
                Home
              </a>
            </div>
            <div className="button">
              <button type="button" className="btn btn-dark" onClick={getUser}>
                Get Users
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="loadingDiv">
        {loading ? <Loading /> : " "}
      </div>
      <div className="container">
        {user.map((element) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={element.id}>
              <img
                className="card-img-top"
                src={element.avatar}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {element.id} : {element.first_name} {element.last_name}
                </h5>
                <p className="card-text">Email : {element.email}</p>
              </div>
            </div>
          );
        })}
        
      </div>
      <nav className="page" aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#" onClick={getUser}>
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={next}>
              2
            </a>
          </li>
        </ul>
      </nav>
      
    </>
  );
};

export default Navbar;
