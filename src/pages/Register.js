import { useState } from 'react'
import axios from 'axios'
import Header from '../components/header/Header'

const Register = () => {
    const [registerForm, setRegisterForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleFormChange = (e) => {
        setRegisterForm({...registerForm, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/register', registerForm)
        .then(resp => {
            console.log(resp)
            localStorage.setItem("token", resp.data.token);
        })
        .catch(err => {
            console.log(err)
            console.log('Servas numire')
        })
    }
 
    return (
        <>
            <Header />
            <div className="container">
                <h1>Registracija</h1>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label>Vardas:</label>
                        <input type="text" name="name" onChange={handleFormChange} />
                    </div>
                    <div>
                        <label>El. pašto adresas:</label>
                        <input type="text" name="email" onChange={handleFormChange} />
                    </div>
                    <div>
                        <label>Slaptažodis:</label>
                        <input type="password" name="password" onChange={handleFormChange} />
                    </div>
                    <button type="submit">Siųsti</button>
                </form> 
            </div>
        </>
    )
}

export default Register