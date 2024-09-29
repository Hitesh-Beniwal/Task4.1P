
function NavBar() {
  return (
    <div>
      <header>
        <div className="nav_div">
          <p>DEV@Deakin</p>
          <input type="search" placeholder="Search..." />
          <div className="nav_but">
            <button>Post</button>
            <button>Login</button>
          </div>
        </div>
      </header>
        <div className="imagedisplay">
          <img src="./images/header11.webp" alt="Random" />
        </div>
    </div>
  );
}

export default NavBar;
