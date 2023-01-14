import Tab from '../Header/Tab';

function Index() {
  return (
    <div>
      <div>
        <div className="font-bold text-[45px] text-center mt-[100px] leading-[68px]">Packer pen Gallery</div>
      </div>

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

      <Tab />
    </div>
  );
}

export default Index;
