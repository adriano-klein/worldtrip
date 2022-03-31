import { Flex, GridItem, Image, Text } from "@chakra-ui/react";

interface CategoriesProps{
  address: string;
  name: string;
  isResponsive: boolean;
}

export function Categories({address, name, isResponsive}:CategoriesProps){
  if (isResponsive) {
    return(
      <GridItem>
        <Flex
          mt="35"
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
  return(
    <GridItem >
      <Flex
        mt="35"
        direction="row"
        justifyContent="end"
        alignItems="center"
        >
        <Image src="./images/Circle.svg" w="50" mr="3"/>
        <Text fontWeight="bold" fontSize="24">{name}</Text>
      </Flex>
    </GridItem>
  )
}