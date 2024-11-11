import Image from 'next/image'
import React from 'react'
import Nikita from '@/assets/Nikita.svg'
import Rank from '@/assets/rank.svg'

const Page = () => {
    const card = [
        { id: 1, img: <Image src={Nikita} width={100} alt='card' priority />, title: "Никита Евреев", rank: <Image src={Rank} width={100} alt='card' priority />, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla." },
        { id: 2, img: <Image src={Nikita} width={100} alt='card' priority />, title: "Никита Евреев", rank: <Image src={Rank} width={100} alt='card' priority />, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla." },
        { id: 3, img: <Image src={Nikita} width={100} alt='card' priority />, title: "Никита Евреев", rank: <Image src={Rank} width={100} alt='card' priority />, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla." },
        { id: 4, img: <Image src={Nikita} width={100} alt='card' priority />, title: "Никита Евреев", rank: <Image src={Rank} width={100} alt='card' priority />, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla." },
        { id: 5, img: <Image src={Nikita} width={100} alt='card' priority />, title: "Никита Евреев", rank: <Image src={Rank} width={100} alt='card' priority />, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla." },
        { id: 6, img: <Image src={Nikita} width={100} alt='card' priority />, title: "Никита Евреев", rank: <Image src={Rank} width={100} alt='card' priority />, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla." },
    ]
    return (
        <div>
            <div className='px-10 my-10 lg:px-32'>
                <h3 className="font-semibold text-[20px]">Отзывы</h3>
                <div className='flex gap-5 text-sm mt-3'>
                    <span className='text-green-500'>Положительные (65)</span>
                    <span>Отрицательные(10)</span>
                </div>
                <div className='mt-5 sm:grid grid-cols-2 gap-3 lg:grid-cols-3'>
                    {
                        card.map((item, index) => (
                            <div key={index} className='border rounded-xl hover:shadow-2xl p-5 mt-5 sm:mt-0'>
                                <div className='flex gap-5'>
                                    <span>{item.img}</span>
                                    <div className='mt-3 flex flex-col gap-5'>
                                        <p>{item.title}</p>
                                        <span>{item.rank}</span>
                                    </div>
                                </div>
                                <p className='text-[12px]'>{item.desc}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full flex justify-center mt-5">
                    <button className="py-2 px-8 border rounded-[50px] mb-36 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">Загрузить еще</button>
                </div>
            </div>
        </div>
    )
}

export default Page
