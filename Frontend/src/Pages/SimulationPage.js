import React from 'react'

import {Link} from 'react-router-dom';
import BorrowApp from '../Component/BorrowApp';
import BooksApp from '../Component/BookApp';



export default function SimulationPage() {
  return (
    <div className='Simulation'>
        
        <h2 style={{ color: "darkblue" }} >Simple Book Inventory System</h2>
  
        <BooksApp />
        <BorrowApp />

        <Link to="/"> <button className="start-button"  >
            &#x2190; Back to Home
        </button></Link> </div>
  )
}
