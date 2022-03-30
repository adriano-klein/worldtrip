import { Box, Flex, Grid, GridItem, HStack, Image, Text, SimpleGrid } from "@chakra-ui/react";
import Cards from "../components/Cards";
import { Header } from "../components/Header";

export default function Europe(){
  return(
    <>
      <Header />
      <Flex alignItems="end">
        <Image h="500" w="100%" src="../images/Europe.jpg"/>
        <Text ml="60" mb={20} fontSize="48" fontWeight="700" color="whiteAlpha.900" position="absolute">Europa</Text>
      </Flex>
      <Flex flexDirection="row" padding={20}>
        <Box maxW="40%" ml="140">
          <Text textAlign="justify" size="400" lineHeight="7">
          A Europa é, por convenção, um dos seis continentes do mundo. 
          Compreendendo a península ocidental da Eurásia, a Europa geralmente 
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o 
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
          </Text>
        </Box>
        <HStack gap={75} textAlign="center">
          <Flex ml={48} direction="column">
            <Text color="yellow.400" fontSize="45" fontWeight="600">50</Text>
            <Text fontWeight="600">Países</Text>
          </Flex>
          <Flex ml={48} direction="column">
            <Text color="yellow.400" fontSize="45" fontWeight="600">60</Text>
            <Text fontWeight="600">Línguas</Text>
          </Flex>
          <Flex ml={48} direction="column">
            <Text color="yellow.400" fontSize="45" fontWeight="600">27</Text>
            <Text fontWeight="600">Cidades +100</Text>
          </Flex>
        </HStack>
      </Flex>
      <Text ml="60" fontWeight="700" color="gray.600" fontSize={25}>Cidades +100</Text>
      <SimpleGrid columns={4} padding={10} justifyContent="center" maxW="1440" margin="0 auto">
        <GridItem> <Cards city="Londres" country="Reino Unido" image="../images/London.jpg" countryFlag="./images/EnglandAvatar.svg"/></GridItem>
        <GridItem> <Cards city="Paris" country="França" image="../images/France.jpg" countryFlag="./images/FranceAvatar.svg"/> </GridItem>
        <GridItem> <Cards city="Rome" country="Itália" image="../images/Italy.jpg" countryFlag="./images/ItalyAvatar.svg"/> </GridItem>
        <GridItem> <Cards city="Praga" country="República Tcheca" image="../images/CzechRepublic.jpg" countryFlag="./images/CzechRepublic.svg"/> </GridItem>
        <GridItem> <Cards city="Amsterdã" country="Holanda" image="../images/Netherlands.jpg" countryFlag="./images/NetherlandsAvatar.svg"/> </GridItem>
      </SimpleGrid>
    </>

  
  )
}