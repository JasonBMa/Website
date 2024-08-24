import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import TwitchPanelsShowcase from '../Components/TwitchPanelsShowcase';
import FrogDesign from '../Components/FrogDesign';
import Art from '../Components/Art';
function Design() {
  return (
    <>
      <Navbar />
      <h1 className="block text-7xl text-black font-bold text-center my-8">Designs and Art</h1>
      <div className="flex  justify-center">
        <div className="w-3/4">
          <TwitchPanelsShowcase />
          <FrogDesign />
          <Art />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Design;