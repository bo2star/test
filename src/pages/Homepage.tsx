import React from 'react';
import { ICustomer } from 'src/types';
import CustomerView from 'src/components/CustomerView';
import CustomerList from 'src/components/CustomerList';

const Homepage: React.FC = () => {
  return (
    <div>
      <CustomerView customer={ {} as ICustomer } editable={ false } />
      <CustomerList />      
    </div>
  )
}

export default Homepage;