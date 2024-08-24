import React from 'react';
import ZBanana from './Designs/Art/BananaMan_Cartoon.png';

const images = [ZBanana];
function Art() {
  return (
    <>
      <h1 className="underline text-3xl font-bold text-center text-green-500">Twitch Panels Showcase</h1>
      <div className="flex flex-wrap pt-5 justify-around items-center pb-4">
        {images.map((image, index) => {
          return(
            <div className="bg-gray-100 border-4 shadow-lg shadow-black">
              <img className="max-w-full max-h-full w-auto h-32 object-contain"src={image} alt="Donate Panel"/>
            </div>
          );
        })}

      </div>
      <p className="text-center italic">Don't really draw anymore, but here's this lol</p>
    </>
  );
}

export default Art;