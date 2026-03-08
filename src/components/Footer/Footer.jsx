import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="flex justify-between items-center m-10">
                <div>Home</div>
                <div>About</div>
                <div>Skills</div>
                <div>Education</div>
                <div>Experience</div>
                <div>Projects</div>
            </div>
            <div className='text-center text-white teg-line'>CRAFTING CLEAN CODE</div>
        </div>
    );
};

export default Footer;