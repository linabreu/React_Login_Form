import React from 'react';
import lipstick from '../images/lipstick.jpg';
import skincare from '../images/skincare.jpg';
import foundation from '../images/foundation.jpg';
import eyeshadow from '../images/eyeshadow.jpg';

export default function Home() {
  return (
    <>
    <div class="jumbotron hero d-flex flex-column justify-content-center align-items-center mb-5">
    <h1 className = "mt-5 hero-text text-center">Your Odyssey is Beautiful</h1>
  </div>
    <div className = " row justify-content-center">
      <h2 className = "branded-p text-center">Adventurous New Arrivals</h2>
      <hr className = "w-75 text-center mb-5"/>
    </div>

      <div className = "row gy-3 mb-5  ">
      <div className = "col-sm-3">
        <div class="card w-90 centered shadow">
            <img src = {lipstick} className = "w-100"></img>
            <div class="card-body pink">
            <h3 className = "branded text-center purple-text">Lipstick</h3>
            <p class="card-text branded-p">Elevate your lips with the lush hues of nature with our organic lipstick, a vibrant fusion of botanical brilliance that delivers striking color and hydrates.</p>
            <button type="button" class="pink-button centered">Shop Now</button>
            </div>
        </div>
      </div>
      <div className = "col-sm-3">
      <div class="card w-90 centered shadow">
            <img src = {skincare} className = "w-100"></img>
            <div class="card-body yellow">
            <h3 className = "branded text-center purple-text">Skin Care</h3>
            <p class="card-text">Indulge your skin in the purity of nature with our organic cleanser, a gentle yet effective formula crafted to cleanse, rejuvenate, and leave your complexion refreshed.</p>
            <button type="button" class="yellow-button centered">Shop Now</button>
            </div>
        </div>
      </div>
      <div className = "col-sm-3">
      <div class="card card-height w-90 centered shadow">
            <img src = {foundation} className = "w-100"></img>
            <div class="card-body pink">
            <h3 className = "branded text-center purple-text">Foundation</h3>
            <p class="card-text">Unveil your natural beauty with our organic foundation, a flawless blend of botanical extracts and nourishing ingredients that perfects your complexion.</p>
            <button type="button" class="pink-button centered">Shop Now</button>
            </div>
        </div>
      </div>
      <div className = "col-sm-3">
      <div class="card w-90 centered shadow">
            <img src = {eyeshadow} className = "w-100"></img>
            <div class="card-body yellow">
            <h3 className = "branded text-center purple-text">Eyeshadow</h3>
            <p class="card-text">Experience the beauty of nature with our organic eyeshadow palette, where vibrant, earth-inspired hues blend seamlessly to enhance your eyes with a rich, velvety finish.</p>
            <button type="button" class="yellow-button centered">Shop Now</button>
            </div>
        </div>
      </div>
  </div>
  </>
  )
}
