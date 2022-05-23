import React from 'react';
import bg from '../../assets/images/bg.png'
import Chair from '../../assets/images/chair.png'

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
    
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }} className="hero min-h-screen">
            
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={Chair} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <DayPicker
       mode="single"
       selected={date}
       onSelect={setDate}
       
      />
    
    </div>
  </div>
</div>

    );
};

export default AppointmentBanner;