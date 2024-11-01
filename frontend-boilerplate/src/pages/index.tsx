// ConsultaProcessualPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flex, Box, Text, Button, Container } from "@radix-ui/themes";
import logo from '../img/logo-jusbrasil-1200-1200.png';
import resumoIcon from '../img/resumo.png'
import historicoIcon from '../img/historico.png'
import conteudoIcon from '../img/conteudo.png'

import { useRouter } from "next/router";

import Image from  'next/image';

export default function ConsultaProcessualPage() {
  // const navigate = useNavigate();

  const router = useRouter();

  const handleConsultaClick = () => {
    router.push({
      pathname: "/consulta"
    });
  };

  const handleCadastroClick = () => {
    alert("Ainda não implementado");
  };

  const handleLoginClick = () => {
    alert("Ainda não implementado");
  };



  return (
    <Container>
      {/* Cabeçalho com o logo e botões */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <div>
          <Flex style={{alignItems: 'center'}}>
            <Image src={logo} alt="Logo" width={50} height={50}/>
            <Text size="5" style={{paddingLeft:"5px"}}>MiniJus</Text>
          </Flex>
        </div>

        <div>
          <Button onClick={handleCadastroClick} variant="outline">Cadastre-se</Button>
          <Button onClick={handleLoginClick} style={{ marginLeft: '10px' }}>Entrar</Button>
        </div>
      </header>

      {/* Seção principal */}
      <Flex direction="column" align="center" style={{ padding: '60px 0', textAlign: 'center' }}>
        <Text size="8">Consulte e entenda processos no MiniJus</Text>
        <Text as="p" size="3" style={{ color: '#666', marginTop: '10px' }}>
          Use o número do processo para consultar
        </Text>

        {/* Barra de pesquisa */}
        <Box style={{ display: 'flex', alignItems: 'center', marginTop: '20px', width: '50%' }}>
          <input
            type="text"
            placeholder="Digite um CPF, nome ou número do processo"
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '8px 0 0 8px',
              border: '1px solid #ddd',
            }}
          />
          <Button onClick={handleConsultaClick} variant="green" style={{ borderRadius: '0 8px 8px 0' }}>
            Consultar Processo
          </Button>
        </Box>

        {/* Ícones e texto abaixo da barra de pesquisa */}
        <Flex justify="center" gap="6" style={{ marginTop: '40px', maxWidth: '800px' }}>
          
          <Flex style={{alignItems: 'center'}}>
            
              <Image src={resumoIcon} alt="resumoIcon" width={40} height={40} />
              
              <Text size="3" style={{paddingRight:"10px"}}>Resumo simplificado dos últimos acontecimentos</Text>
          
          </Flex>

          <Flex style={{alignItems: 'center'}}>
            <Image src={historicoIcon} alt="historicoIcon" width={40} height={40} />

            <Text size="3">Histórico completo com explicações detalhadas</Text>


          </Flex>

          <Flex style={{alignItems: 'center'}}>

            <Image src={conteudoIcon} alt="historicoIcon" width={40} height={40} />

            <Text size="3">Conteúdos de decisões, audiências e documentos</Text>


          </Flex>

        </Flex>
      </Flex>

      {/* Seção de acompanhamento do processo */}
      <Flex direction="column" align="center" style={{ backgroundColor: '#f9f9f9', padding: '60px 20px' }}>
        <Text as="h2" size="6">Acompanhe seu processo de perto</Text>
        <Text as="p" size="3" style={{ color: '#666', marginTop: '10px', maxWidth: '600px' }}>
          Fique ciente de todos os andamentos processuais e entenda cada etapa a partir de explicações simples e acessíveis.
        </Text>
        <Button variant="outline" style={{ marginTop: '20px' }} onClick={handleConsultaClick}>
          Consulte agora
        </Button>
      </Flex>
    </Container>
  );
}
