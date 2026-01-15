import React from 'react'
import{useDispatch, useSelector} from 'react-redux'
export default function Hello() {
     let couterState=useSelector((state)=>
    {
            return state['counter']
    })
    console.log(couterState)
    let count=couterState
  return (
    <div>
      <h1>Hello Redux ={count.count}</h1>
    </div>
  )
}
