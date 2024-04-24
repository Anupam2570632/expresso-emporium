import { useEffect, useState } from "react";
import sectionBg from '../assets/more/1.png'
import { Link } from "react-router-dom";
import { RxUpdate } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { BsEye } from "react-icons/bs";
import swal from "sweetalert";

const Coffees = () => {
    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        fetch('https://coffee-stroe-server.vercel.app/coffees')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCoffees(data)
            })
    }, [])



    const handleDelete = id => {
        console.log(id)

        swal({
            title: "Are you sure want to delete this coffee?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://coffee-stroe-server.vercel.app/coffees/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("This coffee has been deleted!", {
                                    icon: "success",
                                });
                                const remainingCoffee = coffees.filter(coffee => coffee._id !== id)
                                setCoffees(remainingCoffee)
                            }
                        })
                }
            });

    }

    return (
        <div className="w-full py-12 object-cover bg-cover" style={{ backgroundImage: `url(${sectionBg})`, backgroundSize: 'cover' }}>
            <div className="grid md:grid-cols-2 gap-6 md:w-[75%] mx-auto ">
                {
                    coffees.map(coffee => <div className="flex flex-col xl:flex-row gap-6 items-center justify-between border p-6 rounded-xl" key={coffee._id}>
                        <img className="rounded-[8px]" src={coffee.photo} alt="" />
                        <div>
                            <h1 className="text-[24px] text-blue-800 font-bold">{coffee.name}</h1>
                            <p className="text-[18px] font-bold">Chef name: {coffee.chef}</p>
                            <p>Test : {coffee.test}</p>
                            <p className="text-[18px] font-bold">{coffee.quantity} Available</p>
                        </div>
                        <div className="space-y-4 gap-6 flex xl:inline items-center justify-between">
                            <div>
                                <Link to={`/coffeeDetails/${coffee._id}`}>
                                    <button className="btn btn-outline btn-info text-xl flex items-center justify-center btn-circle"><BsEye></BsEye></button>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/updateCoffee/${coffee._id}`}>
                                    <button className="btn btn-outline text-xl flex items-center justify-center btn-circle"><RxUpdate></RxUpdate></button>
                                </Link>
                            </div>
                            <div className="">
                                <button onClick={() => handleDelete(coffee._id)} className="btn btn-outline btn-error text-xl flex items-center justify-center btn-circle"><MdDelete></MdDelete></button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Coffees;