import { BsCup } from "react-icons/bs";
import Coffees from "./Coffees";
import { Link } from "react-router-dom";

const AllCoffees = () => {
    return (
        <div className="py-24">
            <div className="text-center space-y-4">
                <p className="text-[#1B1A1A]">--- Sip & Savor ---</p>
                <h1 className="text-2xl md:text-4xl font-bold">Our Popular Products</h1>
                <div>
                    <Link to={'/addCoffee'}>
                        <button className="btn bg-[#E3B577] mx-auto border-2 border-[#331A15] rounded-md px-4 py-2 text-white font-bold flex items-center gap-2">Add Coffee <BsCup className="text-black"></BsCup></button>
                    </Link>
                </div>
            </div>
            <Coffees />
        </div>
    );
};

export default AllCoffees;