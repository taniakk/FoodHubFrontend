import {
  MdDashboard,
  MdCategory,
  MdOutlineCategory,
  MdAddBox,
  MdPeople,
  MdShoppingCart,
  MdPayment
} from "react-icons/md";
import { Link } from "react-router-dom";

export function AdminNav() {
  return (
    <nav className="h-[85%] mt-18 flex flex-col bg-gray-300/50 rounded-l-4xl fixed left-0">
      <ul className="h-full text-[18px] px-2 text-gray-700 font-semibold py-10 space-y-4 w-[80%] mx-auto">
        <h2 className="text-[28px] text-[#6a8a08] font-extrabold ">Admin Panel</h2>

        <li className="flex items-center gap-3">
          <MdDashboard size={22} /><Link to={'/'}>Dasboard</Link>
        </li>

        <li className="flex items-center gap-3">
        <Link to={'/CatTable'} className="flex items-center gap-3">  <MdCategory size={22} />  Categories
      </Link>  </li>

        <li className="flex items-center gap-3">
          <MdOutlineCategory size={22} /> <Link to={'/subcatTable'}>Sub-Categories</Link>
        </li>

        <li className="flex items-center gap-3">
          <MdAddBox size={22} /> <Link to={'/cat'}>Add Categories</Link>
        </li>

        <li className="flex items-center gap-3">
          <MdAddBox size={22} /> <Link to={'/subcat'}>Add Sub-Category</Link>
        </li>

        <li className="flex items-center gap-3">
          <MdPeople size={22} /> <Link to={'/user'}>Users</Link>
        </li>

        <li className="flex items-center gap-3">
          <MdPeople size={22} /> <Link to={'/order'}>Orders</Link>
        </li>

        <li className="flex items-center gap-3">
          <MdShoppingCart size={22} /> <Link to={'/cart'}>Cart</Link>
        </li>

        <li className="flex items-center gap-3">
          <MdPayment size={22} /> <Link to={'/payment'}>Payment</Link>
        </li>
      </ul>
    </nav>
  );
}
