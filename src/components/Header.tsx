import { Button, Flex, Image, Link, Switch, Text, useColorMode } from "@chakra-ui/react";

export function Header(){
  const { toggleColorMode, colorMode } = useColorMode()
  return(
    <Flex as='header' dir="column" w="100%" h='20' maxWidth={1440} align="center">
      <Link href="/"  margin="0 auto">
        <Image src="../images/Logo.svg" alt="Logo World Trip" boxSize="160" margin="0 auto"/>
      </Link>
      <Button as='button' onClick={toggleColorMode} ml="4">
        Modo {colorMode === 'light' ? 'Escuro' : 'Claro'}
      </Button>
    </Flex>
  )
}