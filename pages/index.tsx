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
          <section className="mx-auto px-5 sm:px-2 max-w-xl mt-24">
            <img
              src="./assets/profile.jpg"
              alt="profile picture"
              className="mx-auto rounded-full max-w-avatar"
            />
            <div className="text-center mt-4">
              <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                Wahyu Dwi Ramadhan
              </p>
              <p className="text-lg sm:text-xl font-normal text-gray-600">
                Fullstack Developer
              </p>
            </div>
            <hr className="mt-8" />
          </section>
          <section className="flex flex-col px-5 sm:px-2 mx-auto max-w-xl mt-10 sm:mt-12">
            <p className="text-xl text-gray-800">Projects</p>
            <p className="text-gray-800 leading-relaxed mt-3">
              Fullstack Developer at
              <span>
                <a
                  href="https://bidikkampus.com/"
                  className="ml-1 text-blue-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="next link"
                >
                  Bidik Kampus
                </a>
              </span>
            </p>
          </section>
          <section className="flex flex-col px-5 sm:px-2 mx-auto max-w-xl mt-10 sm:mt-12">
            <p className="text-xl text-gray-800">Talks</p>
            <p className="text-gray-800 leading-relaxed mt-3">
             Coming Soon
            </p>
          </section>
          <section className="flex flex-col px-5 sm:px-2 mx-auto max-w-xl mt-10 sm:mt-12">
            <p className="text-xl text-gray-800">Articles</p>
            <p className="text-gray-800 leading-relaxed mt-3">
             Coming Soon
            </p>
          </section>
        </Container>
      </Layout>
    </>
  );
}
