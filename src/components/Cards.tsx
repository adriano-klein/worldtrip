import { Box, Flex, Image, Text } from "@chakra-ui/react";


interface CardProps{
  city: string;
  country: string;
  image: string;
  countryFlag: string;
}

export default function Cards({city, country, image, countryFlag}: CardProps) {
  return(
    <Box  maxW="256" borderWidth='1px' borderRadius='lg' mb="10">
      <Image borderTopRadius="8" src={image} />
      <Flex>
        <Box p="5">
          <Text mb="4" fontSize="xl" fontWeight="600"> {city} </Text>
          <Text fontSize="14"> {country} </Text>
        </Box>
        <Flex m="0 auto">
          <Image src={countryFlag} />
        </Flex>
      </Flex>
    </Box>
  )
}