import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import animalFunLand from '/animalfunland.png';

const Banner = () => {
    return (
        <div className='sm:ml-4'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("/secondbackground.jpg")` }} data-aos="fade-right">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w">
  <h2 className='text-6xl font-semibold'>Discover fun with <br/></h2>
 
 <img src={animalFunLand} className='md:ml-80 lg:ml:80' alt="" />

      <p className="mb-5">
Animal Fun Land is an exciting website that offers engaging and educational content about animals. From virtual tours and games to informative articles, it's a fun online destination for animal enthusiasts of all ages.</p>
      <button className="btn bg-white text-yellow-700 border-none">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;