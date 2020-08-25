import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'


export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>wdwiramadhan</title>
        </Head>
        <Container>
          <section className="flex flex-col mx-auto max-w-2xl mt-12">
            <div className="flex flex-row">
              <img src="./assets/profile.jpg" alt="profile picture" className="rounded-full max-w-avatar" />
              <div className="text-xl leading-relaxed text-gray-700 px-5 my-auto">wdwiramadhan</div>  
            </div>
            <div className="rounded-md overflow-hidden shadow-md md:px-6 md:py-8 px-4 py-6 mt-6">
              <p className="text-2xl font-bold text-gray-700">Wahyu Dwi Ramadhan</p> 
              <p className="text-md leading-relaxed text-gray-700 mt-6">I'm full-stack developer who uses React or Vue at front-end and Express or Laravel at back-end. I'm Open Source enthusiast. Currently i'm a freelancer that focus on building websites.</p>
              <p className="text-md leading-relaxed text-gray-700 mt-8">If you have an exciting project or idea in mind, feel free to contact me</p>
            </div>
          </section>
          <section className="flex flex-col mx-auto max-w-2xl mt-20">
            <div>
              <div className="text-xl leading-relaxed text-gray-700">Projects</div>  
            </div>
            <div className="rounded-md overflow-hidden shadow-md md:px-6 md:py-8 px-4 py-6 mt-6">
              <p className="text-2xl font-bold text-gray-700">Coming Soon</p>
            </div>
          </section>
          <section className="flex flex-col mx-auto max-w-2xl mt-20">
            <div>
              <div className="text-xl leading-relaxed text-gray-700">Articles</div>  
            </div>
            <div className="rounded-md overflow-hidden shadow-md md:px-6 md:py-8 px-4 py-6 mt-6">
              <p className="text-2xl font-bold text-gray-700">Coming Soon</p>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}
