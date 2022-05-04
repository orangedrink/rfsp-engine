import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
import axios from 'axios'
function Register() {
    const onChange = (e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value

        }))
    }
    const onSubmit = async (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target);
        const response = await axios.post('http://localhost:5000/api/users/', {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        })
        console.log(response)
        localStorage.setItem('token', response.data.token)
        window.location.href = '/'
    }

    const[formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        pasword2: ''
    })

    const {name, email, password, password2} = formData
    return (
        <div>
            <form onSubmit={onSubmit}>
                <h2>Register</h2>
                <p>Please create your account.</p>
                <section className='form'>
                    <div className="form-group">
                    <input type="text" className="form-control" id="name" name="name" value={name} placeholder='Your Name' onChange={onChange}/>
                    <input type="text" className="form-control" id="email" name="email" value={email} placeholder='Your Email' onChange={onChange}/>
                    <input type="text" className="form-control" id="password" name="password" value={password} placeholder='Your Password' onChange={onChange}/>
                    <input type="text" className="form-control" id="password2" name="password2" value={password2} placeholder='Confirm Password' onChange={onChange}/>

                    </div>
                    <button className="btn btn-primary">Register</button>
                        <div className="form-group">
                    </div>
                </section>
            </form>
        </div>
  )
}

export default Register