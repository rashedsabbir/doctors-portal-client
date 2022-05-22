import React from 'react';
import treatment from '../../assets/images/treatment.png'

const Care = () => {
    return (
        <div className='flex flex-col lg:flex-row  justify-center items-center mb-28'>
            <div className='flex-1 '>
                <img className='max-w-sm img-responsive rounded-lg shadow-2xl mx-auto' src={treatment} alt="" />
            </div>
            <div className='flex-1 px-10 py-10 '>
                <h3 className='text-xl text-primary font-bold mb-5'>Appointment</h3>
                <h2 className='text-3xl mb-5'>Make an appointment Today</h2>
                <p className=' mb-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </div>
    );
};

export default Care;