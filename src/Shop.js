import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement} from './slices/amountReducer.js'

const Shop = () => {
  const dispatch=useDispatch()
  const amount = useSelector(state=>state.amount.amount)

  return (
    <>
    <h2 className='text-center'>Deposite / Withdraw Money</h2>
    <hr />
    <div className='d-flex justify-content-center my-5'>
    <button className='btn btn-success mx-2' onClick={()=>dispatch(increment())}  >+</button>
    <p className='fw-semibold fst-italic'>Update Your Balance</p>
    <button className='btn btn-danger mx-2' disabled={amount<=0} onClick={()=>dispatch(decrement())}>-</button>
    </div>
    </>
  )
}

export default Shop
