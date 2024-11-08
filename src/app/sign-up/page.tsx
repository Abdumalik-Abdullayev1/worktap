"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import SignUp from '@/assets/Sign-up.svg'

interface SignUpType {
    name: string;
    surname: string;
    email: string;
    phone: string;
    password: string;
    signUp: string
}

const Page = () => {
    const [formData, setFormData] = useState<SignUpType>({
        name: '',
        surname: '',
        email: '',
        phone: '',
        password: '',
        signUp: ''
    });
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

        const formSlice = {
            name: formData.name,
            surname: formData.surname,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
            signUp: formData.signUp
        };

        localStorage.setItem('UserBio', JSON.stringify(formSlice));

        console.log('Form submitted:', formSlice);
    };

    return (
        <div className='w-screen h-screen lg:flex lg:items-center'>
            <div className='h-screen flex flex-col justify-center lg:w-[50%] lg:px-32'>
                <div className="text-center mt-1">
                    <p>Давайте создадим Вам аккаунт</p>
                    <h2 className="font-bold text-3xl">Заполните все поля</h2>
                </div>
                <div className="px-10 mt-1">
                    <form onSubmit={handleSubmit} id='submit'>
                        <p>Ваше имя</p>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="имя"
                            className="border-b-2 outline-none w-full p-2 mb-1"
                        />
                        <p>Ваше фамилия</p>
                        <input
                            type="text"
                            name="surname"
                            value={formData.surname}
                            onChange={handleInputChange}
                            placeholder="Фамилия"
                            className="border-b-2 outline-none w-full p-2 mb-1"
                        />
                        <p>E-mail</p>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="E-mail"
                            className="border-b-2 outline-none w-full p-2 mb-1"
                        />
                        <p>Телефон номер</p>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Телефон"
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
                        <p>Повторите пароль</p>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Повторите Пароль"
                            className="border-b-2 outline-none w-full p-2 mb-1"
                        />
                        <div className="flex justify-center gap-10 mt-2">
                            <div className="flex gap-2">
                                <input
                                    type="radio"
                                    name="signUp"
                                    value="исполнитель"
                                />
                                <label htmlFor="исполнитель">Я исполнитель</label>
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="radio"
                                    name="signUp"
                                    value="заказчик"
                                />
                                <label htmlFor="заказчик">Я заказчик</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="flex flex-col items-center px-10 mt-2">
                    <button
                        type="submit"
                        form='submit'
                        className="w-full bg-green-600 text-slate-200 px-[30px] py-[10px] rounded-[50px]"
                    >
                        Зарегестрироваться
                    </button>
                    <p>
                        У Вас есть аккаунт?{' '}
                        <Link href="/sign-in" className="text-[rgb(251,164,87)]">
                            Войдите
                        </Link>
                    </p>
                </div>
            </div>
            <div className='hidden lg:block'>
                <Image src={SignUp} width={580} alt='SignUp' priority/>
            </div>
        </div>
    );
};

export default Page;
