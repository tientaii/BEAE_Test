import React from 'react';
export interface TButton {
  text: string;
}

function Button({ text }: TButton) {
  return (
    <button className="mt-[0px] mb-[60px] md:mt-[35px] md:mb-[84px] w-[120px] h-[50px] bg-[#F4B840] rounded-[5px] ">
      <span className="not-italic text-[14px] leading-[40px] uppercase text-white font-bold">{text}</span>
    </button>
  );
}

export default Button;
