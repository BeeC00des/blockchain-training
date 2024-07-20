import "./globals.css";
import React from 'react';
import { useAccount, useWriteContract } from 'wagmi'

export function Input() {
    const { address } = useAccount()
    const [newGreeting, setNewGreeting] = React.useState("");
    return (
        <div>
            <input
                type="text"
                value={newGreeting}
                onChange={(e) => setNewGreeting(e.target.value)}
                 />
            <br/>

          <button className="bg-gray-500 hover:bg-black text-white font-bold py-2 px-4 rounded my-2 ">
            Submit</button>
        </div>
    )
}