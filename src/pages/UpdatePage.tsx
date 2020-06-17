import React from 'react';
import { useSelector } from 'react-redux';
import { IState, ICustomer } from 'src/types';
import CustomerView from 'src/components/CustomerView';

const UpdatePage: React.FC<any> = (props) => {
  const customers: ICustomer[] = useSelector((state: IState) => state.customer.customers);
  const customer = customers.filter((customer: ICustomer) => customer.id === parseInt(props.match.params.id))[0]

  return (
    <CustomerView customer={customer} editable={true}/>
  )
}

export default UpdatePage;