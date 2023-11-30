import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div class="container">
                    <h3>Mohammad Alfi Masykur Nazemi</h3>
                    <p>Success is not just a goal achieved, but the result of a journey full of effort and perseverance.</p>
                    <div class="social-links">
                        <a href="https://twitter.com/AlfiNazemi" target="_blank" class="twitter"><i class="bx bxl-twitter"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100011000615248" target="_blank" class="facebook"><i target="_blank" class="bx bxl-facebook"></i></a>
                        <a href="https://www.instagram.com/alfinazemi_/" target="_blank" class="instagram"><i class="bx bxl-instagram"></i></a>
                        <a href="#" target="_blank" class="google-plus"><i class="bx bxl-github"></i></a>
                        <a href="https://www.linkedin.com/in/alfi-505774291/" target="_blank" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                    </div>
                    <div class="copyright">
                        &copy; Copyright <strong><span>Alfi's Portfolio</span></strong>. All Rights Reserved | This website is powered by a modified template
                    </div>
                    
                    <div class="credits">
                        {/* All the links in the footer should remain intact. */}
                        {/* You can delete the links only if you purchased the pro version. */}
                        {/* Licensing information: [license-url] */}
                        {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ */}
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer