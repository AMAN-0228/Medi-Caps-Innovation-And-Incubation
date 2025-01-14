import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import './Header.css'
import { useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(window.innerWidth > 599 ? true : false);
  const [menue, setmenue] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setmenue(false);
  }, [pathname]);

  return (
    <div className="navbar">

      <div className="header">
        <div className="navbar-logo">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width={"15vh"}
              // height="45"
              viewBox="0 0 3300 2416.225475370842"
            >
              <g transform="scale(15) translate(10, 10)">
                <defs id="SvgjsDefs2491" />
                <g
                  id="SvgjsG2492"
                  featurekey="nameFeature-0"
                  transform="matrix(4.351609821234632,0,0,4.351609821234632,-8.703219642469264,-65.27414731851948)"
                  fill="#000"
                >
                  <path d="M2.52 40 c-0.28 0 -0.52 -0.24 -0.52 -0.52 l0 -23.96 c0 -0.28 0.24 -0.52 0.52 -0.52 l5.76 0 c0.2 0 0.4 0.12 0.48 0.28 l6 14.8 l5.96 -14.8 c0.08 -0.16 0.28 -0.28 0.48 -0.28 l5.76 0 c0.28 0 0.52 0.24 0.52 0.52 l0 23.96 c0 0.28 -0.24 0.52 -0.52 0.52 l-4.68 0 c-0.28 0 -0.52 -0.24 -0.52 -0.52 l0 -12.88 l-4.88 12.4 c-0.08 0.16 -0.28 0.28 -0.44 0.28 l-3.36 0 c-0.2 0 -0.4 -0.12 -0.48 -0.28 l-4.92 -12.4 l0 12.88 c0 0.28 -0.24 0.52 -0.52 0.52 l-4.64 0 z M32 40 c-0.28 0 -0.52 -0.24 -0.52 -0.52 l0 -23.96 c0 -0.28 0.24 -0.52 0.52 -0.52 l5.2 0 c0.28 0 0.52 0.24 0.52 0.52 l0 23.96 c0 0.28 -0.24 0.52 -0.52 0.52 l-5.2 0 z M42.24 40 c-0.28 0 -0.52 -0.24 -0.52 -0.52 l0 -23.96 c0 -0.28 0.24 -0.52 0.52 -0.52 l5.2 0 c0.28 0 0.52 0.24 0.52 0.52 l0 23.96 c0 0.28 -0.24 0.52 -0.52 0.52 l-5.2 0 z" />
                </g>
                <g
                  id="SvgjsG2493"
                  featurekey="nameFeature-1"
                  transform="matrix(0.8653512937916894,0,0,0.8653512937916894,-1.7307025875833788,106.67739777446954)"
                  fill="#000"
                >
                  <path d="M2.52 40 c-0.28 0 -0.52 -0.24 -0.52 -0.52 l0 -23.96 c0 -0.28 0.24 -0.52 0.52 -0.52 l16.52 0 c0.16 0 0.28 0.04 0.36 0.16 c0.12 0.08 0.16 0.2 0.16 0.36 l-0.04 4.48 c0 0.28 -0.24 0.52 -0.52 0.52 l-10.8 0 l0 4.84 l6.8 0 c0.28 0 0.52 0.24 0.52 0.52 l0 4.52 c0 0.28 -0.24 0.52 -0.52 0.52 l-6.8 0 l0 8.56 c0 0.28 -0.2 0.52 -0.48 0.52 l-5.2 0 z M34.04 40 c-2.4 0 -4.6 -0.56 -6.52 -1.68 c-1.96 -1.12 -3.52 -2.72 -4.68 -4.64 c-1.12 -1.96 -1.68 -4.2 -1.68 -6.6 c0 -2.36 0.56 -4.56 1.68 -6.52 c1.16 -1.96 2.68 -3.52 4.64 -4.64 s4.16 -1.68 6.56 -1.68 c2.36 0 4.56 0.56 6.52 1.68 s3.52 2.68 4.64 4.64 c1.16 1.96 1.72 4.16 1.72 6.52 c0 2.4 -0.56 4.6 -1.72 6.56 c-1.12 1.96 -2.68 3.52 -4.64 4.68 c-1.96 1.12 -4.16 1.68 -6.52 1.68 z M34.120000000000005 34.24 c1.16 0 2.24 -0.32 3.2 -0.92 c1 -0.64 1.8 -1.48 2.36 -2.6 c0.6 -1.08 0.88 -2.32 0.88 -3.64 c0 -1.28 -0.28 -2.52 -0.88 -3.6 c-0.56 -1.08 -1.36 -1.92 -2.36 -2.56 c-0.96 -0.6 -2.04 -0.92 -3.2 -0.92 c-1.2 0 -2.28 0.32 -3.28 0.92 c-1.04 0.64 -1.84 1.48 -2.44 2.56 c-0.6 1.12 -0.88 2.32 -0.88 3.6 c0 1.32 0.28 2.56 0.88 3.64 c0.64 1.08 1.44 1.96 2.44 2.56 c1 0.64 2.08 0.96 3.28 0.96 z M61.36 40 c-2.16 0 -3.72 -0.44 -5.36 -1.32 c-1.6 -0.88 -2.88 -2.12 -3.76 -3.76 c-0.88 -1.6 -1.32 -3.52 -1.32 -5.72 l0 -14.08 c0 -0.28 0.24 -0.48 0.52 -0.48 l5.2 0 c0.28 0 0.48 0.2 0.48 0.48 l0 14.08 c0 1.6 0.44 2.84 1.28 3.72 s1.6 1.32 3 1.32 s2.12 -0.44 2.92 -1.28 c0.8 -0.88 1.2 -2.16 1.2 -3.76 l0 -14.08 c0 -0.28 0.24 -0.48 0.52 -0.48 l5.2 0 c0.28 0 0.52 0.2 0.52 0.48 l0 14.08 c0 2.2 -0.44 4.12 -1.32 5.72 c-0.84 1.64 -2.12 2.88 -3.72 3.76 s-3.2 1.32 -5.36 1.32 z M76.28 40 c-0.28 0 -0.52 -0.24 -0.52 -0.52 l0 -23.96 c0 -0.28 0.24 -0.52 0.52 -0.52 l4.72 0 c0.16 0 0.32 0.08 0.44 0.2 l9.2 14.2 l0 -13.88 c0 -0.28 0.24 -0.52 0.52 -0.52 l4.92 0 c0.28 0 0.52 0.24 0.52 0.52 l0 23.96 c0 0.28 -0.24 0.52 -0.52 0.52 l-4.72 0 c-0.16 0 -0.32 -0.08 -0.44 -0.2 l-9.16 -14.12 l0 13.8 c0 0.28 -0.24 0.52 -0.52 0.52 l-4.96 0 z M101.12 40 c-0.32 0 -0.52 -0.24 -0.52 -0.52 l0 -23.96 c0 -0.28 0.2 -0.52 0.52 -0.52 l9.08 0 c2.4 0 4.6 0.52 6.52 1.6 c1.92 1.04 3.4 2.52 4.48 4.44 c1.04 1.88 1.6 4.04 1.6 6.44 c0 2.44 -0.56 4.6 -1.64 6.48 c-1.08 1.92 -2.6 3.4 -4.56 4.44 c-1.92 1.08 -4.16 1.6 -6.6 1.6 l-8.88 0 z M106.80000000000001 34.4 l3.52 0 c1.16 0 2.24 -0.28 3.16 -0.84 c0.92 -0.6 1.68 -1.4 2.2 -2.44 s0.8 -2.24 0.8 -3.6 c0 -1.32 -0.28 -2.56 -0.84 -3.6 c-0.56 -1.08 -1.32 -1.88 -2.28 -2.48 c-0.96 -0.56 -2.08 -0.88 -3.28 -0.88 l-3.28 0 l0 13.84 z M124.52000000000001 40 c-0.16 0 -0.32 -0.08 -0.4 -0.24 c-0.12 -0.12 -0.12 -0.32 -0.08 -0.48 l9.32 -23.96 c0.08 -0.2 0.28 -0.32 0.48 -0.32 l5.36 0 c0.2 0 0.4 0.12 0.48 0.32 l9.16 23.96 c0.04 0.16 0.04 0.32 -0.08 0.48 c-0.08 0.16 -0.24 0.24 -0.4 0.24 l-5.56 0 c-0.2 0 -0.4 -0.12 -0.48 -0.32 l-1.48 -3.68 l-9 0.04 l-1.48 3.64 c-0.08 0.2 -0.28 0.32 -0.48 0.32 l-5.36 0 z M133.48000000000002 31 l5.76 0 l-2.88 -8.48 z M156.56 40 c-0.28 0 -0.48 -0.24 -0.48 -0.52 l0 -18.88 l-5.48 0 c-0.28 0 -0.52 -0.2 -0.52 -0.48 l0 -4.6 c0 -0.28 0.24 -0.52 0.52 -0.52 l17.16 0 c0.32 0 0.52 0.24 0.52 0.52 l0 4.6 c0 0.28 -0.2 0.48 -0.52 0.48 l-5.48 0 l0 18.88 c0 0.28 -0.24 0.52 -0.52 0.52 l-5.2 0 z M172.8 40 c-0.28 0 -0.52 -0.24 -0.52 -0.52 l0 -23.96 c0 -0.28 0.24 -0.52 0.52 -0.52 l5.2 0 c0.28 0 0.52 0.24 0.52 0.52 l0 23.96 c0 0.28 -0.24 0.52 -0.52 0.52 l-5.2 0 z M195.4 40 c-2.4 0 -4.6 -0.56 -6.52 -1.68 c-1.96 -1.12 -3.52 -2.72 -4.68 -4.64 c-1.12 -1.96 -1.68 -4.2 -1.68 -6.6 c0 -2.36 0.56 -4.56 1.68 -6.52 c1.16 -1.96 2.68 -3.52 4.64 -4.64 s4.16 -1.68 6.56 -1.68 c2.36 0 4.56 0.56 6.52 1.68 s3.52 2.68 4.64 4.64 c1.16 1.96 1.72 4.16 1.72 6.52 c0 2.4 -0.56 4.6 -1.72 6.56 c-1.12 1.96 -2.68 3.52 -4.64 4.68 c-1.96 1.12 -4.16 1.68 -6.52 1.68 z M195.48000000000002 34.24 c1.16 0 2.24 -0.32 3.2 -0.92 c1 -0.64 1.8 -1.48 2.36 -2.6 c0.6 -1.08 0.88 -2.32 0.88 -3.64 c0 -1.28 -0.28 -2.52 -0.88 -3.6 c-0.56 -1.08 -1.36 -1.92 -2.36 -2.56 c-0.96 -0.6 -2.04 -0.92 -3.2 -0.92 c-1.2 0 -2.28 0.32 -3.28 0.92 c-1.04 0.64 -1.84 1.48 -2.44 2.56 c-0.6 1.12 -0.88 2.32 -0.88 3.6 c0 1.32 0.28 2.56 0.88 3.64 c0.64 1.08 1.44 1.96 2.44 2.56 c1 0.64 2.08 0.96 3.28 0.96 z M212.8 40 c-0.28 0 -0.52 -0.24 -0.52 -0.52 l0 -23.96 c0 -0.28 0.24 -0.52 0.52 -0.52 l4.72 0 c0.16 0 0.32 0.08 0.44 0.2 l9.2 14.2 l0 -13.88 c0 -0.28 0.24 -0.52 0.52 -0.52 l4.92 0 c0.28 0 0.52 0.24 0.52 0.52 l0 23.96 c0 0.28 -0.24 0.52 -0.52 0.52 l-4.72 0 c-0.16 0 -0.32 -0.08 -0.44 -0.2 l-9.16 -14.12 l0 13.8 c0 0.28 -0.24 0.52 -0.52 0.52 l-4.96 0 z" />
                </g>
              </g>
            </svg>
          </a>
        </div>
        {display ? <div className="navbar-items-left">
          <div className="left-items">
            {/* <NavLink  to="/">Home</NavLink> */}
            <div>
              <NavLink to="/About">About</NavLink>
            </div>
            <div>
              <NavLink to="/Offering">Services</NavLink>
            </div>
            <div>
              <a style={{cursor: 'pointer'}} className="miicommunity-hover">MII Community
                <div className='navbar-blogs-events'>
                  <div onClick={() => { navigate("/Event") }}>
                    <h3 >Events</h3>
                  </div>
                  <div onClick={() => { navigate("/Article") }}>
                    <h3>Blogs</h3>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div> : <div className='handburg' onClick={() => { setmenue(!menue) }}>
          {!menue ? <i className="fa-solid fa-bars-staggered fa"></i> : <i className="fa-solid fa-xmark fa"></i>}
        </div>}
        {display ? <div className="navbar-items-right">
          {/* <div className="right-items">
            <NavLink to='https://www.instagram.com/miifoundation/' target='_blank'><img src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png" alt="" /></NavLink>
            <NavLink to='https://www.linkedin.com/company/mii-foundation/' target='_blank'><img src="https://cdn-icons-png.flaticon.com/512/4494/4494475.png" alt="" /></NavLink>
            <NavLink to='https://www.linkedin.com/company/mii-foundation/' target='_blank'><img src="https://cdn-icons-png.flaticon.com/512/4494/4494477.png" alt="" /></NavLink>
            <NavLink to='https://www.linkedin.com/company/mii-foundation/' target='_blank'><img src="https://cdn-icons-png.flaticon.com/512/4494/4494497.png" alt="" /></NavLink>
          </div> */}
          <div style={{cursor:'pointer'}} className="right-contact">
            <NavLink to="/Contact" >Contact Us</NavLink>
          </div>
        </div> : <></>}
      </div>
      {menue ?

        <div className="navbar-items-for-mobile">
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Offering">Services</NavLink>
          <a to="/Event" className="miicommunity-hover">MII Community
            <div className='nabar-bloog-events'>
              <div onClick={() => { navigate("/Event") }}>
                <h3 >Events</h3>
              </div>
              <div onClick={() => { navigate("/Article") }}>
                <h3 >Blogs</h3>
              </div>
            </div>
          </a>
          <div className="right-contact">
            <NavLink style={{ color: "#fff" }} to="/Contact" >Contact</NavLink>
          </div>
        </div> : <></>}
    </div>
  )
}

