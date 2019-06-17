import React from 'react'

const News = (props)=>{
    console.log(props.data);
    return (
        <ul>
        {
            props.data.map((item)=>(
                <li key={item.id}>
                    {item.content}
                </li>
            ))
        }
        </ul>
    )
}

export default News;