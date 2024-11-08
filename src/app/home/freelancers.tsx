import React from 'react'
import Image from 'next/image'
import img from '@/assets/actual_img.svg'
import rank from '@/assets/rank.svg'


const Page = () => {
    const card = [
        { id: 1, name: "Марина Королёва", job: "Разработчик PHP", rank: "Выполено проектов: 65", button: <button className='w-full py-2 border border-green-500 rounded-[50px] text-green-500 hover:bg-green-500 hover:text-white'>Написать</button> },
        { id: 2, name: "Марина Королёва", job: "Разработчик PHP", rank: "Выполено проектов: 65", button: <button className='w-full py-2 border border-green-500 rounded-[50px] text-green-500 hover:bg-green-500 hover:text-white'>Написать</button> },
        { id: 3, name: "Марина Королёва", job: "Разработчик PHP", rank: "Выполено проектов: 65", button: <button className='w-full py-2 border border-green-500 rounded-[50px] text-green-500 hover:bg-green-500 hover:text-white'>Написать</button> },
        { id: 4, name: "Марина Королёва", job: "Разработчик PHP", rank: "Выполено проектов: 65", button: <button className='w-full py-2 border border-green-500 rounded-[50px] text-green-500 hover:bg-green-500 hover:text-white'>Написать</button> },
        { id: 5, name: "Марина Королёва", job: "Разработчик PHP", rank: "Выполено проектов: 65", button: <button className='w-full py-2 border border-green-500 rounded-[50px] text-green-500 hover:bg-green-500 hover:text-white'>Написать</button> },
    ]
    return (
        <div className='px-10 xl:px-32'>
            <h3 className='font-semibold text-[22px] mt-10'>Топ фрилансеров</h3>
            <div className='mt-10 sm:grid sm:grid-cols-2 gap-3 lg:grid-cols-3'>
                {
                    card.map((item, index) => (
                        <div key={index} className='border rounded-2xl p-2 flex flex-col gap-5 mt-3 sm:mt-0 shadow-lg hover:shadow-slate-500'>
                            <div className='flex gap-3 md:items-center'>
                                <Image src={img} width={150} height={150} alt='Human' priority />
                                <div className='flex flex-col'>
                                    <p >{item.name}</p>
                                    <p className='text-[rgb(251,164,87)]'>{item.job}</p>
                                    <p>{item.rank}</p>
                                    <Image src={rank} width={100} height={100} alt='Rank' priority />
                                </div>
                            </div>
                            {item.button}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Page
