import React from "react";
import PriceList from "../pricelist.json";

export default function Body() {
    const All = () => {

    }

    const Addnewpricing = () => {

    }

    return (
        <div className=" px-3 py-3 mx-auto ">
            <div onClick={All} className=" flex px-3 justify-between items-center">
                <div className=" flex items-center">
                    <p className=" pl-5 font-semibold">All</p>
                    <p className=" pl-5 font-semibold">Subscription</p>
                    <p className=" pl-5 font-semibold">Lumpsum</p>
                    <p className=" pl-5 font-semibold">EMI</p>
                </div>
                <div>
                <div onClick={Addnewpricing} className="flex items-center">
                    <p className=" bg-gray-600 cursor-pointer text-white font-semibold rounded-md text-center py-2 px-3">Add new pricing</p>
                </div>
                </div>
            </div>

            <div className=" py-4 my-5 text-center w-[95%] mx-auto drop-shadow-xl border-2 xs:border-0 ">
                <div className=" flex xs:flex-col w-full justify-between px-3">
                    <p className=" pl-5 font-bold">Price options 1</p>
                    <p>profit margin is variable</p>
                    <p className=" pl-5 font-medium ">₹2000/year</p>
                    <p className=" pl-5 font-medium ">Subscription</p>
                    <p className=" pl-5 font-medium ">Active</p>
                </div>
            </div>

            <div className=" py-4 my-5 text-center w-[95%] mx-auto drop-shadow-xl border-2 xs:border-0">
                <div className=" flex xs:flex-col w-full justify-between px-3">
                    <p className=" pl-5 font-bold">Price options 2</p>
                    <p>10% profit margin</p>
                    <p className=" pl-5 font-medium ">10*₹2500/month</p>
                    <p className=" pl-5 font-medium ">EMI</p>
                    <p className=" pl-5 font-medium ">Inactive</p>
                </div>
            </div>

            <div className=" py-4 my-5 text-center w-[95%] mx-auto drop-shadow-xl border-2 xs:border-0">
                <div className=" flex xs:flex-col w-full justify-between px-3">
                    <p className=" pl-5 font-bold">Price options 3</p>
                    <p>12% profit margin</p>
                    <p className=" pl-5 font-medium ">₹2500/month</p>
                    <p className=" pl-5 font-medium ">EMI</p>
                    <p className=" pl-5 font-medium ">Active</p>
                </div>
            </div>

            <div className=" py-4 my-5 text-center w-[95%] mx-auto drop-shadow-xl border-2 xs:border-0">
                <div className=" flex xs:flex-col w-full justify-between px-3">
                    <p className=" pl-5 font-bold">Price options 4</p>
                    <p>5% profit margin</p>
                    <p className=" pl-5 font-medium ">₹2,00,00</p>
                    <p className=" pl-5 font-medium ">Lumpsum</p>
                    <p className=" pl-5 font-medium ">Active</p>
                </div>
            </div>
        </div>
    );
}