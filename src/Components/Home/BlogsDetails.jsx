import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { FaPenNib } from "react-icons/fa";

const BlogsDetails = () => {
    const blogs = useLoaderData();
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id == id);
    console.log(blog)

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center bg-[#faf7f2]  md:py-5 py-3 rounded font-heading my-6 md:my-10">Read about : {blog.blog_title}</h1>
            <div className="md:px-10 px-3">
                <div className="lg:w-[50%]"> <img className="w-full h-[300px]" src={blog.image} alt="" /></div>
                <h3 className="font-heading1 text-2xl md:text-3xl font-semibold text-[#b18b5e] my-5">{blog.blog_title}</h3>
                <p className="text-xl font-medium font-p">Subject: {blog.sub_category}</p>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 font-medium text-base dark:text-gray-600">
                    <span className="flex items-center gap-1"><FaPenNib></FaPenNib> {blog.writer}</span>
                    <span>{blog.date}</span>
                </div>
                <div className="border border-[#b18b5e] my-4 md:my-7"></div>
                <p className="font-p text-base md:text-lg">{blog.description}</p>

                <div> <button className='text-white font-bold py-2 md:py-2 font-p my-10  bg-[#b18b5e] rounded text-2xl w-full md:text-3xl' onClick={handleGoBack}>Go Back</button></div>
            </div>
        </div>

    );
};

export default BlogsDetails;