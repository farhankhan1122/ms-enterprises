import React from "react";
import "./LogoSlider.css";   // styles below

// const logos = [
//     '/icons/Haier.jpg',
//     '/icons/Haier.jpg',
//     '/icons/Haier.jpg',
//     '/icons/Haier.jpg'
//   // add or reorder icons as needed
// ];

const logos = [
  process.env.PUBLIC_URL + '/icons/Haier.jpg',
  process.env.PUBLIC_URL + '/icons/blue-star.png',
  process.env.PUBLIC_URL + '/icons/carrier-logo.svg',
  process.env.PUBLIC_URL + '/icons/Havells_Logo.svg',
  process.env.PUBLIC_URL + '/icons/Lloyd.jpg',
  process.env.PUBLIC_URL + '/icons/Hitachi.jpg',
  process.env.PUBLIC_URL + '/icons/Haier.jpg',
  process.env.PUBLIC_URL + '/icons/blue-star.png',
  process.env.PUBLIC_URL + '/icons/carrier-logo.svg',
  process.env.PUBLIC_URL + '/icons/Havells_Logo.svg',
  process.env.PUBLIC_URL + '/icons/Lloyd.jpg',
  process.env.PUBLIC_URL + '/icons/Hitachi.jpg',
  // …
];

export default function LogoSlider() {
  // duplicate the list so the track looks continuous
  const track = [...logos, ...logos];

  return (
    <div className="p-[50px] max-md:p-[20px]">
      <section class="company">
        <div class="container m-auto">
          <div class="flex items-center justify-center">
            <div class="sec-title">
              <h5 class="text-center pb-4">Brands we service and repair</h5>
            </div>
          </div>
        </div>
      </section>
      <div className="logo-slider">
        <div className="logo-track">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="logo" className="logo-img" />
          ))}
        </div>
      </div>
    </div>
  );
}
