import { Container, VStack, Input, Heading, Button, Text } from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full','96']}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'}>Welcome Back</Heading>
          <Input type="email" placeholder="Enter Email" required focusBorderColor='purple.500'/>
          <Input type="password" placeholder="Enter Password" required focusBorderColor='purple.500'/>

          <Button variant={'link'} alignSelf={'end'}>
            <Link to={'/forgetpassword'}>Forget password</Link>
          </Button>

          <Button colorScheme='purple' type='submit'>Log In</Button>

          <Text textAlign={'right'}>New User?  
            <Button colorScheme='purple' p={'2'} variant={'link'} alignSelf={'flex-end'}>
                <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
