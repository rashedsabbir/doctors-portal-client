import React from 'react';
import Chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-gradient-to-tl from-slate-50 to-slate-100  h-96 w-full relative" >
            <img src={Chair} class="w-full h-full absolute mix-blend-overlay rounded-lg mx-6" />
  <div class="hero-content flex-col lg:flex-row-reverse px-12">
    <img src={Chair} class="max-w-sm rounded-lg shadow-2xl mx-6" />
    {/* <div class=" " style="background-image: url(../../assets/images/chair.png)"></div> */}
    <div class="mx-10">
      <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;