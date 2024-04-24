import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const AddCoffee = () => {

    const handleSUbmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const quantity = form.quantity.value;
        const test = form.test.value;
        const photo = form.photo.value;

        const coffee = {
            name, chef, quantity, test, photo
        }

        fetch('https://coffee-stroe-server.vercel.app/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Coffee added successfully!", {
                        icon: "success",
                    });
                    form.reset()
                }
            })
    }


    return (
        <div className="w-[75%] mx-auto">
            <div className="my-8">
                <Link to={'/'}>
                    <button className="flex items-center gap-2 text-xl font-bold px-4 py-3"><BsArrowLeft></BsArrowLeft> Back to Home</button>
                </Link>
            </div>
            <div className="w-full mx-auto bg-[#CCCCCC] lg:p-20 p-6 my-20 rounded-lg">
                <form className="space-y-4" onSubmit={handleSUbmit}>
                    <h1 className="text-2xl md:text4xl font-bold text-center">Add New Coffee</h1>
                    <p className="text-[#1B1A1AB3] w-[75%] mx-auto text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <div className="space-y-4">
                        <div className="lg:flex gap-8">
                            <div className="flex flex-col gap-2 w-full">
                                <label className="text-xl font-bold" htmlFor="name">Name</label>
                                <input className="px-6 py-3 w-full" type="text" name="name" placeholder="Coffee Name" />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label className="text-xl font-bold" htmlFor="chef">Chef</label>
                                <input className="px-6 py-3 w-full" type="text" name="chef" placeholder="Chef Name" />
                            </div>
                        </div>
                        <div className="lg:flex gap-8">
                            <div className="flex flex-col gap-2 w-full">
                                <label className="text-xl font-bold" htmlFor="quantity">Available Quantity</label>
                                <input className="px-6 py-3 w-full" type="text" name="quantity" placeholder="Quantity" />
                            </div>
                            <div className="flex flex-col gap-2 w-full">
                                <label className="text-xl font-bold" htmlFor="test">Test</label>
                                <input className="px-6 py-3 w-full" type="text" name="test" placeholder="Test" />
                            </div>
                        </div>
                        <div className="w-full flex flex-col">
                            <label className="text-xl font-bold" htmlFor="photo">Photo URL</label>
                            <input className="px-6 py-3 w-full" type="text" name="photo" placeholder="Photo URl" />
                        </div>
                        <div className="w-full">
                            <input className="font-bold rounded-md w-full bg-[#D2B48C] border-2 border-[#331A15] px-6 py-3 " type="submit" value="Add Coffee" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;