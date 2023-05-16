import { Link } from 'react-router-dom'

function HeaderComponent() {
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <div className="navbar-brand ms-2 fs-2 fw-bold text-black">Demo App</div>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5"><Link className="nav-link" to="/home">Home</Link></li>
                                <li className="nav-item fs-5"><Link className="nav-link" to="/profile">My Profile</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent