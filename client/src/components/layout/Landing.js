import React, { Fragment } from "react";
import { Link, Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  return (
    <section class="landing">
      <div class="dark-overlay">
        <div class="landing-inner">
          <h1 class="x-large">Developer Connector</h1>
          <p class="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div class="buttons">
            {isAuthenticated ? (
              <Fragment>
                <Link to="/dashboard" class="btn btn-primary">
                  Dashboard
                </Link>
              </Fragment>
            ) : (
              <Fragment>
                <Link to="/register" class="btn btn-primary">
                  Sign Up
                </Link>
                <Link to="/login" class="btn btn-light">
                  Login
                </Link>
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
