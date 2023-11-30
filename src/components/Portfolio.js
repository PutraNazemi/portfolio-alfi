import React from 'react'

const Portfolio = () => {
    return (
        <>
            <section id="portfolio" class="portfolio section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Portfolio</h2>
                        <p>I built this portfolio as a platform to share my projects that reflect creativity, technical skills, and commitment to quality. Each project reflects my dedication to compelling aesthetics, strong visuals, and exceptional user experiences. With artistry in every detail, I strive to create works that are not only aesthetic, but also convey a deep and memorable message</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                            <ul id="portfolio-flters">
                                <li data-filter="*" class="filter-active">All</li>
                                <li data-filter=".filter-design">Design</li>
                                <li data-filter=".filter-photo">Photohraphy</li>
                                <li data-filter=".filter-video">Videography</li>
                                <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div>

                    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        <div class="col-lg-4 col-md-6 portfolio-item filter-video">
                            <div class="portfolio-wrap">
                                <img src="img/portfolio/Pf1.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Videography</h4>
                                    <p>Aftermovie</p>
                                    <div class="portfolio-links">
                                        <a href="https://youtu.be/nLpYTM6_p5A" target="blank" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-video">
                            <div class="portfolio-wrap">
                                <img src="img/portfolio/Pf2.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Videography</h4>
                                    <p>Aftermovie</p>
                                    <div class="portfolio-links">
                                        <a href="https://youtu.be/4JjWSmLr6Jo" target="blank" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-video">
                            <div class="portfolio-wrap">
                                <img src="img/portfolio/Pf3.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Videography</h4>
                                    <p>Aftermovie</p>
                                    <div class="portfolio-links">
                                        <a href="https://youtu.be/Jhl_WJzVx2c" target="blank" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-video">
                            <div class="portfolio-wrap">
                                <img src="img/portfolio/Pf4.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Videography</h4>
                                    <p>Cinematic Graduation</p>
                                    <div class="portfolio-links">
                                        <a href="" target="blank" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-video">
                            <div class="portfolio-wrap">
                                <img src="img/portfolio/Pf5.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Videography</h4>
                                    <p>Cinematic Graduation</p>
                                    <div class="portfolio-links">
                                        <a href="" target="blank" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-video">
                            <div class="portfolio-wrap">
                                <img src="img/portfolio/Pf6.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Videography</h4>
                                    <p>Cinematic Graduation</p>
                                    <div class="portfolio-links">
                                        <a href="" target="blank" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                            <div class="portfolio-wrap">
                                <img src="img/portfolio/Pj1.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Design</h4>
                                    <p>Packaging Design</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                            <div class="portfolio-wrap">
                                <img src="img/portfolio/Pj2.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Design</h4>
                                    <p>ID Card</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 portfolio-item filter-design">
                            <div class="portfolio-wrap">
                                <img src="img/portfolio/Pj3.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Design</h4>
                                    <p>Membership Card</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Portfolio