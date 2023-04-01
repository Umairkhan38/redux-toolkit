import React from 'react';
import { useAddAccountsMutation, useGetAccountsQuery, useDeleteAccountsMutation, useUpdateAccountsMutation } from './API/adminSlice';


const Admin = () => {

    const {data, error, isLoading}=useGetAccountsQuery();
    const [addAccount] = useAddAccountsMutation()
    const [deleteAccounts] = useDeleteAccountsMutation();
    const [updateAccounts]= useUpdateAccountsMutation()

  return (
    <>
    <h2 className='text-center'>Admin </h2>
    <hr />
    <div className='text-center my-5'>
    <h4 className='fw-semibold fst-italic'>Account Details</h4>
        {isLoading&&<p>Loading...</p>}
    {!isLoading&& 
        data?.map((accounts,idx)=>{
           return  <h5 key={idx}>{accounts.id} : {accounts.amount}
           <button className="btn btn-sm btn-danger mx-2" onClick={()=>deleteAccounts(accounts.id)}>- Delete Account</button>
           <button className="btn btn-sm btn-warning mx-2" onClick={()=>updateAccounts({id:accounts.id,amount:855})}>Update Account</button>
            </h5>
           
        })    
    }
    <button className="btn btn-success" onClick={()=>addAccount(768,data.length+1)}>+ Add Account</button>
    </div>
    </>
  )
}

export default Admin
