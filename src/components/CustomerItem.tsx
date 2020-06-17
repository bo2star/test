import React from 'react';
import { Link } from 'react-router-dom';

import { ICustomer } from 'src/types';
import { deleteCustomer } from 'src/store/actions';
import { useDispatch } from 'react-redux';

import { RedButton } from 'src/theme';

interface ICustomerItem {
  customer: ICustomer
}

const CustomerItem: React.FC<ICustomerItem> = (props) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteCustomer(props.customer.id));
  }

  return (
    <tr>
      <td>{ props.customer.firstName }</td>
      <td>{ props.customer.lastName }</td>
      <td>{ props.customer.dob }</td>
      <td>{ props.customer.phoneNumber }</td>
      <td><Link to={{ pathname: '/' + props.customer.id }}>Edit</Link></td>
      <td><RedButton onClick={onDelete}>Delete</RedButton></td>
    </tr>
  )
}

export default CustomerItem;