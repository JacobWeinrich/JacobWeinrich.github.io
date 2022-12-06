import React from 'react';
import { useState, useEffect } from 'react';

function CompSignin() {

    const [backendData, setBackendData] = useState([{}]);

    useEffect(()=> {
        fetch("/product-save").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    return (
        <div>
            {(typeof backendData.users === 'undefined') ? (<p>Loading...</p>): (
                backendData.users.map((user, i) => (
                    <p key={i}>{user}</p>
                ))
            )}
        </div>
    );
}

export default CompSignin;
