import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
    const coffee = useLoaderData()
    console.log(coffee)
    return (
        <div className="w-11/12 md:w-[75%] mx-auto py-20 space-y-20">
            <div>
                <Link to={'/'}>
                    <button className="flex items-center gap-4 text-xl font-bold px-4 py-2">
                        <BsArrowLeft></BsArrowLeft>Back to Home
                    </button>
                </Link>
            </div>
            <div className="border-2 flex flex-col lg:flex-row items-center gap-10 bg-[#F4F3F0] rounded-lg p-20">
                <img className="h-[300px] mb-10 rounded-md" src={coffee.photo} alt="" />
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">{coffee.name}</h1>
                    <h2 className="text-2xl font-semibold">Chef : {coffee.chef}</h2>
                    <h2 className="text-2xl font-semibold text-red-600">Remaining : {coffee.quantity}</h2>
                    <p className="text-2xl font-semibold text-blue-600">Test : {coffee.test}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;