import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import './App.scss'
import rotateImages from'./images/rotate-images.png'

const HomePage = () => {
  const [theme, setTheme] = useState(1)
  const rotateImagesElement = useRef();
  const centerImageElement = useRef();

  const switchThemeRight =()=> {
    setTheme(2)
    gsap.to(rotateImagesElement.current, { rotation: "+=40" });
    gsap.fromTo(centerImageElement.current, { scale: 0.5 }, {scale:1});
  }
  const switchThemeLeft =()=> {
    setTheme(1)
    gsap.to(rotateImagesElement.current, { rotation: "+=-40" });
    gsap.fromTo(centerImageElement.current, { scale: 0.5 }, {scale:1});
  }

  return(
    <div className= {theme === 2 ? "body light-theme alt": theme === 3 ? "body dark-theme" : "body light-theme main"}>
      <div className="nav">
        <div><svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.7225 6.50647C17.7225 10.0927 14.4888 13 10.5 13C6.51115 13 3.27755 10.0927 3.27755 6.50647C3.27755 2.92019 -7.68987 0.253439 10.5 0.0129382C28.6899 -0.227563 17.7225 2.92019 17.7225 6.50647Z" fill="#5CAC0E"/>
</svg>
Food hunt</div>
        <div>
          <div className="nav-link">Breakfast</div>
          <div className="nav-link">Lunch</div>
          <div className="nav-link">Dinner</div>
        </div>
        <div>
          {theme !== 3 && (<svg onClick={()=> setTheme(3)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9618 10.79C18.8045 12.4922 18.1657 14.1144 17.1201 15.4668C16.0744 16.8192 14.6653 17.8458 13.0575 18.4265C11.4497 19.0073 9.7098 19.1181 8.04132 18.7461C6.37283 18.3741 4.84481 17.5345 3.63604 16.3258C2.42727 15.117 1.58775 13.589 1.21572 11.9205C0.843691 10.252 0.954531 8.51208 1.53528 6.9043C2.11602 5.29651 3.14265 3.88737 4.49503 2.84175C5.84741 1.79614 7.46961 1.15731 9.17182 1C8.17523 2.34827 7.69566 4.00945 7.82035 5.68141C7.94503 7.35338 8.66568 8.92506 9.85122 10.1106C11.0368 11.2961 12.6084 12.0168 14.2804 12.1415C15.9524 12.2662 17.6135 11.7866 18.9618 10.79Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>)}

          {theme === 3 && (<svg onClick={()=> setTheme(1)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 1V3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 21V23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.22 4.21997L5.64 5.63997" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.36 18.36L19.78 19.78" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1 12H3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21 12H23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.22 19.78L5.64 18.36" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.36 5.63997L19.78 4.21997" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>)}


<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


        </div>
      </div>

      <section class="hero is-fullheight">
        <div className="hero-body">
        <div className="columns">
            <div className="column is-flex is-align-items-center">
              <div>

    
  <p className="title mb-5">
        Delicious
      </p>
      <p className="subtitle">
        Quench the hunger
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet ipsum, auctor quis sagittis felis risus, a odio. Amet ante nulla sem mauris. Sollicitudin ultrices enim quam.
            </p>
            <button class="button is-rounded mt-5 is-large">Quench now</button>
              </div>
  </div>
            <div className="column is-three-fifths">
              <div className="right-hero-wrapper">

              <div className="upper-circle">

                <div className="is-relative" style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden'
                }}>
                  <div className="product-div">
                    <img  className="rotate-images" ref={rotateImagesElement}
                     src={ rotateImages
                  } alt="various dishes" />
                  </div>
                  
                </div>
                
                </div><div className="center-image" ref={ centerImageElement}/>
              </div>
              <div className="arrow-wrapper">
              <svg onClick={()=>switchThemeLeft()} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill={theme === 2 ? '#F07000' : "#5CAC0E"}/>
<path d="M20.3137 30.6274L9.00001 19.3137M20.3137 30.6274L31.6274 19.3137M20.3137 30.6274V8.00002" stroke="#FFF4F4" stroke-width="2"/>
</svg>

                
<svg onClick={()=>switchThemeRight()} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill={theme === 2 ? '#F07000' : "#5CAC0E"}/>
<path d="M20.3137 30.6274L9.00001 19.3137M20.3137 30.6274L31.6274 19.3137M20.3137 30.6274V8.00002" stroke="#FFF4F4" stroke-width="2"/>
</svg>
              </div>
  </div>
</div>
  </div>
</section>
    </div>
  )
}

export default HomePage