import "./globals.css";
import React from 'react';
import { useWriteContract } from 'wagmi'
import { abi, contractAddress } from "./constant";


export function Input() {

    const [newGreeting, setNewGreeting] = React.useState("");

    const { writeContract } = useWriteContract()



    return (
        <div>
            <input
                type="text"
                value={newGreeting}
                onChange={(e) => setNewGreeting(e.target.value)}
            />
            <br />

            <button onClick={() =>
                writeContract({
                    abi,
                    address: contractAddress,
                    functionName: 'setGreeting',
                    args: [
                        newGreeting
                    ],
                })
            } className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded my-2 ">
                Submit</button>
        </div>
    )
}