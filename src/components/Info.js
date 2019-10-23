import React, {useState} from 'react'


const Info = (props)=>{

    return (
        <div className="copyright-container">
            <h1>{props.info.copyright}</h1>
            <h2>{props.info.title}</h2>
        </div>
    )
}

export default Info