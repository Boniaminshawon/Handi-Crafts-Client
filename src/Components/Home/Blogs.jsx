import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";





const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {

        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => {

                setBlogs(data);

            })

    }, [])




    return (
        <div className="container p-6 mx-auto space-y-8">
            <div className="space-y-2 text-center">
                <h1 className="text-4xl font-bold text-center bg-[#faf7f2]  py-5 rounded font-heading1 mb-7">From Our Blog</h1>

                <p className="font-p text-lg  text-center pb-5 px-16">
                    Dive into the world of exquisite jute and wooden handicrafts with our captivating blog section. Explore the intricate craftsmanship, timeless beauty, and eco-friendly allure of these artisanal creations. From stunning jewelry pieces to charming home decor items, our blog unveils the unique stories and inspiration behind each handcrafted treasure. Embark on a journey of discovery and appreciation for the rich heritage and sustainable elegance of jute and wooden handicrafts through our engaging blog content.</p>

            </div>
            <div className="grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2 lg:grid-cols-4">

                {
                    blogs.slice(0, 4).map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)
                }
            </div>
            <div className="flex justify-center gap-12">
                {
                    blogs.slice(4).map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)
                }
            </div>

        </div>
    );
};

export default Blogs;