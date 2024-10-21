import { useState} from 'react';
import { Box, Button, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';
import Slider from 'react-slick';
import fondocarrusel from '../assets/fondocarrusel.jpg';
import IphonePng from '../assets/plancanjeimg11.png'; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carrusel = () => {
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '10px', md: '40px' });
  const height = useBreakpointValue({ base: '100vh', md: '100vh' });  

  const cards = [
    fondocarrusel,
  ];

  return (
    <Box
      position={'relative'}
      height={height}  
      width="100%"
      overflow={'hidden'}
    >
      
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        aria-label="left-arrow"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
        background={'transparent'}
        fontSize={30}
      >
        <FaChevronLeft />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        background={'transparent'}
        fontSize={30}
      >
        <FaChevronRight />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={height}
            width="100%"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          >
            {index === 0 && (
              <Box
                position="absolute"
                top="35%"
                left="15%"
                zIndex={3}
                color="white"
                textAlign="left"
              >
                <Text fontSize="5xl" fontWeight="bold" fontFamily='"Oswald", sans-serif'>
                  El iPhone que quieres
                </Text>
                <Text fontSize="26" fontWeight="bold" >
                  Experimenta la mejor tecnología de Apple
                </Text>
                <Button background="grey" mt={4} colorScheme="teal" size="lg" >
                  Comprar ahora
                </Button>
              </Box>
            )}
            
            {index === 0 && (
              <Box
                position="absolute"
                bottom="0"
                right="5%"
                top="7"
                zIndex={3}
                width={{ base: '850px', md: '650px' }}
              >
                <img src={IphonePng} alt="iPhone" />
              </Box>
            )}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carrusel;