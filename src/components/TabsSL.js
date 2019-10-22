//libraries
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 
'react-tabs';

//components 
import SignUpForm from 'components/SignUp';
import LoginForm from 'components/Login';

const TabsSL = () => {
  return (
      <Tabs className='control tabs box'>
        <TabList>
          <Tab>Sign Up</Tab>
          <Tab>Login</Tab>
        </TabList>
        <TabPanel>
          <SignUpForm />
        </TabPanel>
        <TabPanel>
          <LoginForm />
        </TabPanel>
      </Tabs>
  )
}

export default TabsSL
