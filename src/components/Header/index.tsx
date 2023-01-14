import Details from './Details';
import HeaderProduct from './HeaderProduct';
import NavItem from './NavItem';
import Product from './Product';
import Tab from './Tab';
import React from 'react';

import { products, productsOnMobile } from '../data/Products';
import { items } from '../data/Items';
import Button from './Button/Button';

function Index() {
  return (
    <>
      {/* PC */}
      <div className="hidden md:block">
        <div className="flex justify-between font-bold">
          {items.map((item, index) => (
            <NavItem item={item} key={index} />
          ))}
        </div>

        {/* Products and details */}
        <div className="bg-primary rounded-b-[25px]">
          <div className="grid md:grid-cols-12 py-[40px] px-[50px] ">
            <div className="col-span-4">
              <Details />
            </div>

            <div className="md:col-span-8 ">
              <HeaderProduct />

              <div className="flex flex-row justify-between text-center">
                {products.map((product, index) => (
                  <Product item={product} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Tab />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex justify-between font-bold">
          <div className={`cursor-pointer bg-[#f4f4f4] hover:bg-[#f4f4f4] flex rounded-t-[25px] w-full`}>
            <div className="flex  bg-white rounded-[18px] shadow-3xl w-full m-[10px] mb-[30px] items-center py-[12px] px-[30px] justify-between">
              <div className="flex items-center gap-[20px]">
                <img src={'/src/assets/img/pencil.svg'} alt="" className="m-auto w-[50px]" />
                <h4>{'Pencils'}</h4>
              </div>
              <div>
                <img src="/src/assets/img/arrow-up.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Products and details */}
        <div className="bg-primary rounded-b-[25px]">
          <div className="grid md:grid-cols-12 py-[11px] px-[26px] md:py-[51px] md:px-[50px] ">
            <div>
              <Details />
            </div>

            <div>
              <HeaderProduct />

              <div className="flex flex-row justify-between text-center gap-[18px] pt-[20px]">
                {productsOnMobile.map((product, index) => (
                  <Product item={product} key={index} />
                ))}
              </div>
              <div className="text-center">
                <Button text="Shop all" />
              </div>
            </div>
          </div>
        </div>

        <div className="font-bold ">
          {items
            .filter((item) => item.active === false)
            .map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer bg-[#f4f4f4] hover:bg-[#f4f4f4] flex rounded-[25px] w-full my-[10px]`}
              >
                <div className="flex  bg-white rounded-[18px] shadow-3xl w-full m-[10px] items-center py-[12px] px-[30px] justify-between">
                  <div className="flex items-center gap-[20px]">
                    <img src={item.icon} alt="" className="m-auto w-[50px]" />
                    <h4>{item.label}</h4>
                  </div>
                  <div>
                    <img src={item.arrow} alt="" />
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Tab />
      </div>
    </>
  );
}

export default Index;
