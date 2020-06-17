import React, { useState } from 'react';
import { useDispatch, useStore } from 'react-redux';

import { addCustomer, updateCustomer } from 'src/store/actions';
import { ICustomer } from 'src/types';
import { Link } from 'react-router-dom';
import { Button, FormItem, FixedLabel } from 'src/theme';

interface ICustomerView {
    editable: boolean;
    customer: ICustomer;
}

const CustomerView: React.FC<ICustomerView> = (props) => {
  const [isEdit] = useState(props.editable);
  const [firstName, setFirstName] = useState(isEdit ? props.customer.firstName : '');
  const [lastName, setLastName] = useState(isEdit ? props.customer.lastName : '');
  const [dob, setDob] = useState(isEdit ? props.customer.dob : '');
  const [phoneNumber, setPhoneNumber] = useState(isEdit ? props.customer.phoneNumber : '');

  const store = useStore();
  const dispatch = useDispatch();

  const onInsert = () => {
    const customers: ICustomer[] = store.getState().customer.customers;
    const id = customers.length ? customers[customers.length - 1].id + 1 : 1;
    const customer = {
      id,
      firstName,
      lastName,
      dob,
      phoneNumber
    }

    dispatch(addCustomer(customer));
  }

  const onUpdate = () => {
    const id = props.customer.id;
    const customer: ICustomer = {
      id,
      firstName,
      lastName,
      dob,
      phoneNumber
    }

    dispatch(updateCustomer(customer));
  }

  return (
    <div>
      <FormItem>
        <FixedLabel htmlFor="">First Name</FixedLabel>
        <input type="text" value={ firstName } onInput={(e: any) => setFirstName(e.target.value)}/>
      </FormItem>
      <FormItem>
        <FixedLabel htmlFor="">Last Name</FixedLabel>
        <input type="text" value={ lastName } onInput={(e: any) => setLastName(e.target.value)}/>
      </FormItem>
      <FormItem>
        <FixedLabel htmlFor="">Date of Birth</FixedLabel>
        <input type="text" value={ dob } onInput={(e: any) => setDob(e.target.value)}/>
      </FormItem>
      <FormItem>
        <FixedLabel htmlFor="">Phone Number</FixedLabel>
        <input type="text" value={ phoneNumber } onInput={(e: any) => setPhoneNumber(e.target.value)}/>
      </FormItem>
      <FormItem>
        <Button onClick={ props.editable ? onUpdate : onInsert }>{props.editable ? 'Update' : 'Submit'}</Button>
        {
          props.editable ? <Link to='/'>Cancel</Link> : ''
        }
      </FormItem>
    </div>
  )
}

export default CustomerView;