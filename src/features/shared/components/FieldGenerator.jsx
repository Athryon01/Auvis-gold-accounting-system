import React from 'react'
import { goldsFields } from '@/features/store/utils/Feilds'
import { Input } from '@/components/ui/input'
function FieldGenerator({register,fields}) {
   
  return (
    <>
   
    {fields?.map((e)=>{
       return(
        <div className='flex flex-col gap-1'>
         <label>{e.label}</label>
         <div>
                <Input type={e.type}  placeholder={e.placeHolder} {...register(e.name,{required:e.required, valueAsNumber: e.type =="number"?true:false })}/>  
                  <p className='text-red-600'>
                    {e.name?.error?.message}
                  </p>
                </div>
        </div>
       )
    })}
 
    </>
  )
}

export default FieldGenerator