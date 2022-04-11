import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";

interface CardProps{
  city: string;
  country: string;
  image: string;
  countryFlag: string;
  pageUrl: string
}

export default function Cards({city, country, image, countryFlag, pageUrl}: CardProps) {
  return(
    <Link href={pageUrl} >
      <Box
        maxW={{base:'90%',sm:'300', md:'300', lg:'300'}}
        borderWidth='1px'
        borderRadius='lg'
        m="0 auto"
        >
        <Image borderTopRadius="8" src={image} />
        <Flex padding={5} flexDirection="row" justifyContent="space-between">
          <Box>
            <Text
              mb="2"
              fontSize={{
              base:'1.5rem'
              }}
              fontWeight="600">
              {city}
              </Text>
            <Text fontSize={{ base:'1rem' }}> {country} </Text>
          </Box>
          <Flex m="right" >
            <Image  
              height={{xl:"45",
              lg:"45",
              md:"45",
              sm:"45",
              base:"20"}}
              src={countryFlag} />
          </Flex>
        </Flex>
      </Box>
    </Link>
  )
}