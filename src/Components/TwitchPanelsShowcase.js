import React from 'react';
import Donate from './Designs/TwitchPanels/Donate.png';
import Meapv2 from './Designs/TwitchPanels/Meapv2.png';
import Setupv2 from './Designs/TwitchPanels/Setupv2.png';

const images = [Donate, Meapv2, Setupv2];
function TwitchPanelsShowcase() {
  return (
    <>
      <h1 className="underline text-3xl font-bold text-center text-green-500">Art</h1>
      <div className="flex flex-wrap pt-5 justify-around items-center pb-4">
        {images.map((image, index) => {
          return(
            <div className="bg-gray-100 border-4 shadow-lg shadow-black">
              <img className="max-w-full max-h-full w-auto h-32 object-contain"src={image} alt="Donate Panel"/>
            </div>
          );
        })}

      </div>
      <p className="text-center italic">Created with Photoshop, and art from a friend to create graphic panels.</p>
    </>
  );
}

export default TwitchPanelsShowcase;