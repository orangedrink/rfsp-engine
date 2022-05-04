import {useState, useEffect} from 'react'
import axios from 'axios'
function Login() {
    const onChange = (e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value

        }))
    }
    const onSubmit = async (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target);
        const response = await axios.post('http://localhost:5000/api/users/login', {
            email: formData.get('email'),
            password: formData.get('password')
        })
        console.log(response)
        localStorage.setItem('token', response.data.token)
        window.location.href = '/'
    }

    const[formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password} = formData
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>Login</h2>
                <p>Please log in to your account.</p>
                <section className='form'>
                    <div className="form-group">
                        <input type="text" className="form-control" id="email" name="email" value={email} placeholder='Your Email' onChange={onChange}/>
                        <input type="text" className="form-control" id="password" name="password" value={password} placeholder='Your Password' onChange={onChange}/>

                    </div>
                    <button className="btn btn-primary">Log In</button>
                        <div className="form-group">
                    </div>
                </section>
            </form>
        </div>
  )
}

export default Login