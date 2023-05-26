import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import CategoryToy from '../CategoryToy/CategoryToy';
import Client from '../Client/Client';
import Authentic from '../Authentic/Authentic';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);
  useEffect(()=>{
    document.title="AnimalFunLand | home"
  },[])

  return (
    <div className='mx-5'>
      <Banner />
      <Gallery />
      <CategoryToy />
      <Client />
      <Authentic />
    </div>
  );
};

export default Home;
