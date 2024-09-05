"use client";
import { createUser } from "@/actions/users";
import { RegisterInputProps } from "@/types/types";
import { UserRole } from "@prisma/client";
import { LoaderCircle, LoaderPinwheel } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useFormState } from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { BiLoader } from "react-icons/bi";


export default function RegisterForm({role="USER"}:{role?:UserRole}) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  async function onSubmit(data: RegisterInputProps) {
    setisLoading(true);
    data.role = role
    // console.log(data);

    try {
      const user = await createUser(data)
      if (user&& user.status===200){
        reset();
        setisLoading(false);
        alert("User created successfully")
        console.log("sucess")
        toast.success("Account created successfully")
        // navigate to dashboard or home page
        // Router.push('/')
      }
      else{
        console.log("Failed to create user");
        setisLoading(false);
      }
      console.log("User created successfully", user);
    } catch (error) {
      console.log(error)
    }
  }

  const [isLoading, setisLoading] = useState(false);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 capitalize text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="#"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  {...register("firstName", { required: true })}
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs italic">
                    First Name is required
                  </p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  {...register("lastName", { required: true })}
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  autoComplete="name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs italic">
                    Last Name is required
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  {...register("email", { required: true })}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                phone Number
              </label>
              <div className="mt-2">
                <input
                  {...register("phone", { required: true })}
                  id="phone"
                  name="phone"
                  type="tel"
                  required

                  autoComplete="phoneNumber"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
               
              </div>
              <div className="mt-2">
                <input
                  {...register("password", { required: true })}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              {isLoading ? (
                  <button
                  type="submit"
                  disabled 
                   className="flex w-full gap-3 items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <LoaderPinwheel className="w-4 h-4 flex-shrink-0 animate-spin"/>
                    <span>Wait for sometime</span>

                  </button>
              
              ) : (

                
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              )}
            </div>
          </form>

          <p className="mt-10 text-center capitalize text-sm text-gray-500">
            Already have Account?{" "}
            <Link
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
