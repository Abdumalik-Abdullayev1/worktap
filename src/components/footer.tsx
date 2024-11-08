import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

const Page = () => {
  return (
    <div className='px-10 text-sm mt-10 sm:grid sm:grid-cols-3 items-start md:grid-cols-4 mb-16 xl:px-32'>
      <div className='flex flex-col gap-3'>
        <h3 className='font-bold text-xl'>Топ категории</h3>
        <p>Тексты и переводы</p>
        <p>Разработка</p>
        <p>Дизайн</p>
        <p>Дизайн</p>
        <p>Соцсети и реклама</p>
        <p>Бизнес и жизнь</p>
        <p>SEO и оптимизация</p>
      </div>
      <div className='mt-5 sm:mt-0 flex flex-col gap-3'>
        <h3 className='font-bold text-xl'>О Проекте</h3>
        <p>О Нас</p>
        <p>Как Это Работает</p>
        <p>Политика Приватности</p>
        <p>Правила Пользования </p>
        <p>Пресса о нас</p>
      </div>
      <div className='mt-5 sm:mt-0 flex flex-col gap-3'>
        <h3 className='font-bold text-xl'>Поддержка</h3>
        <p>Контакты</p>
        <p>Политика Безопасности</p>
        <p>FAQ</p>
      </div>
      <div className='mt-5 md:mt-0'>
        <h3 className='font-bold text-xl'>Follow</h3>
        <div className='flex text-3xl gap-2 mt-5'>
          <FaFacebook />
          <AiFillTwitterCircle/>
          <FaInstagram/>
          <AiFillLinkedin/>
        </div>
      </div>
    </div>
  )
}

export default Page
