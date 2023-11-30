import React from 'react'

const Contact = () => {
    return (
        <>
            <section id="contact" class="contact">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Contact</h2>
                    </div>

                    <div class="row mt-1">
                        <div class="col-lg-6 d-flex align-items-center justify-content-center">
                            <img src="img/logoBawah.png" class="img-fluid" width={250} />
                        </div>

                        <div class="col-lg-4">
                            <div class="info">
                                <div class="address">
                                    <i class="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>Malang City, East Java, 65144</p>
                                </div>

                                <div class="email">
                                    <i class="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>alfinnazemi@gmail.com</p>
                                </div>

                                <div class="phone">
                                    <i class="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>081329775433</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact