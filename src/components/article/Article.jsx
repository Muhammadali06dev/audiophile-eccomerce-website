import "./Article.css"


function Article() {
   return (
      <section className="article">
         <div className="article__container container">
            <div className="article__info">
               <h2 className="article__title">Bringing you the <span>best</span> audio gear</h2>
               <p className="article__description">
                  Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
               </p>
            </div>
            <div className="article__img"></div>
         </div>
      </section>
   )
}

export default Article