import { Flex, Grid, Text, GridItem, HStack, useBreakpointValue, Box } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/carousel";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";



export default function Home() {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />
      <Banner isResponsive={isDesktop} />
        <Grid
          templateColumns={isDesktop ? 'repeat(5, 1fr)' : 'repeat(2, 1fr)'}
          width='100%'
          maxWidth='1200'
          margin='0 auto'
          justifyItems={isDesktop ? null : 'center'}
          >
          <Categories isResponsive={isDesktop} address="../images/Drink.svg" name="vida noturna" />
          <Categories isResponsive={isDesktop} address="../images/Beach.svg" name="praia" />
          <Categories isResponsive={isDesktop} address="../images/Building.svg" name="moderno" />
          <Categories isResponsive={isDesktop} address="../images/Institution.svg" name="clássico" />
          <Categories isResponsive={isDesktop} address="../images/Globe.svg" name="e mais..." />
        </Grid>
        <Text textStyle='h1'
          align="center"
          mt="10"
          fontSize={30}>
            Vamos nessa?
          <br/>Então escolha seu continente
          </Text>
          <Carousel />
    </Box>
  )
}
