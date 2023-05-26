import React from 'react';
import toy1 from '/toy gallery/bear.jpg'
import toy2 from '/toy gallery/cats.jpg'
import toy3 from '/toy gallery/dino.jpg'
import toy4 from '/toy gallery/elephant.jpg'
import toy5 from '/toy gallery/horse.jpg'
import toy6 from '/toy gallery/lion.jpg'
import toy7 from '/toy gallery/teddy.png'
import toy8 from '/toy gallery/tiger.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
    const toyImages = [
        toy1,
        toy2,
        toy3,
        toy4,
        toy5,
        toy6,
        toy7,
        toy8,
    ];

    return (
        <section className="py-8 bg-gray-100" data-aos="fade-left">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                    Animal Toy Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {toyImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden h-60 rounded-lg shadow"
                        >
                            <img
                                src={image}
                                alt={`Toy ${index + 1}`}
                                className="object-cover object-center w-full h-full transition duration-300 transform hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
