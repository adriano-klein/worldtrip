import { Box, Flex, Image, Text } from "@chakra-ui/react"

export function Banner(){
  return(
    <Flex
      w="100%"
      bgImage="url('../images/Background.svg')"
      h="335px"
      justifyContent="space-between"
      mb="70"
      >
      <Box>
        <Text
          ml={200}
          mt="55"
          fontSize={36}
          color='whiteAlpha.900'
          
          >5
          Continentes,
          <br
          />infinitas
          possibilidades.
        </Text>
        <Text position="absolute" ml={200} mt="15" color="whiteAlpha.900">
          Chegou a hora de você tirar do papel a viagem que você <br/> sempre sonhou.
        </Text>
      </Box>
      <Box mr="64" mt="75">
        <Image src="../images/Airplane.svg"/>
      </Box>
    </Flex>
  )
}

<Flex>
        <Box justifyContent="right">
          <Text
            ml="20"
            mt="55"
            fontSize={36}
            color='whiteAlpha.900'
            position="absolute"
            >5
            Continentes,
            <br
            />infinitas
            possibilidades.</Text>
        </Box>
        <Box position="absolute">
          <Image src="../images/Airplane.svg"/>
        </Box>
        <Image src="../images/Background.svg" w="100%" h="335px"/>
      </Flex>
      {/* <Flex position="absolute" dir="column" align="center">
        <Text
          ml="20"
          mt="55"
          fontSize={36}
          color='whiteAlpha.900'
          >5
          Continentes,
          <br
          />infinitas
          possibilidades.</Text>
      </Flex> */}