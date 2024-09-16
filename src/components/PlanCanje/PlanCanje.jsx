import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import planCanje from '../assets/plancanje.png';

export const PlanCanje = () => {
  return (
    <Box textAlign="center" my={8} px={4}>
      <Image 
        src={planCanje} 
        alt="Plan Canje" 
        width={{ base: "80%", md: "60%" }}
        height="auto" 
        objectFit="contain" 
        mx="auto"
        my={4}
        sx={{
          animation: 'slideIn 1s ease-out'
        }}
      />
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
};

export default PlanCanje;

