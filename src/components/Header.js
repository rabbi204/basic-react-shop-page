import React from 'react'

const Header = () => {

    let brand_name = 'MERN';
    let pages= ['Home','About','Blog','Course','Shop','Contact'];

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">{ brand_name }</a>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        {
                            pages.map( (items) => 
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">{items} </a>
                                </li>
                            )
                        }
                        
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
