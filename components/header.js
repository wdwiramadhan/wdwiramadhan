import Link from 'next/link'

export default function Header() {
  return (
    <section className="md:flex-row flex justify-between mb-10 px-3 md:px-40 lg:px-40 py-3 border-b">
        <Link href="/">
          <a className="md:text-2xl font-bold text-gray-900 my-auto">
            wdwiramadhan.
          </a>
        </Link>
        <Link href="/posts">
          <a className="text-gray-800 font-bold my-auto">
            blog
          </a>
        </Link>
    </section>
  )
}
