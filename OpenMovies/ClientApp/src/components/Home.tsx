import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
    <>
        <div id="myCarousel" className="carousel slide pointer-event" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item carousel-item-next carousel-item-start">
                    <div className="col-xxl-8 px-4 py-5" style={{ backgroundImage: "url('http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider-bg.jpg')"}} >
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src="https://getbootstrap.com/docs/5.2/examples/heroes/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" style={{ maxWidth: "220px"}} loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <h1 style={{ color: "white" }} className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                                <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-xxl-8 px-4 py-5" style={{ backgroundImage: "url('http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider-bg.jpg')"}} >
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src="https://getbootstrap.com/docs/5.2/examples/heroes/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" style={{ maxWidth: "220px"}} loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <h1 style={{ color: "white" }} className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                                <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item active carousel-item-start">
                    <div className="col-xxl-8 px-4 py-5" style={{ backgroundImage: "url('http://busterhtml.mbkip3ms9u-e92498n216kr.p.temp-site.link/images/uploads/slider-bg.jpg')"}} >
                        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                            <div className="col-10 col-sm-8 col-lg-6">
                                <img src="https://getbootstrap.com/docs/5.2/examples/heroes/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" style={{ maxWidth: "220px"}} loading="lazy" />
                            </div>
                            <div className="col-lg-6">
                                <h1 style={{ color: "white" }} className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                                <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    <section className="popular-movies">
        <div className="container">
            <div className="row">
                <div className="col" style={{ maxWidth: "220px"}}>
                    <div className="card-body">
                        <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/3-300x450.jpg" alt="PosterPath" style={{ maxWidth: "150px"}} />
                        <h4 className="card-title">Card title</h4>
                    </div>
                </div>
                <div className="col" style={{ maxWidth: "220px"}}>
                    <div className="card-body">
                        <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/43-only-lovers-left-alive-300x450.jpg" alt="PosterPath" style={{ maxWidth: "150px"}} />
                        <h4 className="card-title">Card title</h4>
                    </div>
                </div>
                <div className="col" style={{ maxWidth: "220px"}}>
                    <div className="card-body">
                        <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/33-a-woman-under-the-influence-300x450.jpg" alt="PosterPath" style={{ maxWidth: "150px"}} />
                        <h4 className="card-title">Card title</h4>
                    </div>
                </div>
                <div className="col" style={{ maxWidth: "220px"}}>
                    <div className="card-body">
                        <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/49-the-sure-thing-300x450.jpg" alt="PosterPath" style={{ maxWidth: "150px"}} />
                        <h4 className="card-title">Card title</h4>
                    </div>
                </div>
            </div>
        </div>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
            </li>
        </ul>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="container">
                    <div className="row">
                        <div className="col" style={{ maxWidth: "220px"}}>
                            <div className="card-body">
                                <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/3-300x450.jpg" alt="PosterPath" style={{ maxWidth: "150px"}} />
                                <h4 className="card-title">Card title</h4>
                            </div>
                        </div>
                        <div className="col" style={{ maxWidth: "220px"}}>
                            <div className="card-body">
                                <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/43-only-lovers-left-alive-300x450.jpg" alt="PosterPath" style={{ maxWidth: "150px"}} />
                                <h4 className="card-title">Card title</h4>
                            </div>
                        </div>
                        <div className="col" style={{ maxWidth: "220px"}}>
                            <div className="card-body">
                                <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/33-a-woman-under-the-influence-300x450.jpg" alt="PosterPath" style={{ maxWidth: "150px"}} />
                                <h4 className="card-title">Card title</h4>
                            </div>
                        </div>
                        <div className="col" style={{ maxWidth: "220px"}}>
                            <div className="card-body">
                                <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/49-the-sure-thing-300x450.jpg" alt="PosterPath" style={{ maxWidth: "150px"}} />
                                <h4 className="card-title">Card title</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="container">
                    <div className="row">
                        <div className="col" style={{ maxWidth: "220px"}}>
                            <div className="card-body">
                                <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/3-300x450.jpg" alt="PosterPath" style={{ maxWidth: "150px"}} />
                                <h4 className="card-title">Card title</h4>
                            </div>
                        </div>
                        <div className="col" style={{ maxWidth: "220px"}}>
                            <div className="card-body">
                                <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/43-only-lovers-left-alive-300x450.jpg" alt="PosterPath" style={{ maxWidth: "150px"}} />
                                <h4 className="card-title">Card title</h4>
                            </div>
                        </div>
                        <div className="col" style={{ maxWidth: "220px"}}>
                            <div className="card-body">
                                <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/33-a-woman-under-the-influence-300x450.jpg" alt="PosterPath" style={{ maxWidth: "150px"}} />
                                <h4 className="card-title">Card title</h4>
                            </div>
                        </div>
                        <div className="col" style={{ maxWidth: "220px"}}>
                            <div className="card-body">
                                <img src="https://vodi.madrasthemes.com/main/wp-content/uploads/sites/2/2019/04/49-the-sure-thing-300x450.jpg" alt="PosterPath" style={{ maxWidth: "150px"}} />
                                <h4 className="card-title">Card title</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">

            </div>
        </div>
        </section>
    </>

);

export default connect()(Home);
