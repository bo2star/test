import { ICustomer } from './Customer';
import * as actionTypes from 'src/store/actionTypes';

interface IAddAction {
    type: typeof actionTypes.ADD_CUSTOMER;
    payload: ICustomer;
}

interface IUpdateAction {
    type: typeof actionTypes.UPDATE_CUSTOMER;
    payload: ICustomer;
}

interface IDeleteAction {
    type: typeof actionTypes.DELETE_CUSTOMER;
    meta: {
        id: number
    }
}

export type IActionTypes = IAddAction | IUpdateAction | IDeleteAction;