import "./Header.css";

function Header() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__info">
        <span className="header__date">{currentDate}</span>
        <span className="header__location">San Diego, CA</span>{" "}
        {/* Replace with actual location logic */}
      </div>
      <div className="header__navigation">
        <button>Portfolio</button>
        <button>About</button>
        <button>Contact</button>
        <button>Resume</button>
      </div>
    </header>
  );
}

export default Header;
