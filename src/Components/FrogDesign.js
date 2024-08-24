import React from 'react';

import Draft from './Designs/OFAFrogDesign/OFA_Frog_Icon_Draft.jpg'
import Digital from './Designs/OFAFrogDesign/OFA_Frog_Icon_Digital.png'
import Print from './Designs/OFAFrogDesign/OFA_Frog_Icon_Printed.jpg'

const images = [Draft, Digital, Print];

function FrogDesign() {
  return (
    <>
      <h1 className="mt-4 underline text-3xl font-bold text-center text-green-500">OFA Frog Design Process</h1>
      <div className="mt-2 flex">
          <div className="flex flex-wrap justify-around items-center pb-6 w-1/2">
            {images.map((image, index) => {
              return(
                <div className="bg-gray-100 border-4 shadow-lg shadow-black">
                  <img className="max-w-full max-h-full w-auto h-52 object-contain"src={image} alt="Frog Design"/>
                </div>
              );
            })}
          </div>
          <div className="w-1/2">
            <h2 className="font-bold">Tasked with designing Merch for the my internship</h2>
            <ol className="list-inside list-disc justify-between">
              <li>Designed a frog icon on paper</li>
              <li>Implemented digitally, smoothing out lines and in high definition</li>
              <li>Printed on shirt, distribute</li>
              <li>Flex</li>
            </ol>
          </div>
      </div>
    </>
  );
}

export default FrogDesign;