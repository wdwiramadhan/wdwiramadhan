import Head from "next/head";
import { Flex, Link, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>wdwiramadhan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex minHeight="100vh" alignItems="center" justifyContent="center">
          <Link
            _focus={{ boxShadow: "none" }}
            _hover={{ color: "blue.400" }}
            href="https://github.com/wdwiramadhan"
          >
            <Text fontSize={["4xl", "5xl"]} fontWeight="bold">
              Under Reconstraction
            </Text>
          </Link>
        </Flex>
      </main>
    </div>
  );
}
