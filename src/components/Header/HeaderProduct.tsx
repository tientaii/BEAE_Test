import React from 'react';

function HeaderProduct() {
  return (
    <div>
      <div className="flex items-center box-border h-[80px] top-[348px] rounded-[18px] border-[3px] border-solid border-white mt-[27px] md:mt-[0px] mb-[20px] px-[20px] md:px-[0px]">
        {/* PC */}
        <div className="w-[200px] h-[80px] bg-white rounded-tl-[18px] rounded-bl-[18px] text-center hidden md:block">
          <div className="font-bold text-4xl leading-[54px] text-[#F4B840] mt-[13px]">25% off</div>
        </div>

        {/* Mobile */}
        <div className="rounded-tl-[18px] rounded-bl-[18px] text-center md:hidden">
          <div className="font-bold text-4xl leading-[54px] text-[36px] text-[#F4B840]">
            <span>25%</span>
            <span className="leading-[27px] text-[18px] align-super">OFF</span>
          </div>
        </div>

        <div className="ml-[24px] text-[16px] leading-[24px] md:text-[25px] md:leading-[38px]">
          Offer Applicable on All Our Pencils
        </div>
      </div>
    </div>
  );
}

export default HeaderProduct;
