import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effect.css'
import {Small} from './Small';

const Memorize = () => {

    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize <Small value={counter}/></h1>
            <hr/>

        <button
            className="btn btn-danger"
            onClick={increment}
        >
            +1
        </button>

        <button
            className="btn btn-outline-primary ml-3"
            onClick={() => {
                setShow(!show);
            }}
        >
            Show/Hide { JSON.stringify(show)}
        </button>


        </div>
    )
}

export default Memorize
