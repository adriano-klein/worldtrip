import { Box, Flex, Image, Text } from "@chakra-ui/react";


interface CardProps{
  city: string;
  country: string;
  image: string;
  countryFlag: string;
  breakP: Object;
}

export default function Cards({city, country, image, countryFlag, breakP}: CardProps) {
  return(
    <Box
      paddingBottom="10"
      maxW="300"
      borderWidth='1px'
      borderRadius='lg'
      m="0 auto"
      >
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