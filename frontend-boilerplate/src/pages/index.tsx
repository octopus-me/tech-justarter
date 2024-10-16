import { gql, useQuery } from "@apollo/client";
import { Flex } from "@radix-ui/themes";
import Head from "next/head";

import { HelloWorld } from "@/components";
import { addApolloState, initializeApollo } from "@/lib/apolloClient";
import styles from "@/styles/Home.module.css";

const srcTrailFragment = gql`
  fragment srcTrailFragment on Trail {
    name
    status
    difficulty
  }
`;

const AllTrailsQuery = gql`
  query srcAllTrailsQuery {
    allTrails {
      id
      ...srcTrailFragment
    }
  }
  ${srcTrailFragment}
`;

export default function Home() {
  // TODO: Update to fetch from our mock after the back-end template is done.
  const { data } = useQuery(AllTrailsQuery);
  console.log(data);

  return (
    <>
      <Head>
        <title>Desafio Justarter</title>
      </Head>

      {/* TODO: Add green background */}
      <main className={styles.home}>
        <Flex align="center" justify="center">
          <HelloWorld />
        </Flex>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: AllTrailsQuery,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}
