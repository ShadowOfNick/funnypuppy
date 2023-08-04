export const Navbar = () => {
  return (
    <div className="navbar"> 
      <div className="navbar__items">   
        <ul className="navbar__items__container">
          <li className="navbar__item"><img alt="logo" src="./img/cropped-puppy-56x56.png"/></li>
          <li className="navbar__item">Home</li>
          <li className="navbar__item">Gallery</li>
          <li className="navbar__item">About us</li>
          <li className="navbar__item">How to buy?</li>
        </ul>
      </div>
      <div className="navbar__logo">
        
      </div>
      <div className="navbar__order">
        <button className="navbar__order__button">
          Order a puppy
        </button>
      </div>
    </div>
  );
};
