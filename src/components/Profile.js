import React from "react";
import spineSketch from '../assets/spineSketch.jpg';
import spineLogo from '../assets/spineLogo.png';

export default function Profile() {

    return (
        <div>
            <section id="profile">
                <div className="section__pic-container">
                    {/* <img src={spineSketch} alt="spine sketch" /> */}
                    <img src={spineLogo} alt="spine logo" />
                </div>

                <div className="section__text">
                    
                    <h1 className="title">Philadelphia Medcare</h1>
                    <p className="section__text__p1">Chiropractor for Injury Recovery and Pain Relief</p>
                    <p className="section__text__p2">Call us today! <br /> <span id="phone" >(215) 329-6136</span></p>
                    <div className="btn-container">
                        <button className="btn btn-color-2" onClick={() => (window.location.href = './#location')}>Our Location</button>
                        <button className="btn btn-color-1" onClick={() => (window.location.href = './#contact')}>Contact</button>
                    </div>
                </div>        
             </section>
        </div>
    );
}