import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default  () => {
    const [message, setMessage] = useState("Loading...");
    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res => {
                console.log("respones:", res)
                setMessage(res.data.message))
    }, []);
    return (
        <div>
            <h2>Backend connection check: {message}</h2>
        </div>
    )
}