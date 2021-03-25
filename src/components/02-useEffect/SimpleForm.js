import React, { useEffect, useState } from 'react'
import './effect.css'

export const SimpleForm = () => {


    const [formState, setFormstate] = useState({
        name:'',
        email:''
    })

    const {name,email} = formState;


    useEffect(() =>{
        // console.log("Hey!");                                                                    
    },[])

    useEffect(() =>{
        // console.log("formState Cambio!");                               
    },[name])

    useEffect(() =>{
        // console.log("email Cambio!");
    },[email])



    const handleInputChange = ({target}) =>{
        setFormstate({
            ...formState,
            [target.name]:target.value

        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group"> 
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value ={name}
                    onChange={handleInputChange}
                />
            </div>
            <br />

            <div className="form-group"> 
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value ={email}
                    onChange={handleInputChange}
                />
            </div>







        </>
    )
}
