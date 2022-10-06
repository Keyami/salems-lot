import React from 'react'
 
function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="#">
                Task Management Client
            </a>
          </div>
          <div className="nav-right">
            <div className="tab">
              <a href="https://github.com/Keyami/salems-lot">Salem's Lot</a>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Header;