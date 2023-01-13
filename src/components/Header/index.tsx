import NavItem from './NavItem';
import Product from './Product';

const items = [
  { label: 'Pencils', icon: '/src/assets/img/pencil.svg', active: true },
  { label: 'Markers', icon: '/src/assets/img/Markers.svg' },
  { label: 'Drawing Colors', icon: '/src/assets/img/DrawingColors.svg' },
  { label: 'Notebooks', icon: '/src/assets/img/notebooks.svg' },
];

const products = [
  {
    label: 'Aero Mechanical Pencil',
    icon: '/src/assets/imgProduct/pen1.svg',
    price: '$99.00',
    priceSale: '$125.00',
  },
  {
    label: 'Castell Mechanical Pencil',
    icon: '/src/assets/imgProduct/pen2.svg',
    price: '$75.00',
    priceSale: '$99.00',
  },
  {
    label: 'Architect Choice Pencil',
    icon: '/src/assets/imgProduct/pen3.svg',
    price: '$45.00',
    priceSale: '$70.00',
  },
];

function Index() {
  return (
    <div>
      <div className="flex justify-between font-bold">
        {items.map((item, index) => (
          <NavItem item={item} key={index} />
        ))}
      </div>

      <div className="bg-primary ">
        <div className="grid md:grid-cols-12 pt-[51px] pl-[50px] ">
          <div className="col-span-4  ">
            <div className="not-italic font-normal text-[21px] leading-[32px]">
              Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils.
            </div>

            <ul className="ml-[20px] list-disc mt-[20px]">
              <li className="infomation">MECHANICAL PENCILS</li>
              <li className="infomation">ARCHITECT'S CHOICE</li>
              <li className="infomation">EXECUTIVE PENCILS</li>
              <li className="infomation">ENGRAVABLE PENCILS</li>
            </ul>

            <button className="mt-[35px] w-[120px] h-[50px] bg-[#F4B840] rounded-[5px] mb-[84px]">
              <span className="not-italic text-[14px] leading-[40px] uppercase text-white font-bold">Shop all</span>
            </button>
          </div>

          <div className="md:col-span-8 ">
            <div className="flex items-center box-border w-[95.5%] h-[80px] top-[348px] rounded-[18px] border-[3px] border-solid border-white mb-[20px]">
              <div className="w-[200px] h-[80px] bg-white rounded-tl-[18px] rounded-bl-[18px] text-center ">
                <div className="font-bold text-4xl leading-[54px] text-[#F4B840] mt-[13px]">25% off</div>
              </div>
              <div className="ml-[24px] text-[25px]">Offer Applicable on All Our Pencils</div>
            </div>

            <div className="flex flex-row justify-between w-[95.5%] text-center">
              {products.map((product, index) => (
                <Product item={product} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[50px]">
        <div className="w-[15px] h-[15px] bg-black rounded-[15px] mr-[15px] "></div>
        <div className="w-[15px] h-[15px] bg-[#333] rounded-[15px] opacity-[25%]"></div>
      </div>
    </div>
  );
}

export default Index;
