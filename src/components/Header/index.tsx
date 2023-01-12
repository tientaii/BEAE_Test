import NavItem from './NavItem';

const items = [
  { label: 'Pencils', icon: '/src/assets/img/pencil.svg', active: true },
  { label: 'Markers', icon: '/src/assets/img/Markers.svg' },
  { label: 'Drawing Colors', icon: '/src/assets/img/DrawingColors.svg' },
  { label: 'Notebooks', icon: '/src/assets/img/notebooks.svg' },
];

function Index() {
  return (
    <div>
      <div className="flex justify-between font-bold">
        {items.map((item, index) => (
          <NavItem item={item} key={index} />
        ))}
      </div>

      <div className="bg-primary">
        <div className="grid md:grid-cols-12 pt-[51px] pl-[50px] ">
          <div className="col-span-4  w-[350px]">
            <div className="not-italic font-normal text-[21px] leading-[32px]">
              Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils.
            </div>
            <ul className="ml-[20px] list-disc mt-[20px]">
              <li className="font-semibold not-italic text-[18px] leading-[40px]">MECHANICAL PENCILS</li>
              <li className="font-semibold not-italic text-[18px] leading-[40px]">ARCHITECT'S CHOICE</li>
              <li className="font-semibold not-italic text-[18px] leading-[40px]">EXECUTIVE PENCILS</li>
              <li className="font-semibold not-italic text-[18px] leading-[40px]">ENGRAVABLE PENCILS</li>
            </ul>
            <button className="mt-[35px] w-[120px] h-[50px] bg-[#F4B840] rounded-[5px] mb-[84px]">
              <span className="not-italic text-[14px] leading-[40px] uppercase text-white font-bold">Shop all</span>
            </button>
          </div>
          <div className="col-span-8 bg-red-200">fdfd</div>
        </div>
      </div>
    </div>
  );
}

export default Index;
