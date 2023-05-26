import React from 'react';
import client1 from '/client/babyCust1.webp'
import client2 from '/client/babyCust3.jpg'
import client3 from '/client/babyCust2.webp'
import client4 from '/client/babyCust4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Client = () => {
    const clients = [
        { name: 'Sofia', image: client1 },
        { name: 'Jhon Max', image: client2 },
        { name: 'Isabella', image: client3 },
        { name: 'Noorain Sisters', image: client4 },
      ];
    return (
        <div className='mt-20 ' data-aos="fade-up-right" >

             <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">Our Happy Clients</h2>
        <div className="md:flex justify-center items-center">
          {clients.map((client) => (
            <div key={client.name} className="mr-8 text-center">
              <div className="w-60 h-60 rounded-full overflow-hidden">
                <img src={client.image} alt={client.name} className="object-cover w-full h-full" />
              </div>
              <p className="mt-2 text-2xl font-bold">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default Client;