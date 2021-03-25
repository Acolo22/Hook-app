import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './Layout.css'

export const Layout = () => {

    const{counter,increment} = useCounter();

    const {data} =  useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
   
    const{quote} = !!data && data[0];

    console.log(quote);

    const [boxSize, setBoxSize] = useState();

    const pTag = useRef();

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());

    }, [quote])


    

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

                <blockquote className="blockquot text-end">
                    <p 
                        ref={pTag}
                        className="mb-o"
                        >
                            {quote}
                        </p>
                </blockquote>

                <pre>
                    {JSON.stringify(boxSize,null,3)}
                </pre>
                           

            <button 
                className="btn btn-primary"
                onClick={increment}
            >
                Siguiente quote 
            </button>
        </div>
    )
}
