import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import Head from 'next/head'
import Socmed from '../components/socmed'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>wdwiramadhan</title>
        </Head>
        <Header />
        <Container>
          <div className="flex flex-col mx-auto max-w-2xl">
            <p className="text-4xl font-bold text-gray-700 sm:mt-10 mt-3">Hello</p> 
            <p className="text-lg leading-relaxed mb-4 text-gray-700 mt-3">I'm full-stack developer who uses React or Vue at front-end and Express or Laravel at back-end. I joined Dinus Open Source Community, i'm Open Source enthusiast. Currently i'm a freelancer that focus on building websites.</p>
            <p className="text-lg leading-relaxed mb-4 text-gray-700 mt-3">If you have an exciting project or idea in mind, feel free to contact me</p>
            <Socmed/>
          </div>
        </Container>
      </Layout>
    </>
  )
}
