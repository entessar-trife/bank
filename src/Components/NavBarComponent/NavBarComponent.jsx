import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import nav_logo from "../../assets/imgs/logo.png";
import "./NavBarComponent.css";
import { useState } from "react";
import { NavData } from "../../Data/NavData";
import menu from "../../assets/imgs/menu.png";
import { FaXmark } from "react-icons/fa6";

export default function NavBarComponent() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [activeBtn, setActiveBtn] = useState("login");
  const [userName, setUserName] = useState("");
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const StoredUser = JSON.parse(localStorage.getItem("user"));
    if (StoredUser) {
      setIsLogin(true);
      setUserName(StoredUser.userName);
      console.log(userName);
    } else {
      setUserName("");
    }
  }, [navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = (event) => {
    Swal.fire({
      icon: 'question',
      title: " Are you sure you want to log out?",
      scrollbarPadding: false,
      heightAuto: false,
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      },
      showCancelButton: true,
      confirmButtonText: "Logout",
      denyButtonText: `Cancel`
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        localStorage.setItem("isLogin", false);
        setIsLogin(false);
        window.dispatchEvent(new Event('loginStatusChanged'));
        localStorage.setItem("isVisible", false);
        window.dispatchEvent(new Event('StatusVisibleChanged'));
        setUserName("");
      }
    });
  };
  // handle the "sign up" and "log in" buttons in form component 
  useEffect(() => {
    const handleActiveHrefChange = () => {
      const activeHref = localStorage.getItem("activeHref");
      const activeBtnFromStorage = activeLink == "/signUp" ? "sign up" : "login";
      setActiveLink(activeHref);
      setActiveBtn(!activeBtnFromStorage)
    };

    window.addEventListener('activeHrefChanged', handleActiveHrefChange);

    return () => {
      window.removeEventListener('activeHrefChanged', handleActiveHrefChange)
    }
  }, [])

  //handle the footer Links Navigation
  useEffect(() => {
    const handleActivePathChange = () => {
      const activePath = JSON.parse(localStorage.getItem('activePath'));
      setActiveLink(activePath);
    };

    window.addEventListener('activePathChanged', handleActivePathChange);

    return () => {
      window.removeEventListener('activePathChanged', handleActivePathChange)
    }
  }, [])

  return (
    <>
      <nav className={`${scrolling ? "scrolled" : ""}`}>
        <Link to="/">
          <img
            src={nav_logo}
            alt="logo"
            className="navLogo" />
        </Link>
        <div className={`responsiveNav ${menuOpen ? "open" : ""}`}>
          <Link
            to="/"
            className={`responsiveLogo ${menuOpen ? "responsiveNavLogo" : ""
              }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={nav_logo} alt="logo" />
          </Link>
          <ul>
            {NavData.map((item, index) => (
              <li
                key={index}
                className="f-18">
                <NavLink
                  to={item.path} end
                  className={({ isActive }) => (isActive || activeLink == item.path ? "activeLink" : "")}
                  onClick={() => (
                    setMenuOpen(!menuOpen),
                    setActiveBtn(activeBtn === "sign up" ? "login" : "login"),
                    localStorage.setItem('activePath', JSON.stringify(item.path))//set the active path in the local storage so the navbar would know when the path is changed
                    , window.dispatchEvent(new Event('activePathChanged'))
                  )}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="ET-navBtns">
            {isLogin == false ? (
              <>
                <NavLink
                  to={"/signup"}
                  className={`f-18 ${activeBtn === "sign up" || activeLink === "/signUp" ? "ET-bgGreen" : ""}`}
                  onClick={() =>
                  (setActiveBtn(activeBtn === "sign up" ? "sign up" : "sign up"),
                    setActiveLink(activeLink == "/login" ? "/signUp" : "/signUp"),
                    setMenuOpen(!menuOpen))}>
                  Sign up
                </NavLink>
                <NavLink
                  to={"/login"}
                  className={`f-18 ${activeBtn === "login" || activeLink === "/login" ? "ET-bgGreen" : ""}`}
                  onClick={() =>
                  (setActiveBtn(activeBtn === "login" ? "login" : "login"),
                    setActiveLink(activeLink == "/signUp" ? "/login" : "/login"),
                    setMenuOpen(!menuOpen))}>
                  Login
                </NavLink>
              </>
            ) : (
              <>
                <span className="userName f-18">{userName}</span>
                <Link className={`f-18 ET-bgGreen`} onClick={handleLogout}>
                  Logout
                </Link>
              </>
            )}
          </div>
          <FaXmark
            className={`closeNavBtn ${menuOpen ? "openMenu" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
        <img
          src={menu}
          alt="bars icon"
          className="openNavBtn"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </nav >
    </>
  );
}