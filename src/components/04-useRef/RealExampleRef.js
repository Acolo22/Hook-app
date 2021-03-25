import React, { useState } from 'react'
import'../02-useEffect/effect.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

const RealExampleRef = () => {

    const [show, setshow] = useState(false)


    return (
        <div>
            <h1>Real example Ref</h1>
            <hr/>

            {show && <MultipleCustomHooks/>}

            <button
                className="btn btn-primary mt-3"
                onClick={() =>
                    setshow(!show)
                }
            >
                Show/Hide
            </button>

        </div>
    )
}

export default RealExampleRef
