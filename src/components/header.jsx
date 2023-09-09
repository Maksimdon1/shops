import React from 'react'
import '../style/header.css'

export  function Header() {
  return (
   <>
   <header>
    <div className="logo">FlowerLover</div>
    <div className="navigate">
    <div className="button">Букеты</div>
    <div className="button">Праздники</div>
    <div className="button">Доставка</div>
    <div className="button">О нас</div>
    </div>
    <div className="right">
       <div className="search">
       <div class="search-box">
    <button class="btn-search"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>
    <input type="text" class="input-search" placeholder="Type to Search..."/>
  </div>
       </div>
      
      <div className="panel"><img src={require('../static-img/panel-icon.png')} alt="" /></div>
    </div>
   
   </header>
   </>
  )
}



// <div className="basket"><img src={ require('../static-img/basket.png')} alt="" width={"30px"} height={"30px"} /></div>
//<div className="user"><img src={require('../static-img/user.png')} alt="" width={"30px"} height={"30px"}  /></div>
