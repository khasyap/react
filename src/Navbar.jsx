import { Link, Outlet } from "react-router-dom"

function Navbar(){
return(
    <>
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/app/home" >Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/app/about" >About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/app/contact" >Contact</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/app/gallery" >Gallery</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/app/service" >Service</Link>
            </li>
        </ul>
    </nav>
    <div className="container">
        <Outlet />
    </div>
    </>
)
}
export default Navbar