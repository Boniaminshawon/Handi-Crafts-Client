import { FaPenNib } from "react-icons/fa";
import { Link } from "react-router-dom";


const SingleBlog = ({ blog }) => {
 
    const { image, blog_title, writer, date,id } = blog;
    return (
        <div className="flex flex-row shadow-xl w-[300px] border rounded border-[#b18b5e] ">
            <article className="flex flex-col dark:bg-gray-50">

                <img alt="" className="object-cover w-full h-48 dark:bg-gray-500" src={image} />

                <div className="flex flex-col flex-1 p-3">

                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{blog_title}</h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 font-medium text-base dark:text-gray-600">
                        <span className="flex items-center gap-1"><FaPenNib></FaPenNib> {writer}</span>
                        <span>{date}</span>
                    </div>
                    <div className="text-center mt-4 ">
                       <Link  to={`/blogs/${id}`}> <button className="bg-[#b18b5e] px-2 py-1 rounded  text-white">Read More</button></Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default SingleBlog;