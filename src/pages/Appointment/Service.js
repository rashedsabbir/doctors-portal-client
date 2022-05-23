import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
        <div className="card w-96 rounded-lg shadow-2xl flex justify-content items-center text-primary-content">
  <div className="card-body">
    <h2 className="card-title text-secondary">{name}</h2>
    <p>
        {
            slots.length>0 
            ? <span>{slots[0]}</span> 
            : <span className="text-red-600">Try another date</span>
        }
    </p>
    <p>{slots.length} {slots.length>1 ? 'slots' :'slot'} available</p>
    <div className="card-actions justify-center">
    <label
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        class="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
                        >Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default Service;