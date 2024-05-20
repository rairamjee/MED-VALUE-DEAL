import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './healthblog.css';

import img2 from './Images/img2.png';
import img3 from './Images/img3.png';
import img6 from './Images/img6.png';
import img8 from './Images/img8.png';
import img9 from './Images/img9.png';
import img10 from './Images/img10.png';
import img11 from './Images/img11.png';
import img12 from './Images/img12.png';
import img13 from './Images/img13.png';
import img14 from './Images/img14.png';

const HealthBlog = () => {
  return (
    <div>
      <div className="container1">
        <div className="health-carousel" style={{ height: '100px' }}>
          <Carousel>
            <Carousel.Item>
              <img src="https://plus.unsplash.com/premium_photo-1661317288946-157b70e2edab?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 imgs" alt="Healthy Diet" />
              <Carousel.Caption>
                <h4>Healthy Diet</h4>
                <p>Eating a healthy diet helps you in keeping your health in good condition.....</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://plus.unsplash.com/premium_photo-1661761629601-bf9436d058d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Mental Health" />
              <Carousel.Caption>
                <h4>Mental Health</h4>
                <p>It has been proven in researches that YOGA can help us in overcoming mental health issues.....</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://plus.unsplash.com/premium_photo-1661317288946-157b70e2edab?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="Dengue-The Rising Threat" />
              <Carousel.Caption>
                <h4>Dengue-The Rising Threat</h4>
                <p>India is reporting a large number of dengue cases. The Health Ministry has laid down advisory for states.....</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="container2">
        <h2>EDITOR'S PICK</h2>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="card mg">
                <img src={img2} className="card-img-top image" alt="Health Diets" />
                <div className="card-body">
                  <p className="card-text">Here are some of the Health Diets you should follow...</p>
                  <a href="#" className="btn btn-primary">Read More {"->"}</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mg">
                <img src={img3} className="card-img-top image" alt="Mosquito Bites" />
                <div className="card-body">
                  <p className="card-text">Keeping away from the bites of Mosquitoes...</p>
                  <a href="#" className="btn btn-primary">Read More {"->"}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="card mg">
                <img src={img8} className="card-img-top image" alt="Cocaine Addiction" />
                <div className="card-body">
                  <p className="card-text">Brazil scientists developing new 'vaccine' for cocaine addiction...</p>
                  <a href="#" className="btn btn-primary">Read More {"->"}</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card mg">
                <img src={img6} className="card-img-top image" alt="MDMA Therapy" />
                <div className="card-body">
                  <p className="card-text">MDMA-assisted therapy is effective for treating moderate to severe PTSD...</p>
                  <a href="#" className="btn btn-primary">Read More {"->"}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="imp">
          <h2><b>STRENGTH TRAINING WHICH YOU SHOULD FOLLOW IN OUR DAILY LIFE</b></h2>
          <p>Strength training is a cornerstone of a healthy lifestyle, offering a myriad of physical and mental benefits. Whether you're aiming to build muscle, increase endurance, or simply enhance your overall well-being, incorporating the right type of strength training into your daily life is crucial...</p>
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <img src={img9} className="card-img-top image" alt="Strength Training" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <img src={img10} className="card-img-top image" alt="Strength Training" />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <p>Resistance training, which includes the use of resistance bands or cables, is a versatile and joint-friendly option. This form of strength training helps improve muscle tone, flexibility, and joint stability. It's particularly beneficial for individuals recovering from injuries or those seeking a low-impact alternative to traditional weightlifting...</p>
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <img src={img11} className="card-img-top image" alt="Resistance Training" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <img src={img12} className="card-img-top image" alt="Resistance Training" />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <p>The benefits of strength training extend beyond the physical realm. Regular resistance exercise has been linked to improved mental health, including reduced symptoms of anxiety and depression. The endorphin release during strength training contributes to an elevated mood and increased energy levels...</p>
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <img src={img13} className="card-img-top image" alt="Strength Training Benefits" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <img src={img14} className="card-img-top image" alt="Strength Training Benefits" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthBlog;
