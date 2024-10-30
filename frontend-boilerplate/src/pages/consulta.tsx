// src/pages/consulta.tsx
import { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { Button, TextField, Flex, Box, Text, Strong, Container, Select } from "@radix-ui/themes";
import Head from "next/head";
import { set } from "lodash";

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

export default function Consulta() {
  const [numeroProcesso, setNumeroProcesso] = useState("");
  const [tribunal, setTribunal] = useState("");
  const [loadProcess, { data, loading, error }] = useLazyQuery(GET_PROCESS);
  const router = useRouter();




  const handleSearch = () => {
    loadProcess({
      variables: { numero: numeroProcesso },
      onCompleted: () => {
        router.push({
          pathname: "/processo",
          query: { numero: numeroProcesso },
        });
      },
    });
  };

  return (
    <>
      <Head>
        <title>Consulta Processual</title>
      </Head>


       <main>
        <Flex 
            direction="column" 
            align="center"
            justify="center"
            style={{minHeight: "100vh"}}
            gap="4">
            <Box 
                style={{
                    background:"#e0e0e0",
                    padding: "60px",
                    borderRadius: "8px",
                    width: "700px",
                    textAlign: "center"}}>

                <Flex>

                    <Text size="6" style={{marginBottom:"10px"}}> <Strong>Buscar</Strong> </Text>

                </Flex>

                <Flex>

                    <Text size="2" style={{marginBottom: "15px"}}>Seleciona um tribunal para listar os processos ou buscar pelo número unificado</Text>
                    
                </Flex>


                <Flex direction="row" gap="2" align="center">
                    <Select.Root onValueChange={(value) =>setTribunal(value)}>
                        <Select.Trigger
                            placeholder="Tribunal" style={{width: "250px"}}/>
                            <Select.Content>
                                <Select.Item value="TJCE">TJCE</Select.Item>
                                <Select.Item value="TJAL">TJAL</Select.Item>
                            </Select.Content>

                    </Select.Root>
                    <TextField.Root
                        placeholder="Número de processo"
                        value={numeroProcesso}
                        onChange={(e) => setNumeroProcesso(e.target.value)}
                        style={{width: "300px"}}/>

                    <Button onClick={handleSearch} disabled={loading} style={{height:"40px"}}>Buscar</Button>




                </Flex>


                {error && <p>Erro ao buscar processo: {error.message}</p>}

            </Box>

        </Flex>
      </main> 
    </>
  );
}
