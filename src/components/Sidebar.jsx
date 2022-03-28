import React from "react";
import { Armchair, Backpack, Bathtub, DesktopTower } from "phosphor-react";

export default function Sidebar() {
  const Products = [
    {
      productName: "Sofa",
      manufacturingCost: "5000",
      icon: <Armchair size={32} />,
    },
    {
      productName: "Bathtub",
      manufacturingCost: "5000",
      icon: <Bathtub size={32} />,
    },
    {
      productName: "Desktop",
      manufacturingCost: "5000",
      icon: <DesktopTower size={32} />,
    },
    {
      productName: "School Bag",
      manufacturingCost: "5000",
      icon: <Backpack size={32} />,
    },
  ];
  const Addproduct = () => {

  }

  return (
    <div>
      <div className=" w-[100%] h-[90vh] px-5 py-6 flex flex-col justify-between">
        <div>
          {Products.map((items) => (
            <>
              <div className=" flex items-center py-4 px-3 hover:bg-gray-200 cursor-pointer xs:py-9 ">
                <div className=" pr-5 ">{items.icon}</div>
                <p>{items.productName}</p>
              </div>
            </>
          ))}
        </div>

        <div onClick={Addproduct} className=' w-[full] py-2 px-4 bg-gray-600 cursor-pointer text-white font-semibold  rounded-md text-center'>
          <p >Add New Product</p>
        </div>
      </div>
    </div>
  );
}