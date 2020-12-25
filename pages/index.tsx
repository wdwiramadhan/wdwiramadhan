import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import { getAllTalks } from "../lib/talks";

export default function Index() {
  const talks = getAllTalks()
    .reverse()
    .slice(0, 3);
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
            <h1 className="text-xl text-gray-800">Projects</h1>
            <div className="text-gray-800 text-base mt-3">
              Fullstack Developer at
              <span>
                <a
                  href="https://bidikkampus.com/"
                  className="ml-1 text-blue-500 hover:text-blue-700"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="next link"
                >
                  Bidik Kampus
                </a>
              </span>
            </div>
          </section>
          <section className="flex flex-col px-5 sm:px-2 mx-auto max-w-xl mt-8 sm:mt-10">
            <h1 className="text-xl text-gray-800">Talks</h1>
            {talks.map((talk) => (
              <ul key={talk.id} className="mt-3">
                <li>
                  <a
                    href={talk.slides}
                    className="text-blue-500 hover:text-blue-700 text-base"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="next link"
                  >
                    {talk.title}
                  </a>
                </li>
                <li className="text-gray-800 text-base">
                  {talk.organizer + ", " + talk.city}
                </li>
              </ul>
            ))}
            <div className="flex-auto mt-3">
              <Link as="/talks" href="/talks">
                <a className="text-gray-800 hover:text-blue-500 text-base">
                  <span>More...</span>
                </a>
              </Link>
            </div>
          </section>
          <section className="flex flex-col px-5 sm:px-2 mx-auto max-w-xl mt-8 sm:mt-10">
            <h1 className="text-xl text-gray-800">Articles</h1>
            <p className="text-gray-800 leading-relaxed mt-3">Coming Soon</p>
          </section>
        </Container>
      </Layout>
    </>
  );
}
