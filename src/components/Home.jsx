import { Box, Container, Heading, Image, Stack,Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p={'16'} direction = {["column","row"]}> 
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid black'}
          m={"auto"}
        >
          Services
        </Heading>

        <Stack h={"full"} p={"4"} alignItems = {"center"} direction={['column','row']}>
            <Image src={img5} filter={"hue-rotate(-130deg)"} h={['40','400']} />
            <Text letterSpacing={"widest"} lineHeight={"190%"} p={['4','16']} textAlign={'center'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, cum? Atque facere provident soluta architecto enim sapiente a amet non minima ex fuga cupiditate, sint delectus dignissimos eveniet ipsum suscipit error, ipsam ab deserunt! Nemo vitae ab expedita modi minus voluptatum architecto. Maxime repellendus illo voluptates facilis totam illum sit?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, cum? Atque facere provident soluta architecto enim sapiente a amet non minima ex fuga cupiditate, sint delectus dignissimos eveniet ipsum suscipit error, ipsam ab deserunt! Nemo vitae ab expedita modi minus voluptatum architecto. Maxime repellendus illo voluptates facilis totam illum sit?
            </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={2000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch The Future
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming is Future
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          PLay in VR
        </Heading>
      </Box>
    </Carousel>
  );
};
export default Home;
