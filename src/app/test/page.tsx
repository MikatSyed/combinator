"use client"
import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Page = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const router = useRouter();
    const onSubmit = async (values:any) => {
        console.log(values);
        try {
          // Mock login functionality
          if (values.email === "test@gmail.com" && values.password === "test123") {
            // Successful login
            toast("Successful login", {
              style: {
                borderRadius: "10px",
                background: "#fff",
                color: "#1e3d9c",
              },
            });
            router.push("/dashboard/project");
            setLoginError(false);
          } else {
            // Invalid credentials
            toast("Invalid credentials", {
              style: {
                borderRadius: "10px",
                background: "red",
                color: "#fff",
              },
            });
            console.log("Invalid credentials");
            setLoginError(true);
          }
        } catch (err) {
          console.log(err);
        }
      };
      const defaultValues = {
        email: "test@gmail.com",
        password: "test123",
      };
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-[#13007c] relative">
                <div className="md:w-[80%] sm:w-[80%] md:flex justify-between items-center mt-11">
                    <div className="md:w-[50%] p-5 text-center text-white mt-20">
                        <h2 className="lg:text-3xl leading-relaxed hidden lg:block">Unlocking global -</h2>
                        <h2 className="lg:text-3xl mt-6 hidden lg:block">financial freedom with TabEdge</h2>
                        <div className="bg-[#2c1e72] px-4 py-6 flex lg:mt-8 xs:mb-6 lg:mb-0 rounded-xl items-center justify-center gap-4">
                            <img src="https://portal.tabedge.com/assets/earth-BeyVdefS.png" alt="Earth" className="w-[30%]" />
                            <p className="w-[60%] lg:text-xl">Join millions who already use TabEdge to safely pay online and send money anywhere in the world.</p>
                        </div>
                        <p className="mt-5 hidden lg:block">Pay seamlessly on 15,000 sites</p>
                        <div className="mt-8 hidden lg:block">
                            <div className="flex flex-wrap items-center gap-10 justify-center mt-8"></div>
                        </div>
                    </div>
                    <div className="lg:w-[40%] bg-white rounded-2xl shadow-lg mb-24 p-5">
                    <div className="flex justify-center self-center z-10 mt-5">
          <div className="p-12 bg-white mx-auto rounded-3xl w-96">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">Login</h3>
              <p className="text-gray-400 text-sm">
                Don't have an account?
                <a
                  href="#"
                  className="text-sm text-blue-700 hover:text-blue-700"
                >
                  Sign Up
                </a>
              </p>
            </div>
            <div className="space-y-6">
              <div>
                {/* <input
                className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                type="text"
                placeholder="Email"
              /> */}
                <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                  <FormInput
                    name="email"
                    placeholder="Enter your email"
                    type="text"
                    className="w-full text-sm px-4 py-3 bg-gray-200 focus:bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
                  />
                  <div className="relative mt-5" x-data="{ show: true }">
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
                  <div>
                    <button
                      type="submit"
                      className="w-full mt-5 flex justify-center bg-[#13007c] hover:bg-blue-700 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500 border-none"
                    >
                      Login
                    </button>
                  </div>
                </Form>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm ml-auto">
                  <a href="#" className="text-blue-700 hover:text-blue-600">
                    Forgot your password?
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
    );
};

export default Page;
