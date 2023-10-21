import Link from 'next/link';
import Image from "next/image"
import { format } from 'date-fns';

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className='group grid grid-cols-12 gap-4 items-center text-dark dark:text-light'>
      <Link href={blog.url_path} className="col-span-4 h-full rounded-xl overflow-hidden">
        <Image src={blog.image.filePath.replace('../public', '')}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300" />
      </Link>

      <div className="col-span-8 w-full">
        {/* <Tag className='px-6 text-sm py-2 !border' link={`/categories/${blog.tags[0]}`} name={blog.tags[0]} /> */}
        <span className='uppercase text-accent font-semibold text-sm'>{blog.tags[0]}</span>
        <Link href={blog.url_path} className='inline-block my-1'>
          <h2 className='font-semibold capitalize text-lg'>
            <span className='bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="inline-block w-full capitalize text-gray dark:text-light/50 font-semibold text-xs sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  )
}

export default BlogLayoutTwo