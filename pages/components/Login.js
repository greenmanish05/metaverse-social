import Image from "next/image";
import { useMoralis } from 'react-moralis';

function Login() {

    const { authenticate } = useMoralis();
    return (
        <div className="bg-black relative">
        <h1>Login Screen</h1>
        <div className="flex felx-col absolute z-50 h-4/6 w-full items-center justify-center space-x-8">

            <Image className="object-cover rounded-full" src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg" height={200} width={200}/>

            <button
            onClick={authenticate} className="bg-red-600 rounded-xl p-4 font-semibold accent-lime-400 animate-pulse">Login to Social 3.0</button>

        </div>
        

        <div className="w-full h-screen">

        <Image src="https://www.wpp.com/-/media/project/wpp/images/wpp-iq/2021/gaming-and-the-metaverse.jpg?width=1600&height=900" layout="fill" objectFit="cover" />




        </div>
            
        </div>
    )
}

export default Login
