import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div id="looking">
        <div className="looking-h3">
          <h3>What are you looking for?</h3>
        </div>
        <div className="looking-img">
          {[1, 2, 3].map((item) => (
            <div key={item}>
              <a href="./productpage.html">
                <img src={`./images/looking/${item}.jpg`} alt="" />
              </a>
            </div>
          ))}
          {[4, 5, 6, 7, 8].map((item) => (
            <div key={item}>
              <img src={`./images/looking/${item}.jpg`} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div id="offer">
        <img src="https://cdn01.pharmeasy.in/dam/banner/banner/836fef100bc-YAYY550.jpg" alt="" />
        <img src="https://cdn01.pharmeasy.in/dam/banner/banner/760565c68b5-VIBES27.jpg" alt="" />
      </div>
      <div className="offerH">
        <h2>Offers Just for You</h2>
      </div>
      <div id="offer2">
        {[1, 2].map((item) => (
          <a href="" key={item}>
            <img src={`./images/offer/${item}.jpg`} alt="" />
          </a>
        ))}
        <a href="./signup.html">
          <img src="./images/offer/3.jpg" alt="" />
        </a>
      </div>
      <div className="offerH2">
        <h2>Payment Offers</h2>
      </div>
      <div id="offer3">
        {[
          'https://cdn01.pharmeasy.in/dam/banner/banner/a93d45ef9eb-HSBC.jpg?dim=1440x0',
          'https://cdn01.pharmeasy.in/dam/banner/banner/f3c446e4108-AMAZON.jpg?dim=1440x0',
          'https://cdn01.pharmeasy.in/dam/banner/banner/9466405c308-au.jpg?dim=1440x0',
        ].map((src, index) => (
          <img src={src} alt="" key={index} />
        ))}
      </div>

      <div className="top">
        <div className="container">
          <div className="slide-container">
            {[1, 2, 3, 4, 5, 7, 6, 8].map((item) => (
              <div key={item}>
                <div className="slide-img">
                  <img src={`./images/slider1/s${item}.jpg`} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="cat">
        <div>
          <h2> Shop By Categories</h2>
        </div>
        <div className="slider">
          <div className="wrapper">
            <i id="left" className="fa-solid fa-angle-left"></i>
            <div className="carousel" id="slider_img">
              {[
                'https://cms-contents.pharmeasy.in/carousel_item/1466c422fcd-Sugerfree.png?dim=1440x0',
                'https://cms-contents.pharmeasy.in/carousel_item/3eb4eb6bfbe-App_Himalaya.jpg?dim=1440x0',
                'https://cms-contents.pharmeasy.in/carousel_item/62668bab7a1-AccuChek-min.png?dim=1440x0',
                'https://cms-contents.pharmeasy.in/carousel_item/d0f595be419-Savlonv2.png?dim=1440x0',
                'https://cms-contents.pharmeasy.in/carousel_item/3c344faad99-App_Featured-J.jpg?dim=1440x0',
                'https://cms-contents.pharmeasy.in/carousel_item/d3481485e73-App_stayfree.jpg?dim=1440x0',
                'https://cms-contents.pharmeasy.in/carousel_item/f2d61678901-Ensure.png?dim=1440x0',
                './images/slider1/s8.jpg',
              ].map((src, index) => (
                <img src={src} alt="img" draggable="false" key={index} />
              ))}
            </div>
            <i id="right" className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>

      <div id="banner">
        <img width="90%" src="./images/offer/banner.jpg" alt="" />
      </div>

      <div id="concern">
        <div className="con-1">
          <h2>Shop by Concern</h2>
          <p>Products are handpicked by experts</p>
        </div>
        <div className="con-2">
          {[
            {
              src: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/923a665cc6f-Skin_care.png?dim=128x0',
              text: 'Skin Care',
            },
            {
              src: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/18d2e2ee86b-Vitamins.png?dim=128x0',
              text: 'Vitamins & Supplements',
            },
            {
              src: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/0af9ac9f350-Diabetes.webp?dim=128x0',
              text: 'Diabetes Care & Sugar',
            },
            {
              src: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/24a0d2c733e-Heart.webp?dim=128x0',
              text: 'Cardiac Care',
            },
            {
              src: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/68369c9df98-Pregnancy.webp?dim=128x0',
              text: 'Baby & Mom Care',
            },
            {
              src: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/26bbd7a9e98-Lifestyle.webp?dim=128x0',
              text: 'Lifestyle Disorders',
            },
            {
              src: 'https://cms-contents.pharmeasy.in/homepage_top_categories_images/16ab65c0826-Covid.webp?dim=128x0',
              text: 'Lifestyle Disorders',
            },
          ].map((item, index) => (
            <div key={index}>
              <img src={item.src} alt="" />
              <h5>{item.text}</h5>
            </div>
          ))}
        </div>
      </div>

      <div id="article">
        <h3>Health Articles</h3>
        <div id="art-image">
          {[
            'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/06125332/12-5.jpg?dim=1440x0',
            'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/06125500/9-3.jpg?dim=1440x0',
            'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/06125628/6-3.jpg?dim=1440x0',
            'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/06125758/19.jpg?dim=1440x0',
            'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2022/10/06125931/4-6.jpg?dim=1440x0',
          ].map((src, index) => (
            <a href="#" key={index}>
              <div>
                <img src={src} alt="" />
                <p>
                  Benefits of Bakasana ( Crane Pose) and How to Do it By Dr. Ankit Sankhe
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="slider">
        <div className="wrapper">
          <i id="left" className="fa-solid fa-angle-left"></i>
          <div className="carousel" id="slider_img">
            {[
              'https://cdn01.pharmeasy.in/dam/banner/banner/810889b6613-babycare-min.png?dim=1440x0',
              'https://cdn01.pharmeasy.in/dam/banner/banner/5e9dc201ab9-DevicesClearanceStore.jpg?dim=1440x0',
              'https://cdn01.pharmeasy.in/dam/banner/banner/ed873a24417-healthcare-min.png?dim=1440x0',
              'https://cdn01.pharmeasy.in/dam/banner/banner/1d4f09c5b46-HHbrand.png?dim=1440x0',
              'https://cdn01.pharmeasy.in/dam/banner/banner/668b87d949b-HH.jpg?dim=1440x0',
              'https://cdn01.pharmeasy.in/dam/banner/banner/c02baead885-Mamaearth.png?dim=1440x0',
              'https://cdn01.pharmeasy.in/dam/banner/banner/997d672b84e-healthfood.jpg?dim=1440x0',
              'https://cdn01.pharmeasy.in/dam/banner/banner/3c85f11a202-health-library-min.png?dim=1440x0',
              './images/slider1/s8.jpg',
            ].map((src, index) => (
              <img src={src} alt="img" draggable="false" key={index} />
            ))}
          </div>
          <i id="right" className="fa-solid fa-angle-right"></i>
        </div>
      </div>

      <div id="pop-brands">
        <h2>Popular Brands</h2>
      </div>
      <div id="last">
        {[...Array(10)].map((_, index) => (
          <img src={`./images/footer/footer${index + 1}.png`} alt="" key={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
