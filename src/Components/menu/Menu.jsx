import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopCard from '../cards/topCard';
import './Menu.css';
import Filter from '../Filter';
import { searchByName } from '../../redux/Slices/FilterSlice';

const Menu = () => {

  const filterState = useSelector(state => state.filter);
  const { search, sortPrice, sortName } = filterState;
  const product = useSelector(state => state.cart.products);
  const dispatch = useDispatch();

  const transformedProducts = () => {
    let sortedProducts = product.filter((a) => { return true });

    if (sortPrice) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sortPrice === 'lowToHigh' ? a.price - b.price : sortPrice === 'highToLow' && b.price - a.price
      )
    }
    if (sortName) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sortName === 'lowToHigh' ? (a.strMeal < b.strMeal ? -1 : 1) : sortName === 'highToLow' && (a.strMeal > b.strMeal ? -1 : 1)
      )
    }

    if (sortName && sortPrice) {
      sortedProducts = [...sortedProducts.sort((a, b) =>
        (sortPrice === 'lowToHigh' ? a.price - b.price : sortPrice === 'highToLow' && b.price - a.price)
      )].sort((a, b) =>
        (sortName === 'lowToHigh' ? (a.strMeal < b.strMeal ? -1 : 1) : sortName === 'highToLow' && (a.strMeal > b.strMeal ? -1 : 1)))
    }

    if (search !== '') {
      sortedProducts = sortedProducts.filter((p) => p.strMeal.toLowerCase().trim().includes(search.toLowerCase().trim()));
    }

    return sortedProducts
  }

  useEffect(() => {
    window.scrollTo({
      top: 0, behavior: "smooth"
    })
  }, [])

  return (
    <div className="container">
      <div id="menuContainer">
        <div id="filterContainer">
          <Filter />
        </div>
        <div id="menuItemsContainer" aria-label='product-list'>
          <div id="heading">
            <h1> Our Products - <span>{product.length} items </span>
            </h1>
            <input placeholder='search by name' id="search" onChange={(e) => {
              dispatch(searchByName(e.target.value))
            }} value={search} />
          </div>
          <div id="menuItemsListContainer">
            {transformedProducts().length === 0 ?
              <h1>Sorry, No matching Products found!</h1> : transformedProducts().map((val) => {
                return <TopCard val={val} key={val.idMeal} />
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu