export interface Products {
  label: string;
  icon: string;
  price: string;
  priceSale: string;
}

function Product({ item }: { item: Products }) {
  const { label, icon, price, priceSale } = item;

  return (
    <div className="w-[224px] h-[320px] bg-white rounded-[18px] mb-[40px] ">
      <img src={icon} alt="" className="m-auto mt-[10px]"></img>
      <p className="text-[14px] font-medium">{label}</p>
      <div className="flex items-center justify-center mt-[10px]">
        <p className="font-semibold text-[16px] leading-[24px] mr-[5px]">{price}</p>
        <p className="text-[14px] leading-[21px] ml-[5px] text-[#727272] line-through">{priceSale}</p>
      </div>
    </div>
  );
}

export default Product;
