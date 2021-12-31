import React from "react";
import { Link } from 'react-router-dom';

function homePage(){
    return(
        <div>
  <section className="home">
    <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="assets/images/logo-white.png" className="w-80" alt />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#courses">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviews">Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Signup * login</a>
            </li>
            <div className="w-75 m-auto">
              <input type="text" placeholder="search..." className="form-control" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <div className="setting position-fixed rounded-end ">
      <i className="fas fa-cog text-white" />
    </div>
    <div className="cap">
      <div className="w-15 d-flex justify-content-center align-items-center text-center">
        <div className="cap1 mt-5">
          <h1>We Build <br />
            your mind
          </h1>
        </div>
      </div>
    </div>
    <div className="scroll position-absolute border border-2 border-white rounded-pill">
    </div>
    {/* <div id="Carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="assets/images/slideshow-1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="assets/images/slideshow-2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="assets/images/slideshow-3.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#Carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#Carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
  </section>
  {/* -----------------------------End Home */}
  {/* -----------------------------Start About */}
  <section className="about" id="about">
    <div className=" text-center position-relative d-flex justify-content-center align-items-center">
      <h2 className=" mb-0 position-absolute">About Us</h2>
      <h3 className=" mb-0">A</h3>
    </div>
    <br />
    <p className="text-center w-50 m-auto">Pellentesque elementum libero enim, eget gravida nunc laoreet et. Nullam ac
      enim
      auctor, fringilla risus at, imperdiet turpis. Pellentesque elementum libero enim.</p>
    <br />
    <br />
    <div className="container">
      <div className="row">
        <div className="col-md-7 ">
          <p>Pellentesque vel elit egestas, pretium est ac, convallis orci. Vivamus sem nisl, tristique vel
            fringilla
            vitae, efficitur at eros. Duis aliquet aliquet pharetra. Suspendisse bibendum erat quis gravida
            pulvinar. Phasellus vel eros porta, blandit dui ac, viverra felis.</p>
          <p>Nunc placerat iaculis pulvinar. Nullam auctor mauris sed urna posuere volutpat. Mauris ut dui sit
            amet elit fermentum fermentum. Fusce tincidunt diam at bibendum porta.</p>
          <p>Aliquam nunc felis, sagittis eu purus non, interdum vehicula urna. Vivamus congue diam sapien, eu
            pellentesque ipsum ultricies quis.</p>
        </div>
        <div className="col-md-5">
          <div className="skills">
            <div className="bar">
              <div className="progress-heading">
                <p className="progress-title">MARKETING</p>
                <div className="progress-value" style={{"width":"80%","opacity":"1"}}>80%</div>
              </div>
              <div className="progress">
                <div className="progress-bar" data-value={80} style={{"width":"80%"}} />
              </div>
            </div>
            <div className="bar">
              <div className="progress-heading">
                <p className="progress-title">Web Design</p>
                <div className="progress-value" style={{"width":"95%","opacity":"1"}}>95%</div>
              </div>
              <div className="progress">
                <div className="progress-bar" data-value={95} style={{"width":"95%"}} />
              </div>
            </div>
            <div className="bar">
              <div className="progress-heading">
                <p className="progress-title">Graphic Design</p>
                <div className="progress-value" style={{"width":"85%","opacity":"1"}}>85%</div>
              </div>
              <div className="progress">
                <div className="progress-bar" data-value={85} style={{"width":"85%"}} />
              </div>
            </div>
            <div className="bar">
              <div className="progress-heading">
                <p className="progress-title">Development</p>
                <div className="progress-value" style={{"width":"70%","opacity":"1"}}>70%</div>
              </div>
              <div className="progress">
                <div className="progress-bar" data-value={70} style={{"width":"70%"}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br />
  <br />
  {/* ----------------------------------End About */}
  {/* -----------------------------------Start Team */}
  <section className="Team back" id="team">
    <div className=" text-center position-relative d-flex justify-content-center align-items-center">
      <h2 className=" mb-0 position-absolute">Our Team</h2>
      <h3 className=" mb-0">O</h3>
    </div>
    <br />
    <div className="team">
      <p className="text-center w-50 m-auto">Vestibulum ante ipsum primis in faucibus orci. Morbi tincidunt urna
        imperdiet
        tincidunt
        rhoncus. Sed mollis ligula non massa aliquam faucibus.</p>
    </div>
    <br />
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="members position-relative overflow-hidden">
            <img src="assets/images/pexels-pixabay-220453.jpg" className="w-100" />
            <div className="members-layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center
                  text-center text-white rounded">
              <div>
                <div className="member-cap">
                  <div className="member-name">
                    <h5>Michael Broad</h5>
                    <h6>Web Designer</h6>
                  </div>
                  <br />
                  <p>Professional instructor ,
                    Graduated from the Faculty of Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="members position-relative overflow-hidden ">
            <img src="assets/images/pexels-pixabay-38554.jpg" className="w-100" />
            <div className="members-layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center
                      text-center text-white rounded">
              <div>
                <div className="member-cap">
                  <div className="member-name">
                    <h5>Jeannette Crow</h5>
                    <h6>Graphic Designer</h6>
                  </div>
                  <br />
                  <p>Professional instructor ,
                    Graduated from the Faculty of Applied Arts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="members position-relative overflow-hidden">
            <img src="assets/images/pexels-italo-melo-2379004.jpg" className="w-100" />
            <div className="members-layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center
                          text-center text-white rounded">
              <div>
                <div className="member-cap">
                  <div className="member-name">
                    <h5>Martin Lawrence</h5>
                    <h6>Web Developer</h6>
                  </div>
                  <br />
                  <p>Professional instructor ,
                    Graduated from the Faculty of Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="members position-relative overflow-hidden">
            <img src="assets/images/pexels-mentatdgt-1024311.jpg" className="w-100" />
            <div className="members-layer position-absolute w-100 h-100 d-flex justify-content-center align-items-center
                              text-center text-white rounded">
              <div>
                <div className="member-cap">
                  <div className="member-name">
                    <h5>Isabella Dowson</h5>
                    <h6>Creative Director</h6>
                  </div>
                  <br />
                  <p>Professional instructor ,
                    Graduated from the Faculty of Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ----------------------------------End Team */}
  {/* -----------------------------------Start Projects */}
  <br />
  <br />
  <br />
  {/* <section id="portfolio-details"></section> */}
  {/* <section class="project ">
  <div class="container">
      <div class="row">
          <div class="col-lg-6 col-lg-offset-1 text-center">
              <h3 class="lowercase">Do you have any ideas?</h3>

          </div>
          <div class="col-lg-6 text-center">
              <a href="#contact" class="btn btn-default">Contact Us</a>
          </div>



      </div>
  </div>

    </section> */}
  <br />
  <br />
  {/* -----------------------------------End Projects */}
  {/* -----------------------------------Start Services */}
  <section className="back" id="courses">
    <div className="services">
      <div className=" text-center position-relative d-flex justify-content-center align-items-center">
        <h2 className=" mb-0 position-absolute">Courses</h2>
        <h3 className=" mb-0">C</h3>
      </div>
      <p className="text-center w-50 m-auto">Nullam ac enim auctor, fringilla risus at, imperdiet turpis. Pellentesque
        elementum libero
        enim, eget gravida nunc laoreet et. Pellentesque elementum libero enim.</p>
      <br />
      <br />
      <br />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-2">
              <div className="icon">
                <i className="fas fa-crop-alt" />
              </div>
            </div>
            <div className="col-md-10">
              <div className="service-text">
                <Link to='/courses/web-design'> <h3> WEB DESGIN </h3>  </Link>
                <p>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius
                  utroque dissentias ut.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-2">
              <div className="icon">
                <i className="fas fa-code" />
              </div>
            </div>
            <div className="col-md-10">
              <div className="service-text">
              <Link to='/courses/web-development'> <h3> WEB DEVELOPMENT </h3>  </Link>
                <p>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius
                  utroque dissentias ut.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-2">
              <div className="icon">
                <i className="fas fa-camera-retro" />
              </div>
            </div>
            <div className="col-md-10">
              <div className="service-text">
              <Link to='/courses/photography'> <h3> PHOTOGRAPHY </h3>  </Link>
                <p>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius
                  utroque dissentias ut.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-2">
              <div className="icon">
                <i className="fas fa-magic" />
              </div>
            </div>
            <div className="col-md-10">
              <div className="service-text">
              <Link to='/courses/graphic-design'> <h3>GRAPHIC DESIGN</h3>  </Link>
                <p>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius
                  utroque dissentias ut.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-2">
              <div className="icon">
                <i className="fas fa-poll" />
              </div>
            </div>
            <div className="col-md-10">
              <div className="service-text">
              <Link to='/courses/marketing'> <h3>MARKETING</h3>  </Link>
                <p>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius
                  utroque dissentias ut.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-2">
              <div className="icon">
                <i className="fas fa-cog" />
              </div>
            </div>
            <div className="col-md-10">
              <div className="service-text">
              <Link to='/courses/full-stack'> <h3>FULL STACK</h3>  </Link>
                <p>Ferri reque integre mea ut, eu eos vide errem noluise se. Putent laoreet et ius
                  utroque dissentias ut.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br />
  {/* -----------------------------------End Services */}
  {/* -----------------------------------Start Blog */}
  {/* <section class="blog text-center sec5">

    <div class=" text-center position-relative d-flex justify-content-center align-items-center">
  <h2 class=" mb-0 position-absolute">Client Reviews</h2>
  <h3 class=" mb-0">C</h3>
 
    </div>
    
    <p class="text-center w-50 m-auto">Donec purus est, tincidunt eu sodales quis, vehicula quis enim. Morbi dapibus, tellus a
   gravida faucibus, elit ipsum sollicitudin risus, id ultricies arcu neque eget velit.</p>

   <div class="container">
      <div class="row m-auto">
          <div class="col-lg-12">
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                      <div class="carousel-item active">
                          <div class="client-review p-5">
                              <img src="assets/images/client-1.png" class="client-img">
                              <h5>Martin Jack</h5>
                              <h6>From Hooli</h6>
                              <i class="fas fa-quote-left "></i>
                              <p> Aenean sit amet est orci. Aenean at nisi eget nulla lobortis commodo. Nam
                                  eget lorem in
                                  ex aliquam dapibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, necessitatibus..</p>
                              <i class="fas fa-quote-right"></i>
                          </div>
                      </div>
                      <div class="carousel-item">
                          <div class="client-review p-5">
                              <img src="assets/images/client-2.png" class="client-img">
                              <h5>David Dowsy</h5>
                              <h6>From Globex</h6>
                              <i class="fas fa-quote-left"></i>
                              <p> Suspendisse non velit lacus. Mauris efficitur lorem a justo semper, ut
                                  suscipit ligula malesuada. Donec dui nulla. </p>
                              <i class="fas fa-quote-right"></i>
                          </div>
                      </div>
                      <div class="carousel-item">
                          <div class="client-review p-5">
                              <img src="assets/images/client-3.png" class="client-img">
                              <h5>Doglas Kosta</h5>
                              <h6>From Soylent</h6>
                              <i class="fas fa-quote-left"></i>
                              <p> Vestibulum lectus massa, volutpat ut tristique nec, volutpat in turpis. In
                                  vehicula tempus odio. Nullam enim ligula.</p>
                              <i class="fas fa-quote-right"></i>
                          </div>
                      </div>
                      <div class="carousel-item">
                          <div class="client-review p-5">
                              <img src="assets/images/client-4.png" class="client-img">
                              <h5>Anthony Lee</h5>
                              <h6>From Initech</h6>
                              <i class="fas fa-quote-left"></i>
                              <p> Nunc accumsan finibus sollicitudin. Integer malesuada purus sapien, sit amet
                                  volutpat sem fringilla ut. Proin viverra scelerisque mollis. </p>
                              <i class="fas fa-quote-right"></i>
                          </div>
                      </div>
                      <div class="carousel-item">
                          <div class="client-review p-5">
                              <img src="assets/images/client-5.png" class="client-img">
                              <h5>Jane Doris</h5>
                              <h6>From Acme</h6>
                              <i class="fas fa-quote-left"></i>
                              <p> Fusce euismod eget nulla a tempus. Pellentesque in varius metus. Fusce
                                  iaculis cursus ante, vel vestibulum dui sagittis vitae. </p>
                              <i class="fas fa-quote-right"></i>
                          </div>
                      </div>
                      <div class="carousel-item">
                          <div class="client-review p-5">
                              <img src="assets/images/client-6.png" class="client-img">
                              <h5>Jonathon Doe</h5>
                              <h6>From Umbrella</h6>
                              <i class="fas fa-quote-left"></i>
                              <p> Cras et est eu tellus fringilla congue. Nunc efficitur libero ut nunc
                                  volutpat porttitor. Aliquam in justo at neque. </p>
                              <i class="fas fa-quote-right"></i>
                          </div>
                      </div>
                      <div class="carousel-item">
                          <div class="client-review p-5">
                              <img src="assets/images/client-7.png" class="client-img">
                              <h5>Shane Catson</h5>
                              <h6>From Massive</h6>
                              <i class="fas fa-quote-left"></i>
                              <p> Vivamus pellentesque dignissim neque, quis viverra diam venenatis sit amet.
                                  Donec dignissim turpis quis libero posuere auctor. </p>
                              <i class="fas fa-quote-right"></i>
                          </div>
                      </div>
                      <div class="carousel-item">
                          <div class="client-review p-5">
                              <img src="assets/images/client-8.png" class="client-img">
                              <h5>Hugh Tace</h5>
                              <h6>From Capital</h6>
                              <i class="fas fa-quote-left"></i>
                              <p> Aenean varius accumsan eros, id molestie leo vestibulum a. Ut semper dictum
                                  feugiat. Integer tincidunt interdum eros ut accumsan. </p>
                              <i class="fas fa-quote-right"></i>
                          </div>
                      </div>
                      <div class="carousel-item">
                          <div class="client-review p-5">
                              <img src="assets/images/client-9.png" class="client-img">
                              <h5>Chris Wort</h5>
                              <h6>From Sylhost</h6>
                              <i class="fas fa-quote-left"></i>
                              <p> Morbi viverra ultrices magna vel egestas. Suspendisse rutrum, lacus nec
                                  sodales gravida, augue ante sollicitudin sem. </p>
                              <i class="fas fa-quote-right"></i>
                          </div>
                      </div>

                  </div>

                  <button class="carousel-control-prev" type="button"
                      data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button"
                      data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                  </button>
              </div>
          </div>

          <!-- <div class="client-review p-5">
                  <img src="assets/images/client-1.png" class="client-img">
                  <h5>Martin Jack</h5>
                  <h6>From Hooli</h6>
                  <i class="fas fa-quote-left"></i>
                  <p> Aenean sit amet est orci. Aenean at nisi eget nulla lobortis commodo. Nam eget lorem in
                      ex aliquam dapibus. </p>
                      <i class="fas fa-quote-right"></i>
              </div> */}
  {/* </div>
  </div>
</section> */} --&gt;
  <section id="reviews">
    <div className="client text-center">
      <div className=" text-center position-relative d-flex justify-content-center align-items-center">
        <h2 className=" mb-0 position-absolute">Client Reviews</h2>
        <h3 className=" mb-0">C</h3>
      </div>
      <p className="p-2">Donec purus est, tincidunt eu sodales quis, vehicula quis enim. Morbi dapibus, tellus a
        gravida faucibus,
        elit ipsum sollicitudin risus, id ultricies arcu neque eget velit.</p>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="client-review p-5">
                    <img src="assets/images/client-1.png" className="client-img" />
                    <h5>Martin Jack</h5>
                    <h6>From Hooli</h6>
                    <i className="fas fa-quote-left " />
                    <p> Aenean sit amet est orci. Aenean at nisi eget nulla lobortis commodo. Nam
                      eget lorem in
                      ex aliquam dapibus. </p>
                    <i className="fas fa-quote-right" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client-review p-5">
                    <img src="assets/images/client-2.png" className="client-img" />
                    <h5>David Dowsy</h5>
                    <h6>From Globex</h6>
                    <i className="fas fa-quote-left" />
                    <p> Suspendisse non velit lacus. Mauris efficitur lorem a justo semper, ut
                      suscipit ligula malesuada. Donec dui nulla. </p>
                    <i className="fas fa-quote-right" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client-review p-5">
                    <img src="assets/images/client-3.png" className="client-img" />
                    <h5>Doglas Kosta</h5>
                    <h6>From Soylent</h6>
                    <i className="fas fa-quote-left" />
                    <p> Vestibulum lectus massa, volutpat ut tristique nec, volutpat in turpis. In
                      vehicula tempus odio. Nullam enim ligula. </p>
                    <i className="fas fa-quote-right" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client-review p-5">
                    <img src="assets/images/client-4.png" className="client-img" />
                    <h5>Anthony Lee</h5>
                    <h6>From Initech</h6>
                    <i className="fas fa-quote-left" />
                    <p> Nunc accumsan finibus sollicitudin. Integer malesuada purus sapien, sit amet
                      volutpat sem fringilla ut. Proin viverra scelerisque mollis. </p>
                    <i className="fas fa-quote-right" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client-review p-5">
                    <img src="assets/images/client-5.png" className="client-img" />
                    <h5>Jane Doris</h5>
                    <h6>From Acme</h6>
                    <i className="fas fa-quote-left" />
                    <p> Fusce euismod eget nulla a tempus. Pellentesque in varius metus. Fusce
                      iaculis cursus ante, vel vestibulum dui sagittis vitae. </p>
                    <i className="fas fa-quote-right" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client-review p-5">
                    <img src="assets/images/client-6.png" className="client-img" />
                    <h5>Jonathon Doe</h5>
                    <h6>From Umbrella</h6>
                    <i className="fas fa-quote-left" />
                    <p> Cras et est eu tellus fringilla congue. Nunc efficitur libero ut nunc
                      volutpat porttitor. Aliquam in justo at neque. </p>
                    <i className="fas fa-quote-right" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client-review p-5">
                    <img src="assets/images/client-7.png" className="client-img" />
                    <h5>Shane Catson</h5>
                    <h6>From Massive</h6>
                    <i className="fas fa-quote-left" />
                    <p> Vivamus pellentesque dignissim neque, quis viverra diam venenatis sit amet.
                      Donec dignissim turpis quis libero posuere auctor. </p>
                    <i className="fas fa-quote-right" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client-review p-5">
                    <img src="assets/images/client-8.png" className="client-img" />
                    <h5>Hugh Tace</h5>
                    <h6>From Capital</h6>
                    <i className="fas fa-quote-left" />
                    <p> Aenean varius accumsan eros, id molestie leo vestibulum a. Ut semper dictum
                      feugiat. Integer tincidunt interdum eros ut accumsan. </p>
                    <i className="fas fa-quote-right" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="client-review p-5">
                    <img src="assets/images/client-9.png" className="client-img" />
                    <h5>Chris Wort</h5>
                    <h6>From Sylhost</h6>
                    <i className="fas fa-quote-left" />
                    <p> Morbi viverra ultrices magna vel egestas. Suspendisse rutrum, lacus nec
                      sodales gravida, augue ante sollicitudin sem. </p>
                    <i className="fas fa-quote-right" />
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon " aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          {/* <div class="client-review p-5">
                  <img src="assets/images/client-1.png" class="client-img">
                  <h5>Martin Jack</h5>
                  <h6>From Hooli</h6>
                  <i class="fas fa-quote-left"></i>
                  <p> Aenean sit amet est orci. Aenean at nisi eget nulla lobortis commodo. Nam eget lorem in
                      ex aliquam dapibus. </p>
                      <i class="fas fa-quote-right"></i>
              </div> */}
        </div>
      </div>
    </div>
  </section>
  <br />
  <br />
  {/* -----------------------------------End Blog */}
  {/* -----------------------------------Start Contact */}
  <section className="contact" id="contact">
    <div className=" text-center position-relative d-flex justify-content-center align-items-center">
      <h2 className=" mb-0 position-absolute">Get In Touch</h2>
      <h3 className=" mb-0">G</h3>
    </div>
    <p className="text-center w-50 m-auto">Mauris at tempus mi, ut iaculis dui. Integer laoreet mattis justo nec
      pretium. Ut nibh elit,
      fermentum vel hendrerit vel, dictum nec velit. Morbi volutpat suscipit.</p>
    <br />
    <br />
    <div className="container">
      <div className="row">
        <div className="contact-info">
          <h3 className="lowercase">Get answers and advices from professional consultants.</h3>
          <div className="col-md-4">
          <div className="contact-content clearfix">
          
            <div className="icon">
              <i className="fas fa-map" />
            </div>
            <div className="contact-text">
              <h4>Address</h4>
              <p>1650 Lombard Street, San Francisco, CA 94123</p>
            </div>
          </div>
          </div>
          <div className="col-md-4">
          <div className="contact-content clearfix">
          
            <div className="icon">
              <i className="fas fa-mobile-alt" />
            </div>
            <div className="contact-text">
              <h4>Phone</h4>
              <p>+1 (415) 876-3250 / +1 (415) 876-3251</p>
            </div>
          </div>
          </div>
          <div className="col-md-4">
          <div className="contact-content clearfix">
            <div className="icon">
              <i className="fas fa-envelope" />
            </div>
            <div className="contact-text">
              <h4>Say Hello</h4>
              <p>[email protected]</p>
            </div>
          </div>
        </div>
        </div>
        <div className="col-md-6">
          {/* <div class="contact-form">
      <div class="box ">
          <input type="text" name="name" class="form-control m-10" placeholder="Name">
      </div>

      <div class="box">
          <input type="email" name="email" class="form-control m-10" placeholder="Email">
      </div>

      <div class="box">
          <input type="text" name="phone" class="form-control m-10" placeholder="Phone">
      </div>

      <div class="box">
          <input type="message" name="message" class="form-control m-10" placeholder="Message">
      </div>

      <div>
          <button type="submit" class="btn btn-default" id="contact-submit">
              <i class="fas fa-paper-plane"></i>Send Message</button>
      </div>


  </div> */}
          {/* <div className="w-90 ">
            <div className="form-group">
              <input type="text" name id="studentNameInp" className="form-control mb-3" placeholder="Student Name" />
            </div>
            <div className="form-group">
              <input type="text" name id="emailInp" className="form-control mb-3" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="text" name id="phoneNumInp" className="form-control mb-3" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <input type="text" name id="courseNameInp" className="form-control mb-3" placeholder="Course Name" />
            </div>
            <button onclick="submit();" className="btn btn1">Submit</button>
          </div> */}
          <div className="w-90 py-5">
            {/* <table className="table">
              <thead>
                <tr><th>Index</th>
                  <th>Student Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Course Name</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr></thead>
              <tbody id="tableData">
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* -----------------------------------End Contact */}
  {/* ---------------------------------------------Start Footer */}
  <footer>
    <div className="footer-widgets">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="footer-logo">
              <a href="#" title="Angora">
                <img src="assets/images/icon.png" /> </a>
            </p><p>
            </p></div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="widget">
              <h5>Contact Info</h5>
              <div className="text-widget">
                <p>
                  1650 Lombard Street,
                  <br />
                  San Francisco, CA 94123
                </p>
                <p>
                  +1 (415) 876-3250
                  <br />
                  [email protected]
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="widget">
              <h5>Useful Links</h5>
              <div className="text-widget">
                <ul className="footer-list">
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="#">Affiliate Program</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="widget">
              <h5>Recent Posts</h5>
              <div className="text-widget">
                <ul className="footer-list">
                  <li><a href="#">Sunset in Venice</a></li>
                  <li><a href="#">Aerial View of Village</a></li>
                  <li><a href="#">Lighted Concrete City</a></li>
                  <li><a href="#">The Little Ghost</a></li>
                  <li><a href="#">Royal Oats ft. Waldo</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="widget">
              <h5>Popular Tags</h5>
              <div className="tags clearfix">
                <a href="#" className="tag">HTML5</a>
                <a href="#" className="tag">CSS3</a>
                <a href="#" className="tag">jQuery</a>
                <a href="#" className="tag">UX / UI</a>
                <a href="#" className="tag">Web</a>
                <a href="#" className="tag">Graphic</a>
                <a href="#" className="tag">Design</a>
                <a href="#" className="tag">Development</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-end">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="footer-social">
              <a href="#" title="twitter"><i className="fab fa-twitter" /></a>
              <a href="#" title="twitter"><i className="fab fa-facebook" /></a>
              <a href="#" title="twitter"><i className="fab fa-instagram" /></a>
              <a href="#" title="twitter"><i className="fab fa-dribbble" /></a>
              <a href="#" title="twitter"><i className="fab fa-pinterest-square" /></a>
            </div>
          </div>
          <div className="col-md-6">
            <p className="copyright">
              Copyright © 2020
              <a href="#">Angora</a>
            </p><p>
            </p></div>
        </div>
      </div>
    </div>
  </footer>
</div>
    )
}

export default homePage;