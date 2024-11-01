import { gql, useQuery } from "@apollo/client";
import { Box, Button, Flex, Strong, Text } from "@radix-ui/themes";
import Head from "next/head";
import { useRouter } from "next/router";
import SubscriptionModal from "@/components/subscriptionModal";
import { useState } from "react";

import logo from '../img/logo-jusbrasil-1200-1200.png';
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
    const movimentos = processo?.movimentos || [];

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Função para abrir o pop up de assinatura
    const handleMovimentoClick = () =>{
        setIsModalOpen(true);
        // alert("Assine para ver mais detalhes!");
        // Depois irei redirecionar para outra coisa
        // router.push("/pagina_desejada")
    };

    const closeModal = () => {
        setIsModalOpen(false);
    }

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

    return (
        <>
            <Head>
                <title>Detalhes do Processo</title>
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

                <Flex direction="column" align="center" style={{padding:"20px"}}>

                    {/*TÍTULO DO PROCESSO*/}
                    <Box style={{width: "100%", maxWidth: "800px", textAlign:"left", marginBottom: "20px"}}>

                        <Flex>
                            <Text size="6" ><Strong>Processo n. {processo.numero} do {processo.tribunal}  </Strong></Text>
                        </Flex>

                        <Flex>
                            <Text size="1" color="gray">Distribuído em: {processo.dataInicio}</Text>
                        </Flex>

                    </Box>

                    {/*LAYOUT PRINCIPAL*/}
                    <Flex direction="row" gap="4" style={{width: "100%", maxWidth: "800px"}}>

                        {/*MOVIMENTAÇÕES - COLUNA DA ESQUERDA */}
                        <Box style={{flex:2, paddingRight: "30px", padding: "30px",background: "#f5f5f5"}}>
                            <Text size="4" style={{marginBottom: "10px"}}>
                                <Strong>Movimentações</Strong>
                            </Text>

                            {movimentos.map((movimento, index) => {
                                const isLastMovimento = index === movimentos.length - 1;
                                return (
                                    <Box
                                        key={movimento.id}
                                        onClick={isLastMovimento ? handleMovimentoClick : null}
                                        style={{
                                            background: "#f5f5f5",
                                            padding: "15px",
                                            marginBottom: "10px",
                                            borderRadius: "4px",
                                            border: "1px solid #ddd",
                                            cursor: isLastMovimento ? "pointer" : "defaul",
                                            filter: isLastMovimento ? "blur(4px)" : "none",
                                            transition: "filter 0.3s ease",
                                        }}
                                    >
                                        <Flex>
                                            <Text size="1" color="gray">{movimento.date}</Text>

                                        </Flex>
                                        <Flex>
                                            <Text size="2" style={{marginTop: "5px"}}>{movimento.description}</Text>
                                        </Flex>
                                    </Box>
                                )
                            })}

                            
                        </Box>
                        
                        {/*DETALHES DO PROCESSO E PARTES ENVOLVIDAS - COLUNA DA DIREITA */}
                        <Box style={{flex: 1, paddingLeft:"20px"}}>

                            {/*DETALHES DO PROCESSO */}
                            <Box
                                style={{
                                    background: "#f5f5f5",
                                    padding: "15px",
                                    marginBottom: "20px",
                                    borderRadius: "4px",
                                    border: "1px solid #ddd"
                                }}>
                                    <Flex>
                                        <Text size="4" style={{marginBottom: "20px"}}>
                                            <Strong>Detalhes do processo</Strong>
                                        </Text>
                                    </Flex>

                                    <Flex>
                                        <Text size="2" style={{marginTop: "5px", marginBottom: "20px"}} color="gray">Comprinteo de Sentença - Honorários Advocatícios</Text>

                                    </Flex>

                                    <Flex>
                                        <Text size="2" color="gray" style={{marginBottom: "20px"}}>Processo Judicial - Rito ordinário</Text>
                                    </Flex>

                                    <Flex>
                                        <Text size="2" color="gray" style={{marginBottom: "20px"}}>Valor da causa: R$ 31.387,90</Text>
                                    </Flex>
                            </Box>
                        
                            {/*PARTES ENVOLVIDAS */}
                            <Box 
                                style={{
                                    background: "#f5f5f5",
                                    padding: "15px",
                                    borderRadius: "4px",
                                    border: "1px solid #ddd"
                                }}>
                                    <Flex>
                                        <Text size="4">
                                            <Strong>Partes envolvidas</Strong>
                                        </Text>
                                    </Flex>

                                    <Flex>
                                        <Text size="2" style={{ marginTop: "5px" }}>Autor: {processo.partes.autor}</Text>
                                    </Flex>

                                    <Flex>
                                        <Text size="2">Réu: {processo.partes.reu}</Text>
                                    </Flex>

                            </Box>
                        </Box>
                    </Flex>

                    <Button onClick={() => alert("Assine para ver mais detalhes!")}>
                        Assine agora
                    </Button>

                    {isModalOpen && <SubscriptionModal onClose={closeModal}/>}
                </Flex>
            </main>
        </>
    )
}