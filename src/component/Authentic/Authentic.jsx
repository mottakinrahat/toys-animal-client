import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import authentic1 from '/sliders/authentic.jpg';
import authentic2 from '/sliders/foam.jpg';
import authentic3 from '/sliders/plastic.jpg';
import authentic4 from '/sliders/wood.jpg';

const Authentic = () => {
    return (
        <div className='w-11/12 mx-auto my-10' data-aos="fade-down-right">
            <h2 className="text-3xl md:text-4xl mb-10 font-bold text-center text-gray-800 mb-4">Our Authentic Products</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 justify-between gap-4 '>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={authentic1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Authentic Animal Toys!</h2>
                        <p>Authentic animal toys bring joy and education with lifelike details, quality materials, and accurate representations of different species, fostering imagination and learning in children.</p>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={authentic2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Soft animal toys!!</h2>
                        <p>Soft animal toys provide comfort and companionship, featuring plush materials and huggable designs. They are perfect for cuddling, nurturing empathy, and igniting imaginative play in children.</p>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={authentic3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">non-Plastic Animal toys!!!</h2>
                        <p>
Healthy non-plastic animal toys promote eco-friendly play with sustainable materials like wood or organic fabrics. They are free from harmful chemicals, encouraging safe and natural play experiences for children.</p>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={authentic4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wood made Toys!!!</h2>
                        <p>Healthy wood-made toys offer natural and sustainable play options. They are durable, non-toxic, and inspire creativity and fine motor skills development while providing a tactile and sensory experience for children.</p>
                        <div className="card-actions justify-end">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authentic;