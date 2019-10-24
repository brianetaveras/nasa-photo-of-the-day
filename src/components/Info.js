import React from 'react'


const Info = (props)=>{

    return (
        <div className="copyright-container">
            <h1>{props.info.copyright}</h1>
            <h2>{props.info.title}</h2>
            <p>{props.info.explanation}</p>
        </div>
    )
}

export default Info