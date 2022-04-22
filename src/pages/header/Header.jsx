import "./header.css";

function Header() {
  return (
    <div className="app__header" id="home">
      <div className="app__header-container">
        <div className="app__header-grid">
          <div className="app__header-left">
            <h2 className="title">
              A watch is a timepiece intended to be carried or worn by a person.
            </h2>
            <p className="subtitle">
              Explore our collection of classic men’s watches. The Prime
              Ambassador is designed to be extraordinary - a remarkable
              timepiece for leaders, innovators, and the exceptional men.
            </p>

            <button className="btn">SHOP NOW</button>
          </div>

          <div className="app__header-imgcontainer">
            <img src="assets/1959-2.png" alt="" className="header__img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
