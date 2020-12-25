import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import { getAllTalks } from "../lib/talks";
export default function talks() {
  const talks = getAllTalks().reverse();
  return (
    <>
      <Layout>
        <Head>
          <title>wdwiramadhan</title>
        </Head>
        <Container>
          <div className="mx-auto px-5 sm:px-2 max-w-xl mt-16">
            <div className="flex">
              <Link href="/">
                <a className="text-gray-800 hover:text-blue-500 flex flex-row">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Back</span>
                </a>
              </Link>
            </div>
            <div className="mt-10">
              {talks.map((talk) => (
                <ul key={talk.id}>
                  <li className="mt-3">
                    <a
                      href={talk.slides}
                      className="text-blue-500 hover:text-blue-700 text-lg"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="next link"
                    >
                      {talk.title}
                    </a>
                    <div className="text-gray-700 text-base sm:float-right">
                      {talk.date}
                    </div>
                  </li>
                  <li className="text-gray-800 text-base">
                    {talk.organizer + ", " + talk.city}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
