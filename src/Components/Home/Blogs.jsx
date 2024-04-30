import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import Loader from "../Loader";





const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch('https://handi-crafts-server.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {

                setBlogs(data);
                setLoading(false);

            })

    }, [])
    if (loading) {
        return <Loader></Loader>
    }




    return (
        <div className="container md:p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
                <h1 className="lg:text-4xl md:text-3xl text-3xl font-bold text-center bg-[#faf7f2]  py-5 rounded font-heading1 mb-7">From Our Blog</h1>

                <p className="font-p md:text-lg text-base  text-center pb-5 md:px-10 px-1 lg:px-16">
                    Dive into the world of exquisite jute and wooden handicrafts with our captivating blog section. Explore the intricate craftsmanship, timeless beauty of these artisanal creations. Embark on a journey of discovery and appreciation for the rich heritage and sustainable elegance of jute and wooden handicrafts through our engaging blog content.</p>

            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

                {
                    blogs.map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)
                }
            </div>
            {/* <div className="flex justify-center gap-12">
                {
                    blogs.slice(4).map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)
                }
            </div> */}

        </div>
    );
};

export default Blogs;