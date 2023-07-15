import React from 'react'

const List = ({items}) => {
  return (
    <div>
        <ul>
            {
                items.map((elem,index)=>{
                    return <li key={index}>{elem}</li>
                })
            }
        </ul>
    </div>
  )
}

export default List;