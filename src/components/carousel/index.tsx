// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Flex, Image, Link, Stack, Text } from "@chakra-ui/react"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import styles from './styles.module.css'

export function Carousel(){
  return (
    <Box mt="10" pb="10">
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      pagination={{ clickable: true }}
      navigation
      autoplay={{
        delay:3000
      }}
      loop={true}
      slidesPerView={1}
      className={styles.sliderContainer}
      hashNavigation = {true}
    >
        <Flex justifyContent="center" className="slide" mb="35">
          <SwiperSlide className={styles.sliderItem} >
              <Flex dir='column' alignContent="center" justifyContent="center">
                <Stack position="absolute" align="center" >
                  <Text
                    color="whiteAlpha.900"
                    fontSize={40}
                    fontWeight="700"
                    mt="70%"
                    >
                    Europa
                  </Text>
                  <Text fontWeight="700" color="whiteAlpha.900" mt="4">
                    O continente mais antigo
                  </Text>
                </Stack>
            </Flex>
            <Link href="/europe">
              <Image h="450" src="./images/Europe.jpg" w="80%" m="0 auto"/>
            </Link>
          </SwiperSlide>
        </Flex>
        <SwiperSlide className={styles.sliderItem} >
          <Flex dir='column' alignContent="center" justifyContent="center">
            <Stack position="absolute" align="center" >
              <Text
                color="whiteAlpha.900"
                fontSize={40}
                fontWeight="700"
                mt="70%"
                >
                América do Sul
              </Text>
              <Text fontWeight="700" color="whiteAlpha.900" mt="4">
                Conheça os lugares mais procurados
              </Text>
            </Stack>
          </Flex>
          <Link href='/southAmerica'>
            <Image h="450" src="./images/SouthAmerica.jpg" w="80%" m="0 auto"/>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.sliderItem} >
          <Flex dir='column' alignContent="center" justifyContent="center">
            <Stack position="absolute" align="center" >
              <Text
                color="whiteAlpha.900"
                fontSize={40}
                fontWeight="700"
                mt="70%"
                >
                Asia
              </Text>
              <Text fontWeight="700" color="whiteAlpha.900" mt="4">
                Toda a história do continente asiático.
              </Text>
            </Stack>
          </Flex>
          <Image h="450" src="./images/Asia.jpg" w="80%" m="0 auto"/>
        </SwiperSlide>
        <SwiperSlide className={styles.sliderItem} >
          <Flex dir='column' alignContent="center" justifyContent="center">
            <Stack position="absolute" align="center" >
              <Text
                color="whiteAlpha.900"
                fontSize={40}
                fontWeight="700"
                mt="70%"
                >
                Africa
              </Text>
              <Text fontWeight="700" color="whiteAlpha.900" mt="4">
                Viva essa aventura.
              </Text>
            </Stack>
          </Flex>
          <Image h="450" src="./images/Africa.jpg" w="80%" m="0 auto"/>
        </SwiperSlide>
        <SwiperSlide className={styles.sliderItem} >
          <Flex dir='column' alignContent="center" justifyContent="center">
            <Stack position="absolute" align="center" >
              <Text
                color="whiteAlpha.900"
                fontSize={40}
                fontWeight="700"
                mt="70%"
                >
                Oceania
              </Text>
              <Text fontWeight="700" color="whiteAlpha.900" mt="4">
                O continente paradisíaco.
              </Text>
            </Stack>
          </Flex>
          <Image h="450" src="./images/Oceania.jpg" w="80%" m="0 auto"/>
        </SwiperSlide>
        <SwiperSlide className={styles.sliderItem} >
          <Flex dir='column' alignContent="center" justifyContent="center">
            <Stack position="absolute" align="center" >
              <Text
                color="whiteAlpha.900"
                fontSize={40}
                fontWeight="700"
                mt="70%"
                >
                América do Norte
              </Text>
              <Text fontWeight="700" color="whiteAlpha.900" mt="4">
                Vamos às compras.
              </Text>
            </Stack>
          </Flex>
          <Image h="450" src="./images/AmericaNorte.jpg" w="80%" m="0 auto"/>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};