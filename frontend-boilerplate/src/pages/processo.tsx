import { gql, useQuery } from "@apollo/client";
import { Button, Flex, Strong, Text } from "@radix-ui/themes";
import Head from "next/head";
import { useRouter } from "next/router";

const GET_PROCESS = gql`
query GetLawsuitQuery($numero: String!) {
  getLawsuitQuery(numero: $numero) {
    id
    tribunal
    dataInicio
    numero
    movimentos {
      date
      description
      id
    }
    partes {
      autor
      reu
    }

  }
}
`;


export default function Processo(){
    const router = useRouter();
    const {numero} = router.query;

    const {data, loading, error} = useQuery(GET_PROCESS,{
        variables: {numero},
        skip: !numero,
    });

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar o processo: {error.message}</p>;

    const processo = data?.getLawsuitQuery;

    return (
        <>
            <Head>
                <title>Detalhes do Processo</title>
            </Head>
            <main>
                <Flex direction="column" gap="4">
                    <Text size="5"><Strong>Processo n. {processo.numero} do {processo.tribunal}  </Strong></Text>
                    <Text size="1">Distribuído em: {processo.dataInicio}</Text>
                    
                    <Text>Autor: {processo.partes.autor}</Text>
                    <Text>Réu: {processo.partes.reu}</Text>

                    <Text>Movimentações:</Text>
                    {processo.movimentos.map((movimento, index) => (
                    <Flex key={index} direction="column">                        
                        <Text size="1">Data: {movimento.date}</Text>

                        <Text> {movimento.description}</Text>
                    </Flex>
                    ))}

                    <Button onClick={() => alert("Assine para ver mais detalhes!")}>
                        Assine agora
                    </Button>
                </Flex>
            </main>
        </>
    )
}