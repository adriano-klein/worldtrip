import { Box, Flex, GridItem, HStack, Image, Text, SimpleGrid } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Cards from "../components/Cards";
import { Header } from "../components/Header";
import { api } from "../services/api";

interface continentsProps{
  data: Object
}

export default function SouthAmerica({data}:continentsProps){
  return(
    <>
      <Header />
      <Flex
        alignItems={{base:'center',
        md:'end',
        sm:'center',
        lg:'end',
        xl:'end'}}
        justifyContent={{base: 'center', lg:'start', xl:'start', md:'left'}}
        >
        <Image h="500" w="100%" src="../images/SouthAmerica.jpg" alt="América do Sul"/>
        <Text
          fontSize="48"
          fontWeight="700"
          color="whiteAlpha.900"
          position="absolute"
          marginLeft={{base:'0',lg:'120', xl:'120', sm: '0', md:'120'}}
          marginBottom={{base:'0',lg:'20', xl:'20',sm:'0', md:'20'}}
          >América
          do
          Sul</Text>
      </Flex>
      <Flex
        flexDir={{xl:'row',
        lg:'row',
        md:
        'row',
        sm:'column',
        base:
        'column'}}
        mt="10"
        justifyContent="space-between"
        >
        <Box maxW={{xl:'40%', lg:"40%", md:'40%', sm:'80%'}} margin={{base: '0 auto', sm:'0 auto'}}>
          <Text p="4" textAlign="justify" size="400" lineHeight="7">
          {data['América do Sul'].desc}
          </Text>
        </Box>
        <HStack
          margin={{
            base:'0 auto',
            sm:'0 auto'}}
          gap={{
            xl:'50',
            lg:'50',
            md:'30', 
            sm:'30', 
            base:'30'}}
          textAlign="center">
          <Flex direction="column">
            <Text color="yellow.400" fontSize="45" fontWeight="600">{data['América do Sul'].totalCountries}</Text>
            <Text fontWeight="600">Países</Text>
          </Flex>
          <Flex ml={48} direction="column">
            <Text color="yellow.400" fontSize="45" fontWeight="600">{data['América do Sul'].totalLanguages}</Text>
            <Text fontWeight="600">Línguas</Text>
          </Flex>
          <Flex ml={48} direction="column">
            <Text color="yellow.400" fontSize="45" fontWeight="600">{data['América do Sul'].totalCities}</Text>
            <Text fontWeight="600">Cidades +100</Text>
          </Flex>
        </HStack>
      </Flex>
      <Text
        fontWeight="700"
        color="gray.600"
        fontSize={25}
        marginLeft={{sm:'9%', md:'5%',lg:'5', base:'2%'}}
        marginTop='5'
        >
          Cidades +100
        </Text>
      <SimpleGrid
        columns={4}
        pt='5'
        gridTemplateColumns={{xl:'repeat(4, 1fr)',
        lg:'repeat(4, 1fr)', md: 'repeat(3, 1fr)', sm:'repeat(2, 1fr)'}}
        margin="0 auto"
        gap="10"
        >
        {
          data['América do Sul'].places.map(place => (
            <GridItem key={place.name}>
              <Cards
              alt={place.name}
              city={place.name}
              country={place.country}
              image={place.imageUrl}
              countryFlag={place.avatar}
              pageUrl="/"
              />
            </GridItem>
          ))
        }
      </SimpleGrid>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const response = await api.get("continents");
  
  return{
    props: {
      data: response.data[0]
    }
  }  
}