import MediaQuery from "react-responsive";
import React from "react";
import "./Navbar.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <>
    {console.log(dispatch)}
      <MediaQuery minWidth={850}>
        <nav className="navbar container-fluid">
          <Link to="/">
            <div className="logo">
              <img
                src="https://bizmonthly.com/wp-content/uploads/2020/04/amazon-logo-black.png"
                alt="nhi mil rahi"
              />
            </div>
          </Link>
          <div className="navlist">
            <div className="option">
              Hello
              <span>Guest</span>
            </div>
            <a href="https://courageous-shortbread-fd0286.netlify.app/">
            <div className="option">
              <img
                src="https://play-lh.googleusercontent.com/Uyk7DkQElC-0OfJCOHZLIgnQ0ulHoEC06d9ENRklNh-0t6nrFc6mqmpRMajoVU3Yt9w"
                alt=""
                style={{ height: "70px", width: "60px" }}
              />
            </div>
            </a>
            <Link to="/cart">
              <div className="option">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                  alt=""
                />
                <span>
                  <strong>{cart?.length}</strong>
                </span>
              </div>
            </Link>

            <div className="option">
              Your Orders
              <span>0</span>
            </div>
          </div>
        </nav>
      </MediaQuery>
      <MediaQuery maxWidth={850}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/">
              <div className="navbar-brand logo">
                <img
                  src="https://bizmonthly.com/wp-content/uploads/2020/04/amazon-logo-black.png"
                  alt="nhi mil rahi"
                />
              </div>
            </Link>
            <Link to="/cart">
              <div className="nav-item option">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                  alt=""
                  style={{ height: "30px" }}
                />
                <span>
                  <strong>{cart?.length}</strong>
                </span>
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <div className="nav-link active">
                    Hello
                    <span>Guest</span>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="https://courageous-shortbread-fd0286.netlify.app/">
                    <div className="nav-link option">
                      <img
                        src="https://img.icons8.com/color/2x/amazon-prime-video.png"
                        alt=""
                        style={{ height: "70px", width: "60px" }}
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </MediaQuery>
    </>
  );
};
