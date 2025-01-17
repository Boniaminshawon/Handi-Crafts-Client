
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const SingleCraft = ({ singleCraft, displayMyCart, setDisplayMyCart }) => {
    const { _id, item, image, stock, rating, price, processing, customize } = singleCraft;
   
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://handi-crafts-server.vercel.app/craftItem/${id}`, {
                    method: 'delete',

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"

                            })
                            const remainingCrafts = displayMyCart.filter(craft => craft._id !== id);
                            setDisplayMyCart(remainingCrafts);
                           
                        }

                    });
            }
        });
    }


    return (
        <div className="flex flex-col md:flex-row border-[#b18b5e] font-p border rounded shadow-xl bg-[#fdf9f5] gap-5 p-4 ">
            <div>
                <img className="h-full md:w-56 rounded" src={image} alt="" />
            </div>
            <div className="border border-[#b18b5e] "></div>
            <div className="space-y-2 flex-1">
                <p className="text-xl font-semibold text-[#b18b5e] font-heading1">{item}</p>

                <p className="text-lg  "><span className="  font-medium mr-2">Price:</span> {price}</p>
                <p className="text-lg  "><span className="  font-medium mr-2">Stock Status:</span> {stock}</p>


                <p className="text-lg  "><span className="  font-medium mr-2">Processing:</span> {processing}</p>

                <p className="text-lg  "><span className="  font-medium mr-2">Customization:</span> {customize}</p>

                <div className="flex gap-8">
                    <Link to={`/myCraft/${_id}`}><button className="bg-green-600 py-1 px-3 text-white rounded">Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className="bg-red-600   py-1 px-3 text-white rounded">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCraft;