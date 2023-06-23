import React from 'react';
import {Link} from 'react-router-dom'
import { Container, VStack, Input, Heading, Button, Text, Avatar } from '@chakra-ui/react';


const Signup = () => {
  return (
    <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
    <form>
      <VStack
        alignItems={'stretch'}
        spacing={'8'}
        w={['full','96']}
        m={'auto'}
        my={'16'}
      >
        <Heading textAlign={'center'}>VIDEO HUB</Heading>
        <Avatar alignSelf={'center'} boxSize={'28'} />

        <Input type="text" placeholder="Enter Name" required focusBorderColor='purple.500'/>
        <Input type="email" placeholder="Enter Email" required focusBorderColor='purple.500'/>
        <Input type="password" placeholder="Enter Password" required focusBorderColor='purple.500'/>

        <Button colorScheme='purple' type='submit'>Sign Up</Button>

        <Text textAlign={'right'}>Already have an account?  
          <Button colorScheme='purple' p={'2'} variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/signup'}>Log in</Link>
          </Button>
        </Text>
      </VStack>
    </form>
  </Container>
  )
}

export default Signup
