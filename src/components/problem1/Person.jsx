import React from 'react'

const Person = (props) => {
  return (
    <div>
        <p>person's name is {props.name} and age {props.age}</p>
    </div>
  )
}
export default Person;