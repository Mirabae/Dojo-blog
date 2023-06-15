const Navbar = () => {
    return (  
        <nav className="navbar">
          
            <div className="nav-container">
            <div className="logo">
                NFT
            </div>
            <div className="nav-links hide">
                <div className="nav-inner1">
                        <nav>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Leaderboard</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Statistics</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="nav-inner1">
                        <div className="search">
                            <a href="#"><i className="fa fab-search"></i></a>
                            <div className="navbtn-container">
                                <a href="" className="navbtn">Connect Wallet</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="ham-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 18 12">
                     <path id="ic_menu_24px" d="M3,18H21V16H3Zm0-5H21V11H3ZM3,6V8H21V6Z" transform="translate(-3 -6)" fill="#fff"/>
                    </svg>
                </button>
            </div>
        </nav>
    );
}
 
export default Navbar;