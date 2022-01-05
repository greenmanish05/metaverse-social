import Image from "next/image";
import { useMoralis } from 'react-moralis';

function Login() {

    const { authenticate } = useMoralis();
    return (
        <div className="bg-black relative">
        <h1>Login Screen</h1>
        <div className="flex flex-col relative z-50 h-2/5 items-center justify-center space-y-8">

            <h1 className=" text-2xl text-slate-300 ">ENTER</h1>
            <h1 className=" text-6xl text-slate-300"> THE METAVERSE</h1>
        </div>
        <div className="flex felx-col absolute z-50 h-3/6 w-full items-center justify-center space-x-8">

            <Image className="object-cover rounded-full hover:animate-spin " src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" height={200} width={200}/>

            <button
            onClick={authenticate} className="bg-red-600 rounded-xl p-4 font-semibold accent-lime-400 animate-pulse transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 cursor: pointer">Login to Social 3.0</button>

        </div>
        

        <div className="w-full h-screen">

        <Image src="https://www.wpp.com/-/media/project/wpp/images/wpp-iq/2021/gaming-and-the-metaverse.jpg?width=1600&height=900" layout="fill" objectFit="cover" />




        </div>
            
        </div>
    )
}

export default Login
