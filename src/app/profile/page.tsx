import Image from "next/image"
import profile from '@/assets/profile-human.svg'
import Works from '@/components/profile/works'
import Reviews from '@/components/profile/reviews'
import Footer from '@/components/footer'
import Header from '@/components/profile/profile-header'


const Page = () => {
    const button = [
        { index: 1, btn: <button className='py-2 px-4 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Figma</button> },
        { index: 2, btn: <button className='py-2 px-4 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Adobe photoshop</button> },
        { index: 3, btn: <button className='py-2 px-4 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Adobe illustrator</button> },
        { index: 4, btn: <button className='py-2 px-4 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Corel draw</button> },
        { index: 5, btn: <button className='py-2 px-4 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>Adobe After Effects</button> },
        { index: 6, btn: <button className='py-2 px-4 border rounded-[50px] hover:border-[rgb(251,164,87)] hover:text-[rgb(251,164,87)]'>HTML/CSS</button> },
    ]
    return (
        <div>
            <Header/>
            <div className="px-10 sm:flex justify-between mt-20 md:mt-28 lg:px-32">
                <div className="sm:w-1/2 lg:w-[60%]">
                    <h3 className="text-[rgb(251,164,87)] text-2xl lg:text-3xl">Дизайнер</h3>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl"><span className="text-green-600 lg:text-5xl">Ернар</span> Ибрагимов</h2>
                    <p className="text-sm md:text-[16px] mt-3 lg:mt-5 lg:text-xl">Работаю дизайнером с 1999 года. Был опыт в газетах, журналах, типографиях, рекламных агентствах, издательских домах... Порядка 8 лет, занимаюсь логотипами и фирменными стилями.</p>
                    <div className="flex flex-wrap gap-2 mt-7 lg:w-[80%]">
                        {
                            button.map((item, index) => (
                                <div key={index}>
                                    {item.btn}
                                </div>
                            ))
                        }
                    </div>
                    <div className="bg-[rgb(242,240,254)] p-2 rounded-xl mt-5 lg:w-[70%]">
                        <select className="bg-transparent outline-none w-full">
                            <option value="1">Показать подробную информацию</option>
                        </select>
                    </div>
                </div>
                <div className="mt-3 sm:w-1/2 md:w-1/3">
                    <Image src={profile} width={500} alt="human" priority />
                </div>
            </div>
            <Works />
            <Reviews />
            <Footer />
        </div>
    )
}

export default Page
