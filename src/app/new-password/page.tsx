import Image from 'next/image';
import Link from 'next/link';
import SignUp from '@/assets/Sign-up.svg';



const Page = () => {

    return (
        <div className='w-screen h-screen lg:flex lg:items-center'>
            <div className='h-screen flex flex-col justify-center lg:w-[50%] lg:px-32'>
                <div className="px-10 mt-5">
                    <p>Давайте восстановим Вам пароль</p>
                    <h2 className="font-bold text-3xl">Придумайте новый пароль</h2>
                </div>
                <div className="px-10 mt-5">
                    <form id='submit'>
                        <p>Пароль</p>
                        <input
                            type="text"
                            name="email"
                            placeholder="Пароль"
                            className="border-b-2 outline-none w-full p-2 mb-1"
                        />
                        <p>Повтарите пароль</p>
                        <input
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            className="border-b-2 outline-none w-full p-2 mb-1"
                        />
                    </form>
                </div>
                <div className="flex flex-col items-center px-10 mt-5 gap-3">
                    <Link href='/sign-in' className="w-full text-center bg-green-600 text-slate-200 px-[30px] py-[10px] rounded-[50px]">
                        <button
                            type="submit"
                            form='submit'
                        >
                            Изменить пароль
                        </button>
                    </Link>
                </div>
            </div>
            <div className='hidden lg:block'>
                <Image src={SignUp} width={580} alt='SignUp' priority />
            </div>
        </div>
    );
};

export default Page;
