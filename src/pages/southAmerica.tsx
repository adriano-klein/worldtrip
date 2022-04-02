import { Box, Flex, GridItem, HStack, Image, Text, SimpleGrid, extendTheme,useBreakpointValue } from "@chakra-ui/react";
import Cards from "../components/Cards";
import { Header } from "../components/Header";


const breakpoints = {
  sm: '800px',
  md: '1300px',
  lg: '1500px',
  xl: '1800px',
}
const theme = extendTheme({ breakpoints })

export default function SouthAmerica(){
  return(
    <>
      <Header />
      <Flex alignItems="end">
        <Image h="500" w="100%" src="../images/SouthAmerica.jpg"/>
        <Text
          ml="60"
          mb={20}
          fontSize="48"
          fontWeight="700"
          color="whiteAlpha.900"
          position="absolute">América
          do
          Sul</Text>
      </Flex>
      <Flex
        flexDir={{xl:'row',
        lg:'row',
        md:
        'column',
        sm:'column',
        base:
        'column'}}
        mt="10"
        justifyContent="space-between">
        <Box maxW="40%" >
          <Text p="4" textAlign="justify" size="400" lineHeight="7">
          A Europa é, por convenção, um dos seis continentes do mundo. 
          Compreendendo a península ocidental da Eurásia, a Europa geralmente 
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o 
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
          </Text>
        </Box>
        <HStack gap={{xl:'50', md:'30', sm:'20'}} textAlign="center">
          <Flex direction="column">
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
      <SimpleGrid
        columns={4}
        pt={50}
        gridTemplateColumns={{xl:'repeat(4, 1fr)',
        lg:'repeat(3, 1fr)', md: 'repeat(2, 1fr)', sm:'repeat(1, 1fr)'}}
        margin="0 auto"
        >
        <GridItem>
          <Cards
          breakP={breakpoints}
          city="São Paulo"
          country="Brasil"
          image="../images/saopaulo.jpg"
          countryFlag="./images/EnglandAvatar.svg"/></GridItem>
        <GridItem>
          <Cards
          breakP={breakpoints}
          city="Rio de Janeiro"
          country="Brasil"
          image="../images/riodejaneiro.jpg"
          countryFlag="./images/FranceAvatar.svg"/>
          </GridItem>
        <GridItem>
          <Cards
          breakP={breakpoints}
          city="Lima"
          country="Perú"
          image="../images/lima.jpg"
          countryFlag="./images/FranceAvatar.svg"/>
          </GridItem>
        <GridItem>
          <Cards
          breakP={breakpoints}
          city="Buenos Aires"
          country="Argentina"
          image="../images/buenosaires.jpg"
          countryFlag="./images/CzechRepublic.svg"/>
          </GridItem>
        <GridItem>
          <Cards
          breakP={breakpoints}
          city="Montevideo"
          country="Uruguai"
          image="../images/montevideo.jpg"
          countryFlag="./images/NetherlandsAvatar.svg"/>
          </GridItem>
      </SimpleGrid>
    </>

  
  )
}