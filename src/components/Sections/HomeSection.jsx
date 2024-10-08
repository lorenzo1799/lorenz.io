import Spline from "@splinetool/react-spline";
import { useRef } from "react";
import PropTypes from "prop-types";

const HomeSection = ({ scrollToSection }) => {
  const splineRef = useRef();

  return (
    <section className="w-screen h-screen flex-shrink-0 snap-start relative">
      <div className="container mx-auto px-4 h-full flex items-center xs:h-screen">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="xs:mt-28 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-16 xs:text-center sm:text-left md:w-1/2 mb-8 md:mb-0 z-10 md:left-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-slate-100">
              Frontend Developer
            </h1>
            <p className="text-xl mb-6 text-gray-300">
              Forging robust digital solutions with code and innovation.
            </p>
            <button
              className="bg-gray-700 text-white font-medium px-8 py-4 rounded-full hover:bg-gray-600 transition duration-300 text-lg"
              onClick={() => scrollToSection(1)}
              ref={splineRef}
            >
              Works
            </button>
          </div>

          <div className="md:w-[900px] md:top-[0px] h-[500px] md:h-[500px] z-0 relative xs:h-[400px] xs:mr-20 xs:w-[500px] md:scale-150 xs:scale-125 xs:bottom-16">
            <Spline
              scene="https://prod.spline.design/lPVd1X4CHil3zkUI/scene.splinecode"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

HomeSection.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default HomeSection;
