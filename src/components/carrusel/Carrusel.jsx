import React, { useState } from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import Foto1 from '../assets/imagen1.png';

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

  // Ajusta la posición de los botones según el tamaño de la pantalla
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '10px', md: '40px' });

  // Ajusta la altura del carrusel para diferentes pantallas
  const height = useBreakpointValue({ base: '300px', md: '500px' });
  const width = useBreakpointValue({ base: '100%', md: '80%' });

  const cards = [
    Foto1,
    'https://www.apple.com/newsroom/images/live-action/wwdc-2023/standard/watchos-10/Apple-WWDC23-watchOS-10-5up-230605_big.jpg.large_2x.jpg',
    'https://st2.depositphotos.com/3230977/7864/i/450/depositphotos_78648950-stock-photo-close-up-photos-showing-process.jpg',
  ];

  return (
    <Box
      position={'relative'}
      height={height}  // Altura responsiva
      width={width}    // Ancho responsivo
      maxWidth={'1200px'}
      mx="auto"
      overflow={'hidden'}
    >
      {/* CSS files for react-slick */}
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

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="orange"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        background={'rgba(128, 128, 128, 0.5)'}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>

      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="orange"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
        background={'rgba(128, 128, 128, 0.5)'}
      >
        <BiRightArrowAlt />
      </IconButton>

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={height}  // Altura de cada imagen responsiva
            width="100%"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"  // Las imágenes se ajustarán completamente al contenedor
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default Carrusel;
