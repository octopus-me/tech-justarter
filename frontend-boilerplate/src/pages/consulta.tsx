// src/pages/consulta.tsx
import { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { Button, TextField, Flex, Box, Text, Strong, Container, Select } from "@radix-ui/themes";
import Head from "next/head";
import { set } from "lodash";
import logo from '../img/logo-jusbrasil-1200-1200.png';
import buscaIcon from '../img/busca.svg'
import entendaIcon from '../img/entenda.svg'
import mantenhaseIcon from '../img/mantenhase.svg'

import Image from  'next/image';



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

  const handleCadastroClick = () => {
    alert("Ainda não implementado");
  };

  const handleLoginClick = () => {
    alert("Ainda não implementado");
  };

  const backToHomePage = () => {
    router.push({
      pathname: "/"
    });
  };




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
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
          <div>
            <Flex style={{alignItems: 'center'}}>
              <Image src={logo} alt="Logo" width={50} height={50} onClick={backToHomePage}/>
              <Text size="5" style={{paddingLeft:"5px"}} onClick={backToHomePage}>MiniJus</Text>
            </Flex>
          </div>

          <div>
            <Button onClick={handleCadastroClick} variant="outline">Cadastre-se</Button>
            <Button onClick={handleLoginClick} style={{ marginLeft: '10px' }}>Entrar</Button>
          </div>
        </header>

        

        <Flex 
            direction="column" 
            align="center"
            >
            <Box 
                style={{
            
                    padding: "60px",
                    borderRadius: "8px",
                    width: "700px",
                    textAlign: "center"}}>

                <Flex
                align="center"
                justify="center"
                >

                    <Text size="8" style={{marginBottom:"10px"}}> <Strong>Consulta processual</Strong> </Text>

                </Flex>

                <Flex
                align="center"
                justify="center"
                >

                    <Text size="3" style={{marginBottom: "15px", color:"#8c8c8c"}}>Seleciona um tribunal para listar os processos ou buscar pelo número unificado</Text>
                    
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

        <Flex 
          style={{paddingTop:"70px", paddingBottom:"40px"}}                 
          align="center"
          justify="center">
            <Text size="6"> <Strong>Como consultar um processo no MiniJus?</Strong></Text>
        </Flex>


        {/*Sessão de 'Como consultar um processo no minijus'*/}
        <Flex direction="row" 
              style={{ 
                justifyContent: "space-between",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "0 20px",
                gap: "20px"}}>

            <Flex direction="column" style={{alignItems:'center', textAlign: 'center'}}>
              <Flex >

                <Image src={buscaIcon} alt="buscaIcon"/>

              </Flex>

              <Text><Strong>Busca otimizada por processos</Strong></Text>

              <Text style={{color:"#666666"}}>Encontre processos número, utilizando a Consulta Processual do MiniJus</Text>

            </Flex>

            <Flex direction="column" style={{alignItems:'center', textAlign: 'center'}}>
              <Flex>

                <Image src={entendaIcon} alt="entendaIcon"/>

              </Flex>
              <Text><Strong>Entenda o que está acontecendo</Strong></Text>
              <Text style={{color:"#666666"}}>Acesse todas as movimentações, documentos e outras informações do processo</Text>
            </Flex>
            
            <Flex direction="column" style={{alignItems:'center', textAlign: 'center'}}>
              <Flex >

                <Image src={mantenhaseIcon} alt="mantenhaseIcon"/>

              </Flex>
              <Text><Strong>Mantenha-se atualizado sobre o processo</Strong></Text>

              <Text style={{color:"#666666"}}>Não perca nada, assine para receber notificações a cada novidade do processo</Text>

            </Flex>

        </Flex>
      </main> 
    </>
  );
}
