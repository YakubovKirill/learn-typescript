import React from 'react'

export const Navbar: React.FC = () => (
    <nav className='light-blue accent-2 pad1'>
        <div className="nav-wrapper">
        <a href="/" className="brand-logo">React Typescript</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Sass</a></li>
            <li><a href="/">Components</a></li>
            <li><a href="/">JavaScript</a></li>
        </ul>
        </div>
    </nav>
)