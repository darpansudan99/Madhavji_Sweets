import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './menu/Menu.css';
import { byName, byPrice, clearFilters } from '../redux/Slices/FilterSlice';


const Filter = () => {

     const filterState = useSelector(state => state.filter);
     const { sortName, sortPrice } = filterState;
     const dispatch = useDispatch();

     return (
          <div style={{ position: "sticky", top: "9rem" }}>
               <div>
                    <h3> Filters
                         <i className="fa-solid fa-filter"></i>
                    </h3>
                    <div id="radioFilter">
                         <p> By Name - </p>
                         <span>
                              <input type='radio' name='group-1' value='ascending-name' onChange={() => {
                                   dispatch(byName("lowToHigh"))
                              }}
                                   checked={sortName === 'lowToHigh' ? true : false} /> <label> Ascending </label>
                         </span>
                         <span>
                              <input type='radio' name='group-1' value='descending-name' onChange={() => {
                                   dispatch(byName("highToLow"))
                              }}
                                   checked={sortName === 'highToLow' ? true : false} /> <label> Descending </label>
                         </span>
                    </div>
                    <div id="radioFilter">
                         <p> By Price - </p>
                         <span>
                              <input type='radio' name='group-2' value='ascending-price' onChange={() => {
                                   dispatch(byPrice("lowToHigh"))
                              }}
                                   checked={sortPrice === 'lowToHigh' ? true : false} /> <label> Ascending </label>
                         </span>
                         <span>
                              <input type='radio' name='group-2' value='descending-price' onChange={() => {
                                   dispatch(byPrice("highToLow"))
                              }}
                                   checked={sortPrice === 'highToLow' ? true : false} /> <label> Descending </label>
                         </span>
                    </div>
                    <button onClick={() => {
                         dispatch(clearFilters())
                    }}> Clear Filters </button>
               </div>
          </div>
     )
}

export default Filter
