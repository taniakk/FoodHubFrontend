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
    <nav className="h-[90%] mt-18 flex flex-col bg-gray-300/50 rounded-4xl fixed left-6">
      <ul className="h-full text-[18px] px-2 text-gray-700 font-semibold py-10 space-y-4 w-[80%] mx-auto">
        <h2 className="text-[35px] w-full text-center text-[#6a8a08] font-extrabold ">Admin Panel</h2>

        <li className="flex items-center gap-3 hover:scale-110">
          <MdDashboard size={22} /><Link to={'/'}>Dasboard</Link>
        </li>

        <li className="flex items-center gap-3 hover:scale-110">
        <Link to={'/CatTable'} className="flex items-center gap-3">  <MdCategory size={22} />  Categories
      </Link>  </li>

        <li className="flex items-center gap-3 hover:scale-110">
        <Link to={'/subcatTable'} className="flex items-center gap-3">  <MdOutlineCategory size={22} /> Sub-Categories</Link>
        </li>

        <li className="flex items-center gap-3 hover:scale-110">
        <Link to={'/cat'} className="flex items-center gap-3">  <MdAddBox size={22} /> Add Categories</Link>
        </li>

        <li className="flex items-center gap-3 hover:scale-110">
        <Link to={'/subcat'} className="flex items-center gap-3">  <MdAddBox size={22} /> Add Sub-Category</Link>
        </li>

        <li className="flex items-center gap-3 hover:scale-110">
        <Link to={'/user'} className="flex items-center gap-3">  <MdPeople size={22} /> Users</Link>
        </li>

        <li className="flex items-center gap-3 hover:scale-110">
        <Link to={'/order'} className="flex items-center gap-3">  <MdPeople size={22} /> Orders</Link>
        </li>

        <li className="flex items-center gap-3 hover:scale-110">
        <Link to={'/cart'} className="flex items-center gap-3">  <MdShoppingCart size={22} /> Cart</Link>
        </li>

        <li className="flex items-center gap-3 hover:scale-110">
        <Link to={'/payment'} className="flex items-center gap-3">  <MdPayment size={22} /> Payment</Link>
        </li>
      </ul>
    </nav>
  );
}
