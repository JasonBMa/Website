import Navbar from '../Components/Navbar';
import Me from '../Components/Graphics/Images/SlightSideView.jpg';

function Contact() {
  return (
    <>
      <Navbar />
      <h1 className="block text-7xl text-green-500 font-bold text-center my-8">Contact me here</h1>
      <div className="flex justify-center">
        <div className="rounded border-4 border-green-300 p-4">
          <div className="flex">
            <img className="w-28 h-28 p-1 border-2 border-green-300 mr-4" src={Me} alt="Jason Ma"/>
            <div className="font-thin">
              <p className="text-xl">Contact:</p>
              <p><a href="mailto:jasonbma317@gmail.com" rel="noreferrer" target="_blank">jasonbma317@gmail.com</a></p>
              <p><a href="https://www.linkedin.com/in/jason-b-ma/" rel="noreferrer" target="_blank">linkedin.com/in/jason-b-ma/</a></p>
              <p><a href="https://www.github.com/JasonBMa" rel="noreferrer" target="_blank">github.com/JasonBMa</a></p>

            </div>
          </div>
            <p className="text-2xl">Jason Ma</p>
            <div className="flex justify-between">
              <p className="text-lg italic">SWE</p>
            </div>
          <div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;