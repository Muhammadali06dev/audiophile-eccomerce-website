import "./Home.css"
import { NavLink } from "react-router-dom"

function Home() {
   return (
      <section className="home">
         <div className="home__container container">
            <div className="home__info">
               <p className="home__subtitle">new product</p>
               <h1 className="home__title">XX99 Mark II
                  HeadphoneS
               </h1>
               <p className="home__description">
                  Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
               </p>
               <NavLink className="home__btn">see product</NavLink>
            </div>
            <div className="home__img"></div>
         </div>
      </section>
   )
}

export default Home