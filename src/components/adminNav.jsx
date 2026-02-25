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
    <nav className="
      fixed left-2 md:left-6
      top-4
      h-[85vh]
      w-[70px] md:w-[250px]
      bg-gray-300/50
      rounded-3xl
      flex flex-col
      items-center md:items-start
      transition-all duration-300
    ">
      <ul className="h-full w-full text-gray-700 font-semibold py-6 space-y-6">

        {/* Title - hidden on mobile */}
        <h2 className="hidden md:block text-[28px] w-full text-center text-[#6a8a08] font-extrabold mb-6">
          Admin Panel
        </h2>

        {/* Dashboard */}
        <li className="hover:scale-110 transition">
          <Link to="/" className="flex items-center justify-center md:justify-start gap-3 px-2">
            <MdDashboard size={22} />
            <span className="hidden md:inline">Dashboard</span>
          </Link>
        </li>

        {/* Categories */}
        <li className="hover:scale-110 transition">
          <Link to="/CatTable" className="flex items-center justify-center md:justify-start gap-3 px-2">
            <MdCategory size={22} />
            <span className="hidden md:inline">Categories</span>
          </Link>
        </li>

        {/* Sub Categories */}
        <li className="hover:scale-110 transition">
          <Link to="/subcatTable" className="flex items-center justify-center md:justify-start gap-3 px-2">
            <MdOutlineCategory size={22} />
            <span className="hidden md:inline">Sub-Categories</span>
          </Link>
        </li>

        {/* Add Category */}
        <li className="hover:scale-110 transition">
          <Link to="/cat" className="flex items-center justify-center md:justify-start gap-3 px-2">
            <MdAddBox size={22} />
            <span className="hidden md:inline">Add Categories</span>
          </Link>
        </li>

        {/* Add Sub Category */}
        <li className="hover:scale-110 transition">
          <Link to="/subcat" className="flex items-center justify-center md:justify-start gap-3 px-2">
            <MdAddBox size={22} />
            <span className="hidden md:inline">Add Sub-Category</span>
          </Link>
        </li>

        {/* Users */}
        <li className="hover:scale-110 transition">
          <Link to="/user" className="flex items-center justify-center md:justify-start gap-3 px-2">
            <MdPeople size={22} />
            <span className="hidden md:inline">Users</span>
          </Link>
        </li>

        {/* Orders */}
        <li className="hover:scale-110 transition">
          <Link to="/order" className="flex items-center justify-center md:justify-start gap-3 px-2">
            <MdPeople size={22} />
            <span className="hidden md:inline">Orders</span>
          </Link>
        </li>

        {/* Cart */}
        <li className="hover:scale-110 transition">
          <Link to="/cart" className="flex items-center justify-center md:justify-start gap-3 px-2">
            <MdShoppingCart size={22} />
            <span className="hidden md:inline">Cart</span>
          </Link>
        </li>

        {/* Payment */}
        <li className="hover:scale-110 transition">
          <Link to="/payment" className="flex items-center justify-center md:justify-start gap-3 px-2">
            <MdPayment size={22} />
            <span className="hidden md:inline">Payment</span>
          </Link>
        </li>

      </ul>
    </nav>
  );
}