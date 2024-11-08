import React from 'react'
import Image from 'next/image'
import Hero_img from '../assets/hero_img.svg'
import Actual from '@/components/home/actual'
import Freelancers from '@/components/home/freelancers'
import Tasks from '@/components/home/tasks'
import Workspace from '@/components/home/workspace'
import Footer from '@/components/footer'


const Page = () => {
    return (
      <>
        <div className='lg:flex items-center px-10 xl:px-32 mt-28 justify-between'>
            <div className='flex flex-col gap-3 w-full lg:w-[50%]'>
                <h1 className='font-semibold text-[28px] sm:text-[40px] lg:text-[46px]'>Покупайте фриланс-услуги в <span className='text-green-600'>два клика</span></h1>
                <p className='text-sm sm:text-lg'>Ворк — единица работы продавца, которую можно купить как товар в магазине </p>
                <div className='py-2 px-3 bg-[rgb(242,240,254)] w-full flex justify-between rounded-[50px] sm:w-[60%] lg:w-[80%]'>
                    <input type="text" placeholder='Что нужно сделать?' className='bg-transparent outline-none sm:px-4 lg:px-5' />
                    <button className='bg-[rgb(251,164,87)] text-white px-[20px] py-[5px] rounded-[50px] md:px-[30px] md:py-[10px]'>Найти</button>
                </div>
                <h3 className='font-semibold lg:text-[22px]'>Выберите рубрику, чтобы начать</h3>
                <div className='sm:flex gap-3 flex-wrap w-[80%] md:w-[70%] lg:w-full'>
                    <button className='py-2 px-4 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Тексты и переводы</button>
                    <button className='py-2 px-4 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Разработка</button>
                    <button className='py-2 px-4 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Дизайн</button>
                    <button className='py-2 px-4 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Аудио, видео монтаж</button>
                    <button className='py-2 px-4 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>SEO и оптимизация</button>
                    <button className='py-2 px-4 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Бизнес и жизнь</button>
                    <button className='py-2 px-4 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Соцсети и реклама</button>
                    <button className='py-2 px-4 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Все категории</button>
                </div>
            </div>
            <div className='xl:w-[650px] flex justify-center'>
                <Image src={Hero_img} width={500} height={500} alt='hero img' priority />
            </div>
        </div>
        <Actual/>
        <Freelancers/>
        <Tasks/>
        <Workspace/>
        <Footer/>
      </>
    )
}

export default Page
