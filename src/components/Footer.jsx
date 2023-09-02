import React from 'react'
import '../App.css'
// import '../fonts/Playball-Regular.ttf'

const Footer = () => {
    return (
        <div>
            <div className='footer p-10 bg-red-500 text-base-content min-h-screen'>
                <div>
                    <h1 className='font-bold font-playball text-2xl'>Pinky Nails & Spa</h1>
                    <p>WALK-IN WELCOME</p>
                </div>
                <div>
                    <h1 className='font-bold font-hip text-2xl'>Contact Us</h1>
                    <div>
                        <p>Address</p>
                    </div>
                    <div>
                        <p>Phone</p>
                    </div>
                    <div>
                        <p>Email</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold font-apollo text-2xl'>Location</h1>
                </div>
            </div>
        </div>

    )
}

export default Footer