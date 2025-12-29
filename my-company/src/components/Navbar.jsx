import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
    const navStyle = {
        padding : "10px",
        display: 'flex',
        gap: '20px',
        padding: '1rem',
        backgroundColor: '#f4f4f4',
        justifyContent: 'center',
        borderBottom: '1px solid #ccc',
        marginBottom: '20px'
    }
    const linkStyle = {
        textDecoration: 'none',
        color: '#333',
        fontWeight: 'bold',
        fontSize: '18px',
    }

    return (
    <nav style ={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
    </nav>
    );
}
export default Navbar;