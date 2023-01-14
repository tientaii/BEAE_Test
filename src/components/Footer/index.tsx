import Tab from '../Header/Tab';
import React from 'react';

function Index() {
  return (
    <div>
      <div>
        <div className="font-bold text-[30px] md:text-[45px] text-center mt-[60px] md:mt-[100px] leading-[45px] md:leading-[68px]">
          Packer pen Gallery
        </div>
      </div>

      {/* PC */}
      <div className=" hidden md:block">
        <div className="grid md:grid-cols-4 mt-[40px] items-center">
          <div>
            <img src="../../../src/assets/imgFooter/1.svg" alt="" className="mb-[13px]" />
            <img src="../../../src/assets/imgFooter/2.svg" alt="" />
          </div>

          <div className="col-span-2 flex flex-col justify-center items-center ">
            <img src="../../../src/assets/imgFooter/3.svg" alt="" className="mb-[13px]" />
            <img src="../../../src/assets/imgFooter/4.svg" alt="" />
          </div>

          <div className="pl-[8px]">
            <img src="../../../src/assets/imgFooter/5.svg" alt="" className="mb-[13px]" />
            <img src="../../../src/assets/imgFooter/6.svg" alt="" className="mb-[13px]" />
            <img src="../../../src/assets/imgFooter/7.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden text-center">
        <div className=" mt-[34px] h-[290.05px] mb-[10px]  justify-between w-[390px] inline-flex">
          <div>
            <img src="../../../src/assets/imgFooter/imgMobile/1MB.svg" alt="" className="mb-[9px]" />
            <img src="../../../src/assets/imgFooter/imgMobile/2MB.svg" alt="" />
          </div>
          <div>
            <img src="../../../src/assets/imgFooter/imgMobile/3MB.svg" alt="" />
          </div>
        </div>

        <div className="inline-block">
          <img src="../../../src/assets/imgFooter/imgMobile/4MB.svg" alt="" className=" mb-[9px]" />
          <img src="../../../src/assets/imgFooter/imgMobile/5MB.svg" alt="" />
        </div>

        <div className=" justify-between w-[390px] inline-flex ">
          <img src="../../../src/assets/imgFooter/imgMobile/6MB.svg" alt="" />
          <img src="../../../src/assets/imgFooter/imgMobile/7MB.svg" alt="" />
        </div>
      </div>

      <div className="mb-[32px]">
        <Tab />
      </div>
    </div>
  );
}

export default Index;
