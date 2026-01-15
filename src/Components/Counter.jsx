
import React from 'react'
import{useDispatch, useSelector} from 'react-redux'
import { increment } from '../redux/feature/counter.feature'
export default function Counter() {
    let dispatch=useDispatch()
    let couterState=useSelector((state)=>
    {
            return state['counter']
    })
    console.log(couterState)
    let count=couterState
    


   let update=()=>{
    dispatch(increment())
    
   }
  return (
    
    <div>
      <h1> {count.count}</h1>
      <button className='btn btn-sm btn-primary p-2' onClick={update}>click me</button>
    </div>
  )
}
