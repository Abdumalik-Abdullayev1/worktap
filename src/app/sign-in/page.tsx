import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div>
            <div className='text-center mt-1'>
                <p>Давайте создадим Вам аккаунт</p>
                <h2 className='font-bold text-3xl'>Заполните все поля</h2>
            </div>
            <div className='px-10 mt-1 '>
                <p>Ваше имя</p>
                <input type="text" placeholder='имя' className='border-b-2 outline-none w-full p-2 mb-1' />
                <p>Ваше фамилия</p>
                <input type="text" placeholder='Фамилия' className='border-b-2 outline-none w-full p-2 mb-1' />
                <p>E-mail</p>
                <input type="text" placeholder='E-mail' className='border-b-2 outline-none w-full p-2 mb-1' />
                <p>Телефон номер</p>
                <input type="text" placeholder='Телефон' className='border-b-2 outline-none w-full p-2 mb-1' />
                <p>Пароль</p>
                <input type="text" placeholder='Пароль' className='border-b-2 outline-none w-full p-2 mb-1' />
                <p>Повтарите пароль</p>
                <input type="text" placeholder='Пароль' className='border-b-2 outline-none w-full p-2 mb-1' />
            </div>
            <div className='flex justify-center gap-10 mt-2'>
                <div className='flex gap-2'>
                    <input type="radio" id='исполнитель' name='sign-in' />
                    <label htmlFor="исполнитель">Я исполнитель</label>
                </div>
                <div className='flex gap-2'>
                    <input type="radio" id='заказчик' name='sign-in' value="Я заказчик" />
                    <label htmlFor="заказчик">Я заказчик</label>
                </div>
            </div>
            <div className='flex flex-col items-center px-10 mt-2'>
                <button className='w-full bg-green-600 text-slate-200 px-[30px] py-[10px] rounded-[50px]'>Зарегестрироваться</button>
                <p>У Вас есть аккаунт? <Link href="/">Войдите</Link></p>
            </div>
        </div>
    )
}

export default Page
