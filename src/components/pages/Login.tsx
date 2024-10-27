"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import { roleOptions } from "@/constants/constants";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useRef } from "react";
import { useSigninMutation, useSignupMutation } from "@/redux/api/authApi";
import Image from "next/image";
import { storeUserInfo } from "../../../services/auth.service";

interface ServiceImage {
  id: number;
  url: string;
}
const Signup = () => {
  const {push} = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signin] = useSigninMutation();
  const onSubmit = async (values: any) => {
   
    try {
      const res:any = await signin({ ...values }).unwrap();
      console.log(res,'29')
      // const res = await signIn("home-crafters", {
      //   ...data,   
      //   callbackUrl
      // });
     
      // console.log(res)
      if (res?.data?.accessToken) {  
          push("/profile");
        
           toast(res?.message,
          {
            icon:  <span style={{color:"green"}}>✔</span>,
            style: {
              borderRadius: '10px',
              background: '#FFBF00',
              color: '#fff'
            }
          })
      }
      storeUserInfo({ accessToken: res?.data?.accessToken });
     
    } catch (err: any) {
      // console.log(err);
      toast(err?.data,
        {
          icon:  <span style={{color:"white"}}>❌</span>,
          style: {
            borderRadius: '10px',
            background: 'red',
            color: '#fff'
          }
        })
    }
  };



  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />

      <div>
        <div className="flex justify-center items-center min-h-screen bg-[#13007c] relative">
          <div className="md:w-[80%] sm:w-[80%] md:flex justify-between items-center mt-11">
            <div className="md:w-[50%] p-5 text-center text-white mt-20">
              <h2 className="lg:text-3xl leading-relaxed hidden lg:block">
                Unlocking global -
              </h2>
              <h2 className="lg:text-3xl mt-6 hidden lg:block">
                financial freedom with TabEdge
              </h2>
              <div className="bg-[#2c1e72] px-4 py-6 flex lg:mt-8 xs:mb-6 lg:mb-0 rounded-xl items-center justify-center gap-4">
                <img
                  src="https://portal.tabedge.com/assets/earth-BeyVdefS.png"
                  alt="Earth"
                  className="w-[30%]"
                />
                <p className="w-[50%] lg:text-xl">
                  Join millions who already use TabEdge to safely pay online and
                  send money anywhere in the world.
                </p>
              </div>
              <p className="mt-5 hidden lg:block">
                Pay seamlessly on 15,000 sites
              </p>
              <div className="mt-8 hidden lg:block">
                <div className="flex flex-wrap items-center gap-10 justify-center mt-8"></div>
              </div>
            </div>

            <div className="lg:w-[50%]">
              <div className="flex justify-center self-center z-10 mt-5">
                <div className="flex justify-center self-center z-10 mt-5">
                  <div className="p-12 bg-white shadow-lg mx-auto rounded-3xl w-full max-w-lg">
                    <div className="mb-7">
                      <h3 className="font-semibold text-3xl text-gray-800">
                      Welcome To TabStartup
                      </h3>
                   
                    </div>
                    <Form
                      submitHandler={onSubmit}
                      
                    >
                
                      <FormInput
                        name="email"
                        placeholder="Email"
                        type="email"
                        className="w-full text-sm px-4 py-3 bg-gray-100 focus:bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 mb-4"
                      />
                     
                      <div className="relative mb-5">
                      <FormInput
                      name="password"
                      placeholder="Password"
                      type={passwordVisible ? "text" : "password"}
                      className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                    />
                    <div className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5">
                      {passwordVisible ? (
                        <FaEyeSlash
                          onClick={() => setPasswordVisible(!passwordVisible)}
                        />
                      ) : (
                        <FaEye
                          onClick={() => setPasswordVisible(!passwordVisible)}
                        />
                      )}
                        </div>
                      </div>

                      <div className="mt-5">
                        <button
                          type="submit"
                          className="w-full flex justify-center bg-blue-800 hover:bg-blue-700 text-white p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                        >
                          Login
                        </button>
                      </div>
                    </Form>
                    <div className="flex items-center justify-between mt-5">
                      <div className="text-sm">
                       Do Not have an account?
                        <a
                          href="/signup"
                          className="text-blue-700 hover:text-blue-600 ml-1"
                        >
                          Signup
                        </a>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
