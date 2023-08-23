import "./CardNav.css"
import headphonesBrand from "../../assets/headphonesBrand.png"
import earphonesBrand from "../../assets/earphonesBrand.png"
import speakersBrand from "../../assets/speakersBrand.png"
import { NavLink } from "react-router-dom"

function CardNav() {
   return (
      <section className="cardnav">
         <div className="cardnav__container container">
            <div className="cardnav__items">
               <NavLink to="/headphones" className="cardnav__item">
                  <img src={headphonesBrand} alt="headphone image" />
                  <div className="oval">
                     <svg xmlns="http://www.w3.org/2000/svg" width="209" height="106" viewBox="0 0 209 106" fill="none">
                        <g filter="url(#filter0_f_0_8428)">
                           <ellipse cx="104.5" cy="53" rx="61" ry="9" fill="black" />
                        </g>
                        <defs>
                           <filter id="filter0_f_0_8428" x="0.00749207" y="0.507492" width="208.985" height="104.985" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feGaussianBlur stdDeviation="21.7463" result="effect1_foregroundBlur_0_8428" />
                           </filter>
                        </defs>
                     </svg>
                  </div>
                  <h4 className="cardnav__title">headphones</h4>
                  <div className="cardnav__link">
                     <NavLink to="/headphones">shop</NavLink>
                     <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                        <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="#D87D4A" stroke-width="2" />
                     </svg>
                  </div>
               </NavLink>
               <NavLink to="/speakers" className="cardnav__item">
                  <img src={speakersBrand} alt="speaker image" />
                  <div className="oval">
                     <svg xmlns="http://www.w3.org/2000/svg" width="209" height="106" viewBox="0 0 209 106" fill="none">
                        <g filter="url(#filter0_f_0_8428)">
                           <ellipse cx="104.5" cy="53" rx="61" ry="9" fill="black" />
                        </g>
                        <defs>
                           <filter id="filter0_f_0_8428" x="0.00749207" y="0.507492" width="208.985" height="104.985" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feGaussianBlur stdDeviation="21.7463" result="effect1_foregroundBlur_0_8428" />
                           </filter>
                        </defs>
                     </svg>
                  </div>
                  <h4 className="cardnav__title">speakers</h4>
                  <div className="cardnav__link">
                     <NavLink to="/speakers">shop</NavLink>
                     <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                        <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="#D87D4A" stroke-width="2" />
                     </svg>
                  </div>
               </NavLink>
               <NavLink to="/earphones" className="cardnav__item">
                  <img src={earphonesBrand} alt="earphone image" />
                  <div className="oval">
                     <svg xmlns="http://www.w3.org/2000/svg" width="209" height="106" viewBox="0 0 209 106" fill="none">
                        <g filter="url(#filter0_f_0_8428)">
                           <ellipse cx="104.5" cy="53" rx="61" ry="9" fill="black" />
                        </g>
                        <defs>
                           <filter id="filter0_f_0_8428" x="0.00749207" y="0.507492" width="208.985" height="104.985" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                              <feGaussianBlur stdDeviation="21.7463" result="effect1_foregroundBlur_0_8428" />
                           </filter>
                        </defs>
                     </svg>
                  </div>
                  <h4 className="cardnav__title">earphones</h4>
                  <div className="cardnav__link">
                     <NavLink to="/earphones">shop</NavLink>
                     <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                        <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="#D87D4A" stroke-width="2" />
                     </svg>
                  </div>
               </NavLink>
            </div>
         </div>
      </section>
   )
}

export default CardNav