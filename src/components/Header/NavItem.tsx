export interface Item {
  label: string;
  icon: string;
  active?: boolean;
}

function NavItem({ item }: { item: Item }) {
  const { label, icon, active } = item;

  return (
    <div
      className={`cursor-pointer${
        active ? ' bg-[#f4f4f4]' : 'bg-white'
      } hover:bg-[#f4f4f4] flex rounded-t-[25px] w-[300px] h-[200px]`}
    >
      <div className="flex m-auto w-[235px] h-[140px] bg-white rounded-[10px] shadow-3xl">
        <div className="m-auto">
          <img src={icon} alt="" className="m-auto" />
          <h4>{label}</h4>
        </div>
      </div>
    </div>
  );
}

export default NavItem;
