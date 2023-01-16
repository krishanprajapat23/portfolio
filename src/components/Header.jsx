import React from "react";
import PropTypes from 'prop-types';
// import React, { PropTypes } from 'react';
import HeroSec from "./HeroSec";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <section className="header-section">
        <header className="sticky-top">
            <NavBar />
        </header>
        <HeroSec name="Krishan"/>
    </section>
  );
};

HeroSec.propTypes = {
  name: PropTypes.string.isRequired
}

//default values for props
HeroSec.defaultProps = {
  name: 'Krishan'
};

export default Header;