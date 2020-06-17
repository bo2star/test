import { IActionTypes, ICustomer, ICustomerState } from 'src/types'
import * as actionTypes from './actionTypes'

const customers: ICustomer[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    dob: '1988/11/20',
    phoneNumber: '183283247823'
  }
]
const initialState = { customers }

const reducer = (state: ICustomerState = initialState, action: IActionTypes): ICustomerState => {

  switch (action.type) {
    case actionTypes.ADD_CUSTOMER:
      return {
        ...state,
        customers: [
            ...state.customers,
            action.payload
        ]
      };
    case actionTypes.UPDATE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.map((c: ICustomer) => (
            c.id === action.payload.id ? { ...c, ...action.payload } : c
        ))
      };
    case actionTypes.DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter((c: ICustomer) => c.id !== action.meta.id)
      };
    default:
        return state;
  }
}

export default reducer;