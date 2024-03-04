import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      className="not-found-image"
      src="https://res.cloudinary.com/pavankalyanbandaru/image/upload/v1651083038/tasty-kitchens/page-not-found.png"
      alt="not found"
    />
    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="not-found-description">
      We are sorry, the page you requested could not be found.
      <br className="line-brake" /> Please go back to the homepage.
    </p>
    <Link to="/">
      <button className="homepage-button" type="button">
        Home Page
      </button>
    </Link>
  </div>
)

export default NotFound
