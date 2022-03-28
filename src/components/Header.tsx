import { Box, Flex, Image } from "@chakra-ui/react";

export function Header(){
  return(
    <Flex as='header' dir="column" w="100%" h='20' maxWidth={1440} align="center" margin="0 auto">
      <Image src="../images/Logo.svg" alt="Logo World Trip" boxSize="160" margin="0 auto"/>
    </Flex>
  )
}