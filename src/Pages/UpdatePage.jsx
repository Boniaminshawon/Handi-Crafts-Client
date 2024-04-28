
import swal from "sweetalert";
import UseAuth from "../Components/Hooks/UseAuth";
import { useLoaderData } from "react-router-dom";


const UpdatePage = () => {
    const craft = useLoaderData();
    const { _id, item, category, image, stock, customize, price, rating, processing, description } = craft;
    console.log(craft);
    const { user } = UseAuth();
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const item = form.item.value;
        const category = form.category.value;
        const image = form.image.value;
        const stock = form.stock.value;
        const customize = form.customize.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const processing = form.processing.value;
        const description = form.description.value;

        const updatedData = { name, email, item, category, image, stock, customize, price, rating, processing, description };

        fetch(`http://localhost:5000/craftItem/${_id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal("Wow!", "You updated the craft item successfully!", "success");

                }
            });

        e.target.reset();

    }



    return (

        <div className="font-primary bg-no-repeat bg-cover bg-center my-10 border border-[#b18b5e] rounded">

            <section className="p-6 bg-[#ede6d8 bg-[#faf7f2] bg-[#fdf9f5  ">
                <form onSubmit={handleUpdate} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-16 p-6 rounded-md shadow-sm ">
                        <div className="space-y-4   col-span-full lg:col-span-1">

                            <p className="font-bold text-[#b18b5e] text-2xl text-center font-heading1">Update Your Art and Craft Information</p>

                            <p className="text-center font-p text-xl">You can update your art and crafts information by this form. Here you show the present value of this craft. But you can edit each and every field. So, happy updating. </p>
                        </div>

                        <div className="grid grid-cols-6 gap-6 col-span-full lg:col-span-3">

                            <div className="col-span-full sm:col-span-3">
                                <label className=" text-xl font-semibold  ">Your Name</label>
                                <br />
                                <input readOnly name="name" value={user.displayName} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs text-[#b18b5e] border-[#b18b5e] font-medium" />

                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label className=" text-xl font-semibold  ">Your Email</label>
                                <br />
                                <input readOnly name="email" value={user.email} type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs text-[#b18b5e] border-[#b18b5e] font-medium" />
                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label className=" text-xl font-semibold  ">Item Name</label>
                                <br />

                                <input defaultValue={item} name="item" type="text" placeholder="Type here" className="input border-[#b18b5e] input-bordered w-full max-w-xs" />
                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label className=" text-xl font-semibold  ">Sub-Category Name</label>
                                <br />
                                <select defaultValue={category} name="category" className="select border-[#b18b5e] select-bordered  w-full max-w-xs">

                                    <option disabled selected>Select One</option>
                                    <option ></option>
                                    <option>Wooden Furniture & Sculptures</option>
                                    <option>Wooden Home Decor</option>
                                    <option>Wooden Utensils and Kitchenware</option>
                                    <option>Jute Home Decor</option>
                                    <option>Jute Kitchenware & utensils</option>
                                    <option>Jute and wooden jewellery</option>
                                </select>
                                {/* <input name="category" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs " /> */}
                            </div>


                            <div className="col-span-full">
                                <label className=" text-xl font-semibold  ">Image URL</label>
                                <br />
                                <input defaultValue={image} name="image" type="text" placeholder="Type here" className="input border-[#b18b5e] input-bordered w-full max-w-3xl " />
                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label className=" text-xl font-semibold  ">Stock Status </label>
                                <br />
                                <select defaultValue={stock} name="stock" className="select border-[#b18b5e] select-bordered  w-full max-w-xs">

                                    <option disabled selected>Select One</option>

                                    <option></option>
                                    <option> In stock</option>
                                    <option>Made to Order</option>

                                </select>
                                {/* <input name="stock" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label className=" text-xl font-semibold  ">Customization</label>
                                <br />
                                <select defaultValue={customize} name="customize" className="select border-[#b18b5e] select-bordered  w-full max-w-xs">

                                    <option disabled selected>Select One</option>

                                    <option></option>
                                    <option>Yes</option>
                                    <option>No</option>

                                </select>
                                {/* <input name="customize" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label className=" text-xl font-semibold  ">Price</label>
                                <br />
                                <input defaultValue={price} name="price" type="text" placeholder="Type here" className="input border-[#b18b5e] input-bordered w-full max-w-xs" />
                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label className=" text-xl font-semibold  ">Rating</label>
                                <br />
                                <input defaultValue={rating} name="rating" type="text" placeholder="Type here" className="input border-[#b18b5e] input-bordered w-full max-w-xs " />
                            </div>


                            <div className="col-span-full sm:col-span-3">
                                <label className=" text-xl font-semibold  ">Processing Time</label>
                                <br />
                                <input defaultValue={processing} name="processing" type="text" placeholder="Type here" className="input border-[#b18b5e] input-bordered w-full max-w-xs" />
                            </div>


                            <div className="col-span-full">
                                <label className=" text-xl font-semibold  ">Items Description</label>
                                <br />
                                <textarea defaultValue={description} placeholder="Type here" name="description" className="textarea textarea-bordered border-[#b18b5e] textarea-lg w-full max-w-3xl" ></textarea>
                            </div>


                            <div className="col-span-full">
                                <input type="submit" value="Update Information " className="w-full max-w-3xl py-2 font-bold text-white rounded text-2xl bg-[#b18b5e]" />
                            </div>
                        </div>
                    </fieldset>

                </form>
            </section>


        </div>
    )
};

export default UpdatePage;