import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { Button, Flex, Text } from "@radix-ui/themes";
import Head from "next/head";

import { HelloWorld } from "@/components";
import { UserCard } from "@/components/user-card/user-card";
import { addApolloState, initializeApollo } from "@/lib/apolloClient";
import styles from "@/styles/Home.module.css";

const UserFragment = gql`
  fragment userFragment on User {
    email
    name
    age
  }
`;

const exampleQuery = gql`
  query user($userId: ID!) {
    getUserQuery(id: $userId) {
      id
      ...userFragment
    }
  }
  ${UserFragment}
`;

interface HomeProps {
  variables: {
    userId: string;
  };
}

export default function Home(props: HomeProps) {
  const { variables } = props;
  const { data } = useQuery(exampleQuery, {
    variables,
  });

  const [loadUser, { loading: loadingNewUser, data: newUser }] =
    useLazyQuery(exampleQuery);

  const onLoadUser = () => {
    loadUser({
      variables: {
        userId: "2",
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  const user = data?.getUserQuery;

  return (
    <>
      <Head>
        <title>Desafio Justarter</title>
      </Head>

      <main className={styles.home}>
        <Flex align="center" justify="center" direction={"column"} gap="6">
          <HelloWorld />
          <Button onClick={onLoadUser}>Carregar outro usuário</Button>
          <UserCard user={user} />
          {loadingNewUser && <Text>Carregando...</Text>}
          {newUser?.getUserQuery && <UserCard user={newUser.getUserQuery} />}
        </Flex>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();
  const variables = {
    userId: "1",
  };

  await apolloClient.query({
    query: exampleQuery,
    variables,
  });

  return addApolloState(apolloClient, {
    props: {
      variables,
    },
  });
}
