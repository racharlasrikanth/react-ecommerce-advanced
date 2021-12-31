import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if(action.type === ADD_TO_CART){
    const {id, color, amount, product} = action.payload;
    const tempItem = state.cart.find((eachProduct)=>eachProduct.id === id+color);
    if(tempItem){
      const tempCart = state.cart.map((cartItem)=>{
        if(cartItem.id === tempItem.id){
          let newAmount = cartItem.amount + amount;
          if(newAmount > cartItem.max){
            newAmount = cartItem.max;
          }
          return {...cartItem, amount:newAmount}
        }else{
          return cartItem;
        }
      })

      return {
        ...state, cart: tempCart,
      }
    }else{
      const newItem = {
        id: id+color,
        name: product.name,
        color: color,
        amount: amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return {...state, cart:[...state.cart, newItem]}
    }
  }

  if(action.type === REMOVE_CART_ITEM){
    let tempCartItems = state.cart.filter((cartItem)=>{
      return cartItem.id !== action.payload;
    })
    return {
      ...state,
      cart: tempCartItems,
    }
  }

  if(action.type === CLEAR_CART){
    return{
      ...state, cart: [],
    }
  }

  if(action.type === TOGGLE_CART_ITEM_AMOUNT){
    const {id, value} = action.payload;
    const tempCart = state.cart.map((cartItem)=>{
      if(cartItem.id === id){
        if(value === 'inc'){
          let newAmount = cartItem.amount + 1;
          if(newAmount > cartItem.max){
            newAmount = cartItem.max;
          }
          return {...cartItem, amount: newAmount}
        }
        if(value === "dec"){
          let newAmount = cartItem.amount - 1;
          if(newAmount < 1){
            newAmount = 1;
          }
          return {...cartItem, amount: newAmount}
        }
        return cartItem;
      }else{
        return cartItem;
      }
    })
    return {
      ...state,
      cart: tempCart,
    }
  }

  if(action.type === COUNT_CART_TOTALS){
    const { total_items, total_amount } = state.cart.reduce((total, cartItem)=>{
      const {amount, price} = cartItem;
      total.total_items = total.total_items + amount;
      total.total_amount = total.total_amount + (amount * price);
      return total;
    },{
      total_items:0, total_amount:0
    });
    return {
      ...state,
      total_items: total_items,
      total_amount: total_amount
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
