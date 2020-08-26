import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter();
  return (
    <section className="md:flex-row flex justify-between mb-8 px-5 md:px-20 lg:px-48 py-3 border-b">
        <Link href="/">
          <a className="text-xl sm:text-2xl  font-bold text-gray-800 hover:text-gray-700 my-auto">
            wdwiramadhan
          </a>
        </Link>
        <Link href="/posts">
          <a className={router.pathname == '/posts' || router.pathname == '/post/[slug]'? "text-blue-500 font-medium my-auto" : "text-gray-700 hover:text-blue-500 font-medium my-auto"}>
            Articles
          </a>
        </Link>
    </section>
  )
}
