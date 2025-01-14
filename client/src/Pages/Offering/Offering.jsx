import React from "react";
import "./Offering.css";
import Services from "./Services";

export default function Offering() {
  return (
    <div className="offering-main-container ">
      <div className='main-section'>
        <div className='main-section-right'>
          <div className='home-svg-services' style={{ margin: "5px", padding: "4px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              // width={"35rem"}
              // height="2416.225475370842"
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
            {/* <h3 style={{fontSize:'30px'}}>Offers two main services</h3> */}
          </div>
        </div>
        <div className='main-section-left'>
          <div className="main-section-left-upper">
            <p style={{ fontWeight: '300', fontSize:'1.6em',paddingBottom:"4px" }}>Offers</p>
            <h1 style={{ fontWeight: '400', fontSize:'2em',padding:"0px 0px 0px 55px" }}>INCUBATION | CONSULTING | MENTORING | FUNDING | ACCELERATION</h1>
            <p style={{ fontWeight: '300', fontSize:'1.6em' }}>To help start-ups grow and succeed</p>
          </div>
        </div>
      </div>

      {/* Section - 2 */}
      <div className="offering-section-2-container scroll-sections">
        <div className="offering-section-2-content">
          <p >
            Our goal is to set up each MII project with a network, community,
            legal instruments, and business management toolkit sufficient for
            solving global challenges
          </p>
        </div>
      </div>

      {/* Section - 3 */}
      <div className="offering-section-3-container">
        <div className="offering-benifit-item-container1">
          <div className="benifit-item-number">01</div>
          <div className="benifit-item-name">Mentoring</div>
        </div>
        <div className="offering-benifit-item-container1">
          <div className="benifit-item-number">02</div>
          <div className="benifit-item-name">Seed-Fund Investment</div>
        </div>
        <div className="offering-benifit-item-container1">
          <div className="benifit-item-number">03</div>
          <div className="benifit-item-name">Access to Events</div>
        </div>
        <div className="offering-benifit-item-container1">
          <div className="benifit-item-number">04</div>
          <div className="benifit-item-name">Co-Working</div>
        </div>
        <div className="offering-benifit-item-container1">
          <div className="benifit-item-number">05</div>
          <div className="benifit-item-name">HR Access</div>
        </div>
        <div className="offering-benifit-item-container1">
          <div className="benifit-item-number">06</div>
          <div className="benifit-item-name">Interns</div>
        </div>
        <div className="offering-benifit-item-container1">
          <div className="benifit-item-number">07</div>
          <div className="benifit-item-name">Research Support</div>
        </div>
        <div className="offering-benifit-item-container1">
          <div className="benifit-item-number">08</div>
          <div className="benifit-item-name">Business Plan Development</div>
        </div>
        <div className="offering-benifit-item-container1">
          <div className="benifit-item-number">09</div>
          <div className="benifit-item-name">Consulting</div>
        </div>
      </div>
      <Services />
    </div>
  );
}
