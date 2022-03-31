import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react"

interface showAirplaneProps{
  isResponsive: boolean;
}

export function Banner({isResponsive}:showAirplaneProps){
  return(
    <Flex
      w="100%"
      bgImage="url('../images/Background.svg')"
      h="335px"
      justifyContent="space-between"
      mb="70"
      >
      {isResponsive ? 
        <Box>
          <Text
            ml={{base:'10'}}
            mt='20'
            fontSize={{base:'50', md:'50'}}
            color='whiteAlpha.900'
            lineHeight={{base: '1.3'}}
            >
              5 Continentes,
            <br
            />infinitas
            possibilidades.
          </Text>
          <Text  position="absolute" ml={{base:'10'}} mt="15" color="whiteAlpha.900">
            Chegou a hora de você tirar do papel a viagem que você <br/> sempre sonhou.
          </Text>
        </Box> : 
        <Flex
          flexDir='column'textAlign="left"
          margin="0 auto"
          justify="center"
          >
          <Text
            fontSize={{base:'40', md:'60', sm:'50'}}
            color='whiteAlpha.900'
            lineHeight={{base: '1.3'}}
            ml={{base: '1', md:'20'}}
            >
              5 Continentes,
            <br
            />infinitas
            possibilidades.
          </Text>
          <Text ml={{base: '1', md:'20'}} mt="15" color="whiteAlpha.900">
            Chegou a hora de você tirar do papel a viagem que você <br/> sempre sonhou.
          </Text>
        </Flex>
    }
      {isResponsive ? <Box mr="30" mt="75"><Image src="../images/Airplane.svg"/></Box> : null}
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