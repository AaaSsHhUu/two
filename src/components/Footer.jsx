import {
  Box,
  Stack,
  VStack,
  Heading,
  HStack,
  Button,
  Input,
  Text
} from '@chakra-ui/react';
import { AiOutlineSend, AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import React from 'react';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={4}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
            Buy Premium To get Updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email here"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={["none","1px solid white"]} >  {/*["small screen","big screen"] */}
            <Heading textAlign={'center'}  textTransform={'uppercase'}>
                Video Hub
            </Heading>
            <Text>All right received</Text>
        </VStack>{' '}

        <VStack w={'full'} >
            <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
            <Button variant={'link'} colorScheme={'white'} >
                <a target={'_blank'} href="www.youtube.com"><AiFillYoutube size={'30'}/></a>
                <p>Youtube</p>
            </Button>
            <Button variant={'link'} colorScheme={'white'} >
                <a target={'_blank'} href="www.instagram.com"><AiFillInstagram size={'30'}/></a>
                <p>Instagram</p>
            </Button>
            <Button variant={'link'} colorScheme={'white'} >
                <a target={'_blank'} href="www.github.com"><AiFillGithub size={'30'}/></a>
                <p>Github</p>
            </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
