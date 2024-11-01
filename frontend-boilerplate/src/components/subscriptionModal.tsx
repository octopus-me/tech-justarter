import { useQuery, gql } from "@apollo/client";
import { Flex, Box, Text, Strong, Button, Container } from "@radix-ui/themes";
import logo from '../img/logo-jusbrasil-1200-1200.png';
import Image from  'next/image';

// Defina a query GraphQL que vamos usar para buscar os dados
const GET_BOX_LOCK_QUERY = gql`
  query GetBoxLock {
    getBoxLockQuery {
      header {
        title
        subtitle
      }
      body {
        benefits
        price {
          current
          next
          period
        }
        button {
          label
        }
      }
      footer {
        text
      }
    }
  }
`;

export default function SubscriptionModal({ onClose }) {
  // Use o hook `useQuery` do Apollo Client para buscar os dados
  const { data, loading, error } = useQuery(GET_BOX_LOCK_QUERY);

  if (loading) return <Text>Carregando...</Text>;
  if (error) return <Text>Erro ao carregar dados: {error.message}</Text>;

  const boxLockData = data?.getBoxLockQuery;

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
      }}
    >
      <Container
        size="3"
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "40px",
          width: "400px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          position: "relative",
          maxHeight:"800px"
        }}
      >
        <Button
          onClick={onClose}
          variant="ghost"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
        >
         x 
        </Button>

        <Flex direction="column" align="center" gap="4">
        <Image src={logo} alt="Logo" width={50} height={50} style={{ marginBottom: "10px" }} />



          <Text size="6">
            <Strong>{boxLockData.header.title}</Strong>
          </Text>

          <Text size="3" style={{ textAlign: "center", color: "#555" }}>
            {boxLockData.header.subtitle}
          </Text>

          <Box style={{ padding: "0", margin: "20px 0", listStyle: "none" }}>
            {boxLockData.body.benefits.map((benefit, index) => (
              <Flex key={index} align="center" gap="2" style={{ marginBottom: "10px", color: "#333" }}>
                ✔️ <Text size="2">{benefit}</Text>
              </Flex>
            ))}
          </Box>

          <Text size="3" style={{ color: "#555" }}>
            de <span style={{ textDecoration: "line-through" }}>{boxLockData.body.price.next}</span> por:
          </Text>

          <Text size="8" as="p" style={{ color: "#333", fontWeight: "bold", margin: "10px 0" }}>
            {boxLockData.body.price.current}
          </Text>

          <Text size="2" style={{ color: "#555", marginBottom: "20px" }}>
            {boxLockData.body.price.period}
          </Text>

          <Button variant="solid"  size="large" style={{ width: "100%" }}>
            {boxLockData.body.button.label}
          </Button>

          <Text size="1" style={{ color: "#888", marginTop: "15px", textAlign: "center" }}>
            {boxLockData.footer.text}
          </Text>
        </Flex>
      </Container>
    </Flex>
  );
}
