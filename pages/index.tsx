import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";

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
              <img
                src="./assets/profile.jpg"
                alt="profile picture"
                className="rounded-full max-w-avatar"
              />
              <div className="text-xl text-gray-700 px-5 my-auto">
                wdwiramadhan
              </div>
            </div>
            <div className="rounded-md overflow-hidden shadow-md md:p-6 p-4 mt-6">
              <p className="text-2xl font-bold text-gray-700">
                Wahyu Dwi Ramadhan
              </p>
              <p className="text-md leading-relaxed text-gray-700 mt-6">
                I'm full-stack developer who uses React, Vue and Node.js. I'm Open Source enthusiast.
                Currently i'm a freelancer who focuses on building websites.
              </p>
              <p className="text-md leading-relaxed text-gray-700 mt-8">
                If you have an exciting project or idea in mind, please feel free to
                contact me
              </p>
            </div>
          </section>
          <section className="flex flex-col mx-auto max-w-2xl mt-10 md:mt-16">
            <div className="rounded-md overflow-hidden shadow-md md:p-6 p-4 py-6">
              <div className="text-lg text-gray-700">Projects</div>
              <p className="text-2xl font-bold text-gray-700 mt-3">Coming Soon</p>
            </div>
          </section>
          <section className="flex flex-col mx-auto max-w-2xl mt-10 md:mt-16">
            <div className="rounded-md overflow-hidden shadow-md md:p-6 p-4 py-6">
              <div className="text-lg text-gray-700">Articles</div>
              <p className="text-2xl font-bold text-gray-700 mt-3">Coming Soon</p>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  );
}
