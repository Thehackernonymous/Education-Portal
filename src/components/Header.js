import React from 'react';
// import { Link } from 'react-router-dom';

function Header({ setSearchQuery }) {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/84/Government_of_India_logo.svg"
          className="navbar-brand"
          href="#"
          style={{ height: '80px' }}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Education">
                Education
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                States
              </a>
              {/* <ul className="dropdown-menu">
                {states.map((states) => (
                  <li key={states.id}>
                    <Link className="dropdown-item" to={`/state/${states.id}`}>
                      {states.name}
                    </Link>
                  </li>
                ))}
              </ul> */}
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Government
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Universities
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Schools
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleSearch}
            />
            {/* Remove the submit button to enable real-time search */}
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
