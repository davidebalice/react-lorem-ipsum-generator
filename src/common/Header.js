import React from "react";
import classes from "./Header.module.css";
import logo from "./../assets/img/logo.png";
import github from "./../assets/img/github2_white.png";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <div className="header-area">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className={classes.logoWrapper}>
                  <div className={classes.logoContainer}>
                    <img src={logo} alt="db logo" className={classes.logo} />
                  </div>
                  <div className={classes.logoContainer}>
                    <img src={github} alt="db logo" className={classes.github} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
