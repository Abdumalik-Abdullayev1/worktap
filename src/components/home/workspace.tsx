import React from 'react'
import Image from 'next/image'
import Card from '@/assets/credit-card.svg'
import Money from '@/assets/money.svg'
import Clock from '@/assets/clock.svg'


const Page = () => {
    const card = [
        { index: 1, img: <Image src={Card} width={35} alt='card' priority />, title: "Оплачивайте с р/с или карты компании" },
        { index: 2, img: <Image src={Money} width={35} alt='card' priority />, title: "Экономьте до 87% бюджета на фрилансе" },
        { index: 2, img: <Image src={Clock} width={35} alt='card' priority />, title: "Экономьте до 75% времени на решении фриланс задач" },
    ]
    return (
        <div className='h-[50vh] bg-[rgb(226,165,1)] mt-14'>
            <div className='px-10 xl:px-32'>
                <div className='flex flex-col gap-3 sm:max-w-96'>
                    <h3 className='text-white text-xl mb-5 mt-10'>Как WorkTap помогает бизнесу?</h3>
                    {
                        card.map((item, index) => (
                            <div key={index} className='w-full bg-white flex gap-2 items-center p-2 rounded-lg hover:bg-green-400 hover:text-white'>
                                {item.img}
                                <h3 className='text-[12px]'>{item.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Page
