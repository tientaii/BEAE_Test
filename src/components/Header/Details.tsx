import Button from './Button/Button';
import React from 'react';

function Details() {
  return (
    <>
      {/* PC */}
      <div className="hidden md:block">
        <div className="not-italic font-normal text-[21px] leading-[32px]">
          Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils.
        </div>

        <ul className="ml-[20px] list-disc mt-[20px]">
          <li className="infomation">MECHANICAL PENCILS</li>
          <li className="infomation">ARCHITECT'S CHOICE</li>
          <li className="infomation">EXECUTIVE PENCILS</li>
          <li className="infomation">ENGRAVABLE PENCILS</li>
        </ul>

        <Button text="Shop all" />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="not-italic font-normal text-[16px] leading-[27px]">
          Graphite Artist Quality Fine Art Drawing, Sketching and Replaceable Nib Pencils.
        </div>

        <ul className="ml-[20px] list-disc mt-[20px] grid grid-cols-2 gap-x-4 text-[13px] leading-[32px]">
          <li className="infomation">MECHANICAL PENCILS</li>
          <li className="infomation">EXECUTIVE PENCILS</li>
          <li className="infomation">ARCHITECT'S CHOICE</li>
          <li className="infomation">ENGRAVABLE PENCILS</li>
        </ul>
      </div>
    </>
  );
}

export default Details;
