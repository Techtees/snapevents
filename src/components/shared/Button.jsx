import React from 'react'

function Button ({children}) {
    return(
        <button type='button' style={{background:`linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)`}} className='p-[16px] w-[320px] rounded-[10px] text-[#fff] text-[20px] font-bold'> {children} </button>
    )
}

export default Button