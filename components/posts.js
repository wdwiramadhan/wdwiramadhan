import DateFormater from '../components/date-formater'
import Link from 'next/link'

export default function Posts({ posts }) {
  return (
    <section>
      <div className="max-w-3xl mx-auto">
        {posts.map((post) => (
          <div key={post.title}>
            <h3 className="md:text-2xl text-xl leading-relaxed lg:text-3xl font-bold text-blue-500">
              <Link as={`/post/${post.slug}`} href="/post/[slug]">
                <a className="hover:underline">{post.title}</a>
              </Link>
            </h3>
            <div className="text-md mb-4 text-gray-600">
              <DateFormater dateString={post.date} />
            </div>
            <p className="text-base leading-relaxed mb-4 text-gray-700">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
