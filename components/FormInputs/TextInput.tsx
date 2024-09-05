import React from 'react'
type TextInputProps ={
    id: string,
    name: string,
    label: string,
    type?: 'text' | 'email' | 'password' | 'number',
    placeholder: string,
    register: any,
    errors: any,
    className?: string,

  
}

const TextInput = (
    { id, name, label, type, placeholder, register, errors, className }: TextInputProps  )  => {

  return (
    <div>
    <label
      htmlFor={`${name}`}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
     {label}
    </label>
    <div className="mt-2">
      <input
        {...register(`${register}`, { required: true })}
        id={`${name}`}
        name={`${name}`}
        type= {type}
          autoComplete= {`${name}`}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      {
        errors[`${name}`] && <p className="text-red-500 text-xs italic">This field is required</p>
      }
    </div>
  </div>
  )
}

export default TextInput