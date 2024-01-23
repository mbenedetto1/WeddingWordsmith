import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
<div className='nav'>
    <nav class="navbar sticky navbar-light bg-transparent">
      <div className='image'>
      <Link to="/">
        <img src="src/assets/main.png"  />
      </Link>
      </div>
      <div class="nav nav-pills" id="pills-tab" role="tablist" >
        <Link class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" bg-danger to="/">Home</Link>  &nbsp;
        <Link class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"to='/chat'>Speech WorkShop</Link>  &nbsp;
        <Link class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"to='about'>About</Link>
      </div>

    </nav>


</div>
    
  )
}

export default Nav