import { ICustomer } from './Customer';

export interface IState {
    customer: ICustomerState;
}

export interface ICustomerState {
    customers: ICustomer[];
}