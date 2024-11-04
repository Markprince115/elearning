import React from 'react';
import STUDENT from '../../public/assets/images/students.jpg';

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${STUDENT.src})`, // Accessing `.src` for Next.js image import
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
      className="absolute top-0 bg-neutral-800 bg-blend-overlay bg-no-repeat w-full h-screen -z-10"
    >
      {/* hero title */}
      <div className='mt-[12rem]'>
        <h2 className='text-neutral-50 lg:text-6xl font-bold text-center'>Unlock Potential, <br />Ignite Passion, <br />Transform Learning.</h2>

        <div className='text-center'>
            <button className='text-center px-14 py-2 border border-neutral-100 text-neutral-50 text-xl mt-5'>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
