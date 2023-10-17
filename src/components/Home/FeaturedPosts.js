import { sortBlogs } from "@/src/utils";
import BlogLayoutOne from "../Blog/BlogLayoutOne";

const FeaturedPosts = ({ blogs = [] }) => {
    const [_, blogOne, blogTwo, blogThree] = sortBlogs(blogs)

    return <section className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
        <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">Featured Posts</h2>

        <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16">
            <article className="col-span-2 sm:col-span-1 row-span-2 relative">
                {/* <BlogLayoutOne blog={blog} /> */}
                <BlogLayoutOne blog={blogTwo} />
            </article>
            <article className="col-span-2 sm:col-span-1 row-span-1 relative">
                {/* <BlogLayoutTwo blog={blogTwo} /> */}
                Blog Layout 2
            </article>
            <article className="col-span-2 sm:col-span-1 row-span-1 relative">
                {/* <BlogLayoutTwo blog={blogThree} /> */}
                Blog Layout 2
            </article>
        </div>
    </section>;
}

export default FeaturedPosts