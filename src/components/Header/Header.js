import React from 'react';
import ('./Header.css')

const Header = () => {
    return (
        <div className="containear text-center bg-dark text-white p-5">
            <h1 className="header-title fw-bolder"> Va<span>l</span>ha<span>ll</span>a </h1>
            <h4>Test Is Our Identity</h4>
            <h5>Total Budget: $200 Million</h5>
        </div>
    );
};

export default Header;