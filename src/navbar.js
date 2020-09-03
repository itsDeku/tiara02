import React from 'react'

function Navbar() {
    return (
        <nav>
            <div className="my-navbar navbar" >
                <div className="my-nav-brand" >
                    <span className="brand-logo iconify mx-1 my-2" data-inline="false" data-icon="mdi:palette" ></span>
                </div>
                <div className="nav-brand-name" >
                    <span className="brand-name">Art3mist</span>
                </div>
                <div className="nav-search"  >
                    <span className="search-logo iconify mx-4 my-2" data-inline="false" data-icon="ant-design:search-outlined"></span>
                </div>
                <div className="nav-dehaze" data-toggle="offcanvas" >
                    <span className="dehaze-logo iconify mx-4  my-2" data-inline="false" data-icon="ic:round-dehaze"></span>
                </div>
            </div>
            <div class="navbar-collapse offcanvas-collapse bg-light text-dark" id="navbarsExampleDefault">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Notifications</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Switch account</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown01">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
export default Navbar