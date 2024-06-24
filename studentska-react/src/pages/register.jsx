import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Funkcija za rukovanje unosom korisnika
    function handleInput(event) {
        if (event.target.name === 'email') {
            setEmail(event.target.value);
        } else if (event.target.name === 'password') {
            setPassword(event.target.value);
        }
    }

    // Validacija email adrese
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@gmail\.com$/;
        return emailRegex.test(email);
    }

    // Validacija lozinke
    function validatePassword(password) {
        return password.length > 6 && /\d/.test(password);
    }

    // Rukovanje slanjem forme
    function handleSubmit(e) {
        e.preventDefault();
        
        // Provera validnosti email adrese
        if (!validateEmail(email)) {
            toast.error('Email mora sadržati @gmail.com i biti validna email adresa.');
            return;
        }

        // Provera validnosti lozinke
        if (!validatePassword(password)) {
            toast.error('Password mora biti duži od 6 karaktera i sadržati makar jedan broj.');
            return;
        }

        // Provera da li email sadrži "student" ili "sluzba"
        if (!email.includes('student') && !email.includes('sluzba')) {
            toast.error('Email mora sadržati reč "student" ili "sluzba".');
            return;
        }

        // Čuvanje podataka u localStorage
        localStorage.setItem('user', JSON.stringify({ email, password }));
        // Resetovanje stanja emaila i passworda
        setEmail('');
        setPassword('');

        // Ako email sadrzi 'student' ili 'sluzba' , redirekcija na odgovarajuću stranicu
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
                {/* Polje za unos email adrese */}
                <input 
                    type="text" 
                    placeholder='Email' 
                    className='border px-3 py-4 mb-4' 
                    name='email' 
                    value={email} 
                    onChange={handleInput} 
                />
                {/* Polje za unos lozinke */}
                <input 
                    type="password" 
                    placeholder='Password' 
                    className='border px-3 py-4' 
                    name='password' 
                    value={password} 
                    onChange={handleInput} 
                />
                {/* Dugme za prijavu */}
                <button type='submit' className='px-3 py-5 bg-blue-500 text-white'>Login</button>
            </form>
        </div>
    );
}

export default Register;