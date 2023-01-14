import Details from './Details';
import HeaderProduct from './HeaderProduct';
import NavItem from './NavItem';
import Product from './Product';
import Tab from './Tab';

import { products } from './data/Products';
import { items } from './data/Items';

function Index() {
  return (
    // Item
    <div>
      <div className="flex justify-between font-bold">
        {items.map((item, index) => (
          <NavItem item={item} key={index} />
        ))}
      </div>

      {/* Products and details */}
      <div className="bg-primary ">
        <div className="grid md:grid-cols-12 pt-[51px] pl-[50px] ">
          <div className="col-span-4">
            <Details />
          </div>

          <div className="md:col-span-8 ">
            <HeaderProduct />

            <div className="flex flex-row justify-between w-[95.5%] text-center">
              {products.map((product, index) => (
                <Product item={product} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Tab />
    </div>
  );
}

export default Index;
