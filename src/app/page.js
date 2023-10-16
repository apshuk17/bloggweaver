import { allBlogs } from 'contentlayer/generated'

export default function Home() {
  console.log('##allBlogs', allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      This site is under development
    </main>
  )
}
