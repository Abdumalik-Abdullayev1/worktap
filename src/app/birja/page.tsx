import React from 'react'
import { FaChevronDown } from "react-icons/fa";
import Image from 'next/image';
import Footer from '@/components/footer'
import Apa from '@/assets/actual_img.svg'
import Rank from '@/assets/rank.svg'

const page = () => {
  const button = [
    { index: 1, btn: <button className='py-2 px-3 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Тексты и переводы </button> },
    { index: 2, btn: <button className='py-2 px-3 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Разработка</button> },
    { index: 3, btn: <button className='py-2 px-3 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Дизайн</button> },
    { index: 4, btn: <button className='py-2 px-3 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Аудио, видео монтаж </button> },
    { index: 5, btn: <button className='py-2 px-3 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>SEO и оптимизация</button> },
    { index: 6, btn: <button className='py-2 px-3 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Бизнес и жизнь</button> },
    { index: 6, btn: <button className='py-2 px-3 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Соцсети и реклама</button> },
    { index: 6, btn: <button className='py-2 px-3 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Все категории</button> },
  ]

  const card = [
    { id: 1, title: "Нужно сделать Дизайн сайта по тематике авто", price: "Бюджет: 50 000 тенге", hour: "4 часа 28 минут назад", name: "Екатерина Иванова", projects: "Размещено проектов на бирже: 25", reviews: "15 отзывов", apps: "Предложений: 50", img: <Image src={Apa} width={180} alt='apa' priority />, rank: <Image src={Rank} width={100} alt='rank' priority /> },
    { id: 2, title: "Нужно сделать Дизайн сайта по тематике авто", price: "Бюджет: 50 000 тенге", hour: "4 часа 28 минут назад", name: "Екатерина Иванова", projects: "Размещено проектов на бирже: 25", reviews: "15 отзывов", apps: "Предложений: 50", img: <Image src={Apa} width={180} alt='apa' priority />, rank: <Image src={Rank} width={100} alt='rank' priority /> },
    { id: 3, title: "Нужно сделать Дизайн сайта по тематике авто", price: "Бюджет: 50 000 тенге", hour: "4 часа 28 минут назад", name: "Екатерина Иванова", projects: "Размещено проектов на бирже: 25", reviews: "15 отзывов", apps: "Предложений: 50", img: <Image src={Apa} width={180} alt='apa' priority />, rank: <Image src={Rank} width={100} alt='rank' priority /> },
    { id: 4, title: "Нужно сделать Дизайн сайта по тематике авто", price: "Бюджет: 50 000 тенге", hour: "4 часа 28 минут назад", name: "Екатерина Иванова", projects: "Размещено проектов на бирже: 25", reviews: "15 отзывов", apps: "Предложений: 50", img: <Image src={Apa} width={180} alt='apa' priority />, rank: <Image src={Rank} width={100} alt='rank' priority /> },
    { id: 5, title: "Нужно сделать Дизайн сайта по тематике авто", price: "Бюджет: 50 000 тенге", hour: "4 часа 28 минут назад", name: "Екатерина Иванова", projects: "Размещено проектов на бирже: 25", reviews: "15 отзывов", apps: "Предложений: 50", img: <Image src={Apa} width={180} alt='apa' priority />, rank: <Image src={Rank} width={100} alt='rank' priority /> },
    { id: 6, title: "Нужно сделать Дизайн сайта по тематике авто", price: "Бюджет: 50 000 тенге", hour: "4 часа 28 минут назад", name: "Екатерина Иванова", projects: "Размещено проектов на бирже: 25", reviews: "15 отзывов", apps: "Предложений: 50", img: <Image src={Apa} width={180} alt='apa' priority />, rank: <Image src={Rank} width={100} alt='rank' priority /> },
    { id: 7, title: "Нужно сделать Дизайн сайта по тематике авто", price: "Бюджет: 50 000 тенге", hour: "4 часа 28 минут назад", name: "Екатерина Иванова", projects: "Размещено проектов на бирже: 25", reviews: "15 отзывов", apps: "Предложений: 50", img: <Image src={Apa} width={180} alt='apa' priority />, rank: <Image src={Rank} width={100} alt='rank' priority /> },
    { id: 8, title: "Нужно сделать Дизайн сайта по тематике авто", price: "Бюджет: 50 000 тенге", hour: "4 часа 28 минут назад", name: "Екатерина Иванова", projects: "Размещено проектов на бирже: 25", reviews: "15 отзывов", apps: "Предложений: 50", img: <Image src={Apa} width={180} alt='apa' priority />, rank: <Image src={Rank} width={100} alt='rank' priority /> },
    { id: 9, title: "Нужно сделать Дизайн сайта по тематике авто", price: "Бюджет: 50 000 тенге", hour: "4 часа 28 минут назад", name: "Екатерина Иванова", projects: "Размещено проектов на бирже: 25", reviews: "15 отзывов", apps: "Предложений: 50", img: <Image src={Apa} width={180} alt='apa' priority />, rank: <Image src={Rank} width={100} alt='rank' priority /> },
    { id: 10, title: "Нужно сделать Дизайн сайта по тематике авто", price: "Бюджет: 50 000 тенге", hour: "4 часа 28 минут назад", name: "Екатерина Иванова", projects: "Размещено проектов на бирже: 25", reviews: "15 отзывов", apps: "Предложений: 50", img: <Image src={Apa} width={180} alt='apa' priority />, rank: <Image src={Rank} width={100} alt='rank' priority /> },
  ]
  return (
    <div className='mt-20'>
      <div className='w-full flex justify-center'>
        <h2 className='max-w-[850px] mt-20 text-2xl text-center lg:text-4xl'>Ищите и находите подходящую работу среди <span className='text-green-600'>10,000+</span> проектов и покажите на что Вы способны!</h2>
      </div>
      <div className='w-full flex justify-center'>
        <div className='py-2 mt-5 px-3 bg-[rgb(242,240,254)] w-[600px] flex justify-between rounded-[50px]'>
          <input type="text" placeholder='Какую работу ищете?' className='bg-transparent outline-none sm:px-4 lg:px-5' />
          <button className='bg-[rgb(251,164,87)] text-white px-[20px] py-[5px] rounded-[50px] md:px-[30px] md:py-[10px]'>Найти</button>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <div className="flex flex-wrap justify-center gap-2 mt-7 md:w-[60%] lg:w-[50%]">
          {
            button.map((item, index) => (
              <div key={index}>
                {item.btn}
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <p className='text-[20px] mt-5 text-center font-semibold lg:text-3xl'>Ниже все заказы по <span className='text-green-500'>дизайну</span></p>
        <FaChevronDown className='w-full text-center mt-5 text-green-500 text-xl' />
      </div>
      <div className='sm:grid sm:grid-cols-2 xl:grid-flow-col lg:px-32 mt-10'>
        <div>
          <p className='font-semibold'>65 проектов по дизайну</p>
        </div>
        <div className='flex items-center'>
          <button className='py-1 px-3 text-[12px] lg:text-[16px]'>Минимальная цена</button>
          <span>—</span>
          <button className='py-1 px-3 text-[12px] lg:text-[16px]'>Максимальная цена</button>
        </div>
        <select className='py-2 px-4 border rounded-[50px] outline-none text-[12px] max-w-[200px]  font-semibold'>
          <option value="1" >По возрастанию цены</option>
        </select>
      </div>
      <div className='lg:px-32'>
        {
          card.map((item, index) => (
            <div key={index} className='px-3 mt-5 rounded-lg hover:shadow-2xl lg:p-5'>
              <div className='md:flex justify-between'>
                <p className='md:text-xl'>{item.title}</p>
                <div className='md:flex flex-col items-end'>
                  <p className='text-green-500 md:text-xl'>{item.price}</p>
                  <p className='text-[rgb(220,223,232)]'>{item.hour}</p>
                </div>
              </div>
              <div className='sm:flex items-center gap-2 mt-3 lg:mt-0'>
                <span>{item.img}</span>
                <div>
                  <p className='lg:text-xl'>{item.name}</p>
                  <p className='lg:text-xl'>{item.projects}</p>
                  <div className='flex items-center gap-2'>
                    <p>{item.rank}</p>
                    <p>{item.reviews}</p>
                  </div>
                </div>
              </div>
              <div className='mt-3 w-full flex justify-end lg:mt-0'>
                <span className='text-[rgb(220,223,232)]'>{item.apps}</span>
              </div>
            </div>
          ))
        }
        <div className="w-full flex justify-center mt-20">
          <button className="py-2 px-8 border rounded-[50px] mb-36 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">Загрузить еще</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default page
