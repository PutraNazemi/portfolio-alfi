import React from 'react';
import ProgressBar from '../JS/ProgressBar';

const Skills = () => {

    return (
        <>
            <section id="skills" class="skills section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>
                            I am confident that this combination of skills makes a positive contribution to every project and work
                            situation I encounter. Below is an illustration of the percentage of skills that I have.
                        </p>
                    </div>

                    <div className="row skills-content">
                        <div className="col-lg-4">
                            <ProgressBar skill="Design" percentage={95} />
                            <ProgressBar skill="Editing" percentage={95} />
                            <ProgressBar skill="Videography and Photography" percentage={95} />
                        </div>

                        <div className="col-lg-4">
                            <ProgressBar skill="PHP" percentage={80} />
                            <ProgressBar skill="WordPress/CMS" percentage={90} />
                            <ProgressBar skill="Photoshop" percentage={55} />
                        </div>

                        <div className="col-lg-4">
                            <ProgressBar skill="Codeigniter" percentage={75} />
                            <ProgressBar skill="React" percentage={45} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Skills