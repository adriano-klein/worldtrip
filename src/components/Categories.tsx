import { Box, Flex, GridItem, Image, Text } from "@chakra-ui/react";

interface CategoriesProps{
  address: string;
  name: string;
}

export function Categories({address, name}:CategoriesProps){
  return(
    <GridItem>
      <Flex
        mt="35"
        ml="58"
        direction="column"
        justifyContent="end"
        alignItems="center"
        >
        <Image src={address} mb="3" w="50"/>
        <Text fontWeight="bold">{name}</Text>
      </Flex>
    </GridItem>
  )
}