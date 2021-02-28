import React from 'react';
import {NavLink, withRouter} from 'react-router-dom'
import Home from '../pages/Home';
const Header = ({history,isLogged}) =>{
    const handleClick=() =>{
        history.push('/')
        isLogged(false)
    }
    return(
        <nav>
            <div className='div-header'>
                <div className='div-svg' onClick={() => history.push('/cats')}>
                    
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <NavLink exact to='/' activeClassName='active'><Home className='div-svg'/></NavLink>
                    
                    <button className='button-header' onClick={handleClick}>Log out</button>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Header);