import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Dynamic import to simulate fetching
    import("../data/BlogsData")
      .then((module) => {
        if (module && module.blogsData) {
          setBlogs(module.blogsData);
        } else {
          setError("No blogs found");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading blogs:", err);
        setError("Failed to load blogs");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500 mt-20">Loading blogs...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-20">{error}</p>;
  }

  return (
    <div className="max-w-9/12 mx-auto py-16 space-y-10">
        <h2 className=" text-4xl text-center font-bold mb-15">Blogs</h2>
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row gap-6 bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="lg:w-1/3">
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-2/3 p-6 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-green-700">
              {blog.title}
            </h2>
            <p className="text-gray-700 text-justify">{blog.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
