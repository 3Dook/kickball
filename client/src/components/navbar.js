import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
const sidebarData = [
    {
        title: 'HOME',
        path: '/',
        cName: 'nav-text'
    },
    {
        title: 'SIGN UP',
        path: '/signup',
        cName: 'nav-text'
    },
    {
        title: 'SCORE',
        path: '/score',
/*         icon: < IoHammerOutline />, */
        cName: 'nav-text'
    },
]


export default function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <nav>
            <ul className="navMenuItems">
                    {sidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
            </ul>
        </nav>
{/*             <IconContext.Provider value={{ color: '#fff'}}>

            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul class='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                    <Link to='#' className='menu-bars'>
                        <AiOutlineClose /> 
                    </Link>
                    </li> 
                    {sidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </IconContext.Provider> */}
        {/* 
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/resume">RESUME</Link></li>
            <li><Link to="/application">APPLICATION</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
        */}

    </>
    )
}