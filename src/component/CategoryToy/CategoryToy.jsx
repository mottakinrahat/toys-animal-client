import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleCategory from '../SingleCategory/SingleCategory';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CategoryToy = () => {
  const [cToys, setcToys] = useState([]);
  const [activeTab, setActiveTab] = useState('teddy');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    fetch(`https://toys-animal-assignment11-server.vercel.app/alltoys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => {
        setcToys(data);
      });
  }, [activeTab]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-up" className="mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        Shop by Category
      </h2>
      <Tabs>
        <TabList className="flex justify-center mb-4">
          <Tab
            className={`${
              activeTab === 'teddy' ? 'active-tab' : 'inactive-tab'
            } btn bg-gradient-to-r border-none from-cyan-500 to-blue-500 text-white  mr-2`}
            onClick={() => handleTabClick('teddy')}
          >
            Teddy
          </Tab>
          <Tab
            className={`${
              activeTab === 'cat' ? 'active-tab' : 'inactive-tab'
            }  btn bg-gradient-to-r border-none from-cyan-500  text-white to-blue-500  mr-2`}
            onClick={() => handleTabClick('cat')}
          >
            Cat
          </Tab>
          <Tab
            className={`${
              activeTab === 'bird' ? 'active-tab' : 'inactive-tab'
            }  btn bg-gradient-to-r border-none from-cyan-500 to-blue-500  text-white `}
            onClick={() => handleTabClick('bird')}
          >
            Bird
          </Tab>
        </TabList>

        <div className="grid sm:ml-10 md:grid-cols-3 justify-between gap-4">
          {cToys.slice(0, 3).map((toy) => (
            <SingleCategory key={toy._id} toy={toy} />
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default CategoryToy;
