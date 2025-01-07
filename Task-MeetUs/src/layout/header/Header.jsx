import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <>

           
 <div className="bg-dark text-white py-2">
        <div className=" d-flex justify-content-around align-items-center text-center col-10 col-md-7 mx-auto">
          {/* Sale Announcement */}
          <div className='text-center'>
            <span><a className="text-warning fw-bold ms-1">MEETUS VR</a> VR For All Swim Suits And Free Express Delivery - OFF 50%! </span>
            <a  className="text-warning fw-bold ms-1">ShopNow</a>
          </div>

          {/* English Button */}
          <div>
            <button className="btn btn-outline-light btn-sm">English</button>
          </div>
        </div>
      </div>


    


<header className="container -warning py-1">
      <div className="row justify-content-between align-items-center">
        <div className="-info col-12 col-md-3 text-center py-2">
          <span>MEETUS VR</span>
        </div>

        <nav className="col-12 col-md-6 -danger">
          <div className="navbar navbar-expand-md navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <Link className="nav-item" to={"/"}>
                  <a className="nav-link text-dark">
                    Home
                  </a>
                </Link>
                <li className="nav-item">
                  <a className="nav-link text-dark" >
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" >
                    About
                  </a>
                </li>
                <Link className="nav-item" to={"/"}>
                  <a className="nav-link text-dark" >
                    Sign Up
                  </a>
                </Link>
              </ul>
            </div>
          </div>
        </nav>

        <div className="col-12 col-md-3 d-flex justify-content-between align-items-center py-2">
          <div className="search" style={{ flexGrow: 1, marginRight: "1rem" }}>
            <input
              className="form-control"
              type="text"
              placeholder="Search..."
              style={{ backgroundColor: "#F5F5F5" }}
            />
          </div>
          <div className="d-flex align-items-center">
            <span style={{ marginRight: "1rem", cursor: "pointer" }}>❤</span>
            <span style={{ cursor: "pointer" }}>Cart</span>
          </div>
        </div>
      </div>
    </header>
    <div className='border-bottom' style={{marginTop:"0px"}} >
</div>






        </>
    );
}

export default Header;
