import {Link} from 'react-router-dom'
function Home() {
    let loggedIn = localStorage.getItem('token')?true:false
    const id='62707dbd89a010cab7bfb4fd'
  return (
    <div>Home
        {loggedIn?(<p>
            <Link to={'/play/'+id}>Play the game</Link>
        </p>):(
            <p>Log in to play</p>
        )
        }
    </div>
  )
}

export default Home