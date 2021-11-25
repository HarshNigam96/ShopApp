import {Dummy} from '../../Data/Dummy_Data';

const init = {
  data: Dummy,
  cart: [],
  paymentArr: [],
  total: 0,
};
const Reducer = (state = init, action) => {
  switch (action.type) {
    case 'ON_ADD':
      const getData = state.data.find(val => val.id === action.payload);
      return {
        ...state,
        data: state.data.map(val =>
          val.id === action.payload ? {...val, inCart: true} : val,
        ),
        cart: [...state.cart, {...getData}],
      };
    case 'ON_REMOVE':
      return {
        ...state,
        data: state.data.map(val =>
          val.id === action.payload ? {...val, inCart: false} : val,
        ),
        cart: state.cart.filter((val, i) => val.id !== action.payload),
      };
    case 'ORDER_NOW':
      const getItem = state.data.find(
        product => product.id === action.payload,
      );
      const availability = state.paymentArr.find(item =>
        item.id === action.payload ? true : false,
      );
      return {
        ...state,
        data: state.data.map(val =>
          val.id === action.payload ? {...val, inCart: false} : val,
        ),
        cart: state.cart.filter((val, i) => val.id != action.payload),
        
        paymentArr: availability
          ? state.paymentArr.map(val =>
              val.id === action.payload ? {...val, qty: val.qty + 1} : val,
            )
          : [...state.paymentArr, {...getItem, qty: 1}],
      };

    case 'INCREASE':
      return {
        ...state,
        paymentArr: state.paymentArr.map((val, i) =>
          val.id === action.payload ? {...val, qty: val.qty + 1} : val,
        ),
      };
    case 'DECREASE':
      return {
        ...state,
        paymentArr: state.paymentArr.map((val, i) =>
          val.id === action.payload
            ? {...val, qty: val.qty === 1 ? 1 : val.qty - 1}
            : val,
        ),
      };
    case 'DELETE':
      return {
        ...state,
        paymentArr: state.paymentArr.filter(
          (val, i) => val.id != action.payload,
        ),
      };
    default:
      return state;
  }
};

export default Reducer;
