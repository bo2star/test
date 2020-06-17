import React from 'react';
import { useSelector } from 'react-redux';

import { ICustomer, IState } from 'src/types';
import CustomerItem from 'src/components/CustomerItem';
import { Table } from 'src/theme';

const CustomerList: React.FC = () => {
  const customers: ICustomer[] = useSelector((state: IState) => state.customer.customers);

  return (
    <div>
      <Table>
        <tbody>
          {
            customers.map((customer: ICustomer) => {
              return (
                <CustomerItem customer={ customer } key={ customer.id }/>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default CustomerList;