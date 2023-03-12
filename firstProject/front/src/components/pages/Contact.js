import React from 'react';

function Contact() {
    return ( 
        <>
        <section className="contact-area pb-30" background="assets/img/bg/bg-map.png">
        
        <div className="container container-1430 mt-200">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="contact text-center mb-30">
                        <i className="fas fa-envelope"></i>
                        <h3>Mail Here</h3>
                        <p>Admin@BasicTheme.com</p>
                        <p>Info@Themepur.com</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="contact text-center mb-30">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>Visit Here</h3>
                        <p>27 Division St, New York, NY 10002,
                            Jaklina, United Kingpung</p>
                    </div>
                </div>
                <div className="col-xl-4  col-lg-4 col-md-4 ">
                    <div className="contact text-center mb-30">
                        <i className="fas fa-phone"></i>
                        <h3>Call Here</h3>
                        <p>+8 (123) 985 789</p>
                        <p>+787 878897 87</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="contact-form-area grey-bg pt-100 pb-100">
        <div className="container container-1430">
            <div className="form-wrapper">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-8">
                        <div className="section-title mb-55">
                            <p><span></span> Anything On your Mind</p>
                            <h1>Estimate Your Idea</h1>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-3 d-none d-xl-block ">
                        <div className="section-link mb-80 text-right">
                            <a className="btn theme-btn" href="tel:+8123985789"><i className="fas fa-phone"></i> make call</a>
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <form id="contact-form" action="#">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-box user-icon mb-30">
                                    <input type="text" name="name" placeholder="Your Name"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-box email-icon mb-30">
                                    <input type="text" name="email" placeholder="Your Email"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-box phone-icon mb-30">
                                    <input type="text" name="phone" placeholder="Your Phone"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-box subject-icon mb-30">
                                    <input type="text" name="subject" placeholder="Your Subject"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-box message-icon mb-30">
                                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
                                </div>
                                <div className="contact-btn text-center">
                                    <button className="btn theme-btn" type="submit">get action</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <p className="ajax-response text-center"></p>
                </div>
            </div>
        </div>
    </section>

    <section className="contact-form-area pt-100 pb-100">
        <div className="container container-1430">
            <div className="row  service-row">
                <div className="col-md-4">
                    <div className="service-box service-box-2">
                        <div className="service-logo text-center">
                            <img src="img/logo/icon-1.jpg" alt="" className="service-img" />
                        </div>
                        <div className="service-content text-center">
                            <h6 className="title">Creative Design</h6>
                            <p>Duis autem vel eum iriure dolor in hendrerit vulputate <br/> velit esse molestie consequat.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="service-box service-box-2">
                        <div className="service-logo text-center">
                            <img src="img/logo/icon-2.jpg" alt="" className="service-img" />
                        </div>
                        <div className="service-content text-center">
                            <h6 className="title">Strong Branding</h6>
                            <p>Duis autem vel eum iriure dolor in hendrerit vulputate <br/> velit esse molestie consequat.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="service-box service-box-2">
                        <div className="service-logo text-center">
                            <img src="img/logo/icon-3.jpg" alt="" className="service-img" />
                        </div>
                        <div className="service-content text-center">
                            <h6 className="title">Project Development</h6>
                            <p>Duis autem vel eum iriure dolor in hendrerit vulputate <br/> velit esse molestie consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
     );
}

export default Contact;