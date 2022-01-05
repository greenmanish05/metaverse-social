import { useState } from "react";
import { useMoralis } from "react-moralis"

function SendMessage({ endOfMessagesRef }) {

    const{ user, Moralis} = useMoralis();
    const[message, setMessage]= useState("");


    const sendMessage = (e) => { 
        e.preventDefault();

        if (!message) return;

        const Messages = Moralis.Object.extend('Messages');
        const messages = new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress')
        }).then(
            (message) => {
                //Saved Successfully.

        },
        (error) => {
            //The save failed


            console.log(error.message);
        }
        );

        endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });

        setMessage("");

    };
    return (
        <form className="flex fixed bottom-10 bg-white border-4 border-white-400 rounded-lg  w-11/12 px-6 py-4 max-w-2xl shadow-md">
            <input
            className="flex-grow outline-none bg-transparent text-black  placeholder-gray-500 pr-5" 
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            
            placeholder={`Enter you Message ${user.getUsername()}...`} />
            <button 
            type="submit"
            onClick={sendMessage} 
            className="font-bold text-black ">
            Send</button>
        </form>
    )
}

export default SendMessage
