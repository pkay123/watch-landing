import BackToTop from "../../BackToTop";
import "./footer.css";

function Footer() {
  return (
    <div className="app__footer">
      <div className="app__footer-container">
        <BackToTop />
        <div className="app__footer-grid">
          <div className="app__footer-content">
            <h2 className="content__title">Shop</h2>

            <ul className="app__content-list">
              <li className="app__content-listItems">Men's Watches</li>
              <li className="app__content-listItems">Women's Watches</li>
              <li className="app__content-listItems">Watch Straps</li>
            </ul>
          </div>
          <div className="app__footer-content">
            <h2 className="content__title">Our World</h2>

            <ul className="app__content-list">
              <li className="app__content-listItems">Our Story</li>
              <li className="app__content-listItems">Ambassadors</li>
              <li className="app__content-listItems">Design House</li>
              <li className="app__content-listItems">Materials</li>
              <li className="app__content-listItems">Lookbook</li>
            </ul>
          </div>
          <div className="app__footer-content">
            <h2 className="content__title">Useful Links</h2>

            <ul className="app__content-list">
              <li className="app__content-listItems">Customer Reviews</li>
              <li className="app__content-listItems">Ambassador Care</li>
              <li className="app__content-listItems">Shipping & Delivery</li>
              <li className="app__content-listItems">Returns & Exchange</li>
              <li className="app__content-listItems">Track My Order</li>
            </ul>
          </div>
          <div className="app__footer-content">
            <h2 className="content__title">Support</h2>

            <ul className="app__content-list">
              <li className="app__content-listItems">Strap Manual</li>
              <li className="app__content-listItems">Size Guide</li>
              <li className="app__content-listItems">Common Questions</li>
              <li className="app__content-listItems">Validate Authenticity</li>
              <li className="app__content-listItems">Contact Us</li>
            </ul>
          </div>
          <div className="app__footer-content">
            <h2 className="content__title">Social Media</h2>
            <ul className="app__content-list">
              <li className="app__content-listItems">Facebook</li>
              <li className="app__content-listItems">Instagram</li>
              <li className="app__content-listItems">Pinterest</li>
              <li className="app__content-listItems">Journal</li>
              <li className="app__content-listItems">Youtube</li>
            </ul>
          </div>
          <div className="app__footer-content">
            <h2 className="content__title">Payments</h2>
            <ul className="app__content-list">
              <li className="app__content-listItems">Visa</li>
              <li className="app__content-listItems">Paypal</li>
              <li className="app__content-listItems">G-Pay</li>
              <li className="app__content-listItems">MasterCard</li>
              <li className="app__content-listItems">ApplePay</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
