import "./Home.css"
import { NavLink } from "react-router-dom"

// Components 
import Article from "../../components/article/Article"
import CardNav from "../../components/cardnav/CardNav"

function Home() {
   return (
      <>
         <section className="hero">
            <div className="hero__container container">
               <div className="hero__info">
                  <p className="hero__subtitle">new product</p>
                  <h1 className="hero__title">XX99 Mark II
                     HeadphoneS
                  </h1>
                  <p className="hero__description">
                     Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                  </p>
                  <NavLink className="hero__btn">see product</NavLink>
               </div>
               <div className="hero__img"></div>
            </div>
         </section>
         <CardNav />
         <Article />
      </>
   )
}

export default Home