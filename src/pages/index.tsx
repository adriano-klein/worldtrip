import { Flex, Grid, Text, GridItem, HStack } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/carousel";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
        <Grid
          templateColumns='repeat(5,
          1fr)'
          width='100%'
          maxWidth='1200'
          margin='0 auto'
          >
          <Categories address="../images/Drink.svg" name="vida noturna" />
          <Categories address="../images/Beach.svg" name="praia" />
          <Categories address="../images/Building.svg" name="moderno" />
          <Categories address="../images/Institution.svg" name="clássico" />
          <Categories address="../images/Globe.svg" name="e mais..." />
        </Grid>
        <Text
          align="center"
          mt="10"
          fontSize={30}
          color="gray.600">Vamos
          nessa?
          <br/>Então escolha seu continente
          </Text>
          <Carousel />
    </>
  )
}
