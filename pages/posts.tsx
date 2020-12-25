import Container from '../components/container'
import AllPosts from '../components/posts'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Posts({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>wdwiramadhan</title>
        </Head>
        <Container>
          {allPosts.length > 0 && <AllPosts posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}