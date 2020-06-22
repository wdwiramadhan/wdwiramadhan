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
          <div className="flex flex-col mx-auto max-w-xl">
            <p className="text-4xl font-bold text-gray-800 sm:mt-10 mt-3">Hello</p> 
            <p className="text-lg leading-relaxed mb-4 text-gray-800 mt-3">I'm full-stack developer who uses React or Vue at front-end and Express or Laravel at back-end. I joined Dinus Open Source Community, i'm Open Source enthusiast. Now i'm a freelancer that focus on building websites or help people to solve their problem.</p>
            <p className="text-lg leading-relaxed mb-4 text-gray-800 mt-3">If you have an exciting project or idea in mind, feel free to contact me</p>
            <Socmed/>
          </div>
        </Container>
      </Layout>
    </>
  )
}
