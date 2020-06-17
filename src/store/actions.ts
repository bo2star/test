import { IActionTypes, ICustomer } from 'src/types'
import * as actionTypes from './actionTypes'

export const addCustomer = (customer: ICustomer): IActionTypes => ({
    type: actionTypes.ADD_CUSTOMER,
    payload: customer
});

export const updateCustomer = (customer: ICustomer): IActionTypes => ({
    type: actionTypes.UPDATE_CUSTOMER,
    payload: customer
});

export const deleteCustomer = (id: number): IActionTypes => ({
    type: actionTypes.DELETE_CUSTOMER,
    meta: { id }
});