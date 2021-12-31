import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if(action.type === LOAD_PRODUCTS){
    // getting max price prodcut from all products
    let maxPrice = action.payload.map((eachProduct)=>{
      return eachProduct.price
    })
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {...state.filters, price: maxPrice, max_price: maxPrice}
    }
  }

  if(action.type === SET_GRIDVIEW){
    return {
      ...state,
      grid_view: true,
    }
  }

  if(action.type === SET_LISTVIEW){
    return {
      ...state,
      grid_view: false,
    }
  }

  if(action.type === UPDATE_SORT){
    return {
      ...state,
      sort: action.payload,
    }
  }

  if(action.type === SORT_PRODUCTS){
    const {sort, filtered_products} = state;
    let tempProducts = [...filtered_products];
    if(sort === "price-lowest"){
      // tempProducts = tempProducts.sort((current, next)=>{
      //   return current.price - next.price;
      // })

      tempProducts = tempProducts.sort((current, next)=>{
        if(current.price < next.price){
          return -1;
        }
        if(current.price > next.price){
          return 1;
        }
        return 0;
      })
    }
    if(sort === "price-highest"){
      tempProducts = tempProducts.sort((current, next)=>{
        return next.price - current.price;
      })
    }
    if(sort === "name-a"){
      tempProducts = tempProducts.sort((current, next)=>{
        return current.name.localeCompare(next.name);
      })
    }
    if(sort === 'name-z'){
      tempProducts = tempProducts.sort((current, next)=>{
        return next.name.localeCompare(current.name);
      })
    }
    return {
      ...state,
      filtered_products: tempProducts,
    }
  }

  if(action.type === UPDATE_FILTERS){
    const {name, value} = action.payload;
    return{
      ...state,
      filters: {
        ...state.filters,
        [name]:value,
      }
    }
  }

  if(action.type === FILTER_PRODUCTS){
    const {all_products} = state;
    const {text, category, color, company, price, shipping} = state.filters;

    let tempProducts = [...all_products];
    // filtering
    // text
    if(text){
      tempProducts = tempProducts.filter((eachProduct)=>{
        return eachProduct.name.toLowerCase().includes(text);
      })
    }

    // category
    if(category !== 'all'){
      tempProducts = tempProducts.filter((eachProduct)=>{
        return eachProduct.category === category;
      })
    }

    // company
    if(company !== 'all'){
      tempProducts = tempProducts.filter((eachProduct)=>{
        return eachProduct.company === company;
      })
    }

    // colors
    if(color !== 'all'){
      tempProducts = tempProducts.filter((eachProduct)=>{
        return eachProduct.colors.includes(color);
      })
    }

    // price
    if(price || price === 0){
      tempProducts = tempProducts.filter((eachProduct)=>{
        return eachProduct.price <= price;
      })
    }

    // shipping
    if(shipping){
      tempProducts = tempProducts.filter((eachProduct)=>{
        return eachProduct.shipping === shipping;
      })
    }
    return {
      ...state,
      filtered_products: tempProducts,
    }
  }

  if(action.type === CLEAR_FILTERS){
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: 'all',
        color: 'all',
        price: state.filters.max_price,
        shipping: false,
      },
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
