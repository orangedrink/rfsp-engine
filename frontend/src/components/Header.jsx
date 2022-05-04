import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'

function Header(props) {
    const navigate = useNavigate();
    const onClick=(e)=>{
        localStorage.setItem('token', '')
        window.location.href = '/'
    }
  return (
    <header className="App-header">
        <Link to='/'>Home</Link>
        {!props.loggedIn?(
            <>
                <Link to='/login'><FaSignInAlt/>Login</Link>
                <Link to='/register'><FaUser/>Register</Link>
            </>
        ):(
            <>
                <a onClick={onClick} style={{cursor:'pointer'}}><FaSignOutAlt/>Logout</a>
            </>
        )}
    </header>
  )
}

export default Header