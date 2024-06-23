import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    function handleInput(event) {
        if (event.target.name === 'email') {
            setEmail(event.target.value);
        } else if (event.target.name === 'password') {
            setPassword(event.target.value);
        }
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@gmail\.com$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        return password.length > 6 && /\d/.test(password);
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if (!validateEmail(email)) {
            toast.error('Email mora sadržati @gmail.com i biti validna email adresa.');
            return;
        }

        if (!validatePassword(password)) {
            toast.error('Password mora biti duži od 6 karaktera i sadržati bar jedan broj.');
            return;
        }

        if (!email.includes('student') && !email.includes('sluzba')) {
            toast.error('Email mora sadržati reč "student" ili "sluzba".');
            return;
        }

        // Čuvanje podataka u localStorage
        localStorage.setItem('user', JSON.stringify({ email, password }));
        // Resetovanje stanja emaila i passworda
        setEmail('');
        setPassword('');

        // Provera email adrese i redirekcija na odgovarajuću stranicu
        if (email.includes('student')) {
            toast.success('Dobri su podaci! Uspješno ste prijavljeni!');
            setTimeout(() => {
                navigate('/kontakt');
            }, 3000);
        } else if (email.includes('sluzba')) {
            toast.success('Dobri su podaci! Uspješno ste prijavljeni!');
            setTimeout(() => {
                navigate('/molbe');
            }, 3000);
        }
    }

    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-2xl my-[50px]'>Login</h2>
            <form className='w-[50%] border-2 border-blue-900 mx-auto p-5 flex flex-col mb-7' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Email' 
                    className='border px-3 py-4 mb-4' 
                    name='email' 
                    value={email} 
                    onChange={handleInput} 
                />
                <input 
                    type="password" 
                    placeholder='Password' 
                    className='border px-3 py-4' 
                    name='password' 
                    value={password} 
                    onChange={handleInput} 
                />
                <button type='submit' className='px-3 py-5 bg-blue-500 text-white'>Login</button>
            </form>
        </div>
    );
}

export default Register;
