import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast } from 'react-bootstrap';
import TypedText from '../JS/TypedText';

const Hero = () => {

    return (
        <>
            <section id="hero" class="d-flex flex-column justify-content-center">

                <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">
                </div>
                <div class="container" data-aos="zoom-in" data-aos-delay="100">

                    <h1>Mohammad Alfi Masykur Nazemi</h1>
                    <p>I'm <span class="typed"><TypedText /></span></p>
                    <div class="social-links">
                        <a href="https://twitter.com/AlfiNazemi" target="_blank" class="twitter"><i class="bx bxl-twitter"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100011000615248" target="_blank" class="facebook"><i target="_blank" class="bx bxl-facebook"></i></a>
                        <a href="https://www.instagram.com/alfinazemi_/" target="_blank" class="instagram"><i class="bx bxl-instagram"></i></a>
                        <a href="#" target="_blank" class="google-plus"><i class="bx bxl-github"></i></a>
                        <a href="https://www.linkedin.com/in/alfi-505774291/" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero