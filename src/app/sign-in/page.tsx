"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/navigation';
import SignUp from '@/assets/Sign-up.svg';

interface SignUpType {
    email: string;
    password: string;
}

const Page = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<SignUpType>({
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        const savedData = localStorage.getItem('signUpData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const storedUserData = JSON.parse(localStorage.getItem('UserBio') || '{}');
        if (
            formData.email === storedUserData.email &&
            formData.password === storedUserData.password
        ) {
            console.log('Login successful!');
            setErrorMessage('');
            router.push('/profile'); // Redirects to profile page
        } else {
            setErrorMessage('Неверный email или пароль.');
        }
    };

    return (
        <div className='w-screen h-screen lg:flex lg:items-center'>
            <div className='h-screen flex flex-col justify-center lg:w-[50%] lg:px-32'>
                <div className="px-10 mt-5">
                    <p>Добро пожаловать!</p>
                    <h2 className="font-bold text-3xl">Войдите в свой аккаунт</h2>
                </div>
                <div className="px-10 mt-5">
                    <form onSubmit={handleSubmit} id='submit'>
                        <p>E-mail</p>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="E-mail"
                            className="border-b-2 outline-none w-full p-2 mb-1"
                        />
                        <p>Пароль</p>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Пароль"
                            className="border-b-2 outline-none w-full p-2 mb-1"
                        />
                        <div className="flex justify-between gap-10 mt-5">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="signIn"
                                    value="запомнить"
                                />
                                <label htmlFor="запомнить" className='text-sm'>Запомнить меня</label>
                            </div>
                            <div>
                                <Link href="/forget-password" className='text-[rgb(251,164,87)]'>Забыли пароль?</Link>
                            </div>
                        </div>
                    </form>
                </div>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <div className="flex flex-col items-center px-10 mt-5 gap-3">
                    <button
                        type="submit"
                        form='submit'
                        className="w-full bg-green-600 text-slate-200 px-[30px] py-[10px] rounded-[50px]"
                    >
                        Войти
                    </button>
                    <button
                        className="w-full bg-[rgb(45,55,72)] text-slate-200 px-[30px] py-[10px] rounded-[50px] text-sm flex items-center gap-1">
                        <FcGoogle className='text-xl' /><p>Или войдите с помощью Google</p>
                    </button>
                    <p>
                        У Вас все еще нет аккауна?
                        <Link href="/" className="text-[rgb(251,164,87)]">
                            Зарегистрируйтесь бесплатно!
                        </Link>
                    </p>
                </div>
            </div>
            <div className='hidden lg:block'>
                <Image src={SignUp} width={580} alt='SignUp' priority />
            </div>
        </div>
    );
};

export default Page;