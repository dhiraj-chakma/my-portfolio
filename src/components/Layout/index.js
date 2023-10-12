// Importing necessary modules and components
import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

// The Layout component defines the overall layout of the page
const Layout = () => {
  return (
    <div className="App">
      {/* Sidebar component handles the navigation */}
      <Sidebar />

      <div className="page">
        {/* Decorative HTML-like tags */}
        <span className="tags top-tags"> &lt;body&gt; </span>

        {/* Outlet serves as a placeholder for nested routes */}
        <Outlet />

        {/* Closing decorative HTML-like tags */}
        <span className="tags bottom-tags">
          &lt;body&gt;
          {/* <br /> */}
          {/* <span className="bottom-tag-html"> &lt;body&gt; </span> */}
        </span>
      </div>
    </div>
  )
}

// Exporting the Layout component so it can be used in other parts of the app
export default Layout
