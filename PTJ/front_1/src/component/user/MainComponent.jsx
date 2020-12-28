import React, {Component} from 'react';
// import Header from '@material-ui/core/Header'
// import Nav from '@material-ui/core/Nav'
// import Section from '@material-ui/core/Section'
// import TableCell from '@material-ui/core/TableCell'
// import TableHead from '@material-ui/core/TableHead'
// import TableRow from '@material-ui/core/TableRow'
// import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'
// import CreateIcon from '@material-ui/icons/Create'
// import DeleteIcon from '@material-ui/icons/Delete'
// import { red } from '@material-ui/core/colors';

class UserListComponent extends Component{
    render(){

        return(
            <div id="Main" style={form}>
            <section id="hero" className="d-flex align-items-center">
          
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                    <h1>Organic</h1>
                    <h2>신선한 유기농 제품</h2>
                    <div className="d-lg-flex">
                      <a href="#about" className="btn-get-started scrollto">상품 보러 가기</a>
                      <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox btn-watch-video" data-vbtype="video" data-autoplay="true">유기농<i className="icofont-play-alt-2"></i></a>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                    <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/>
                  </div>
                </div>
              </div>
          
            </section>

            <main id="main">


                


                <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                    <h2>이 달의 Hot 상품!</h2>
                    </div>

                    <div className="row content">
                    <div className="col-lg-6">
                        <p> 상품 1 </p>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <p> 상품 2 </p>
                    </div>
                    </div>

                </div>
                </section>

                <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                    <h2>세일 상품!</h2>
                    </div>

                    <div className="row content">
                    <div className="col-lg-6">
                        <p> 상품 1 </p>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <p> 상품 2 </p>
                    </div>
                    </div>

                </div>
                </section>
        




                <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                    <h2>Services</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box">
                        <div className="icon"><i className="bx bxl-dribbble"></i></div>
                        <h4><a href="">Lorem Ipsum</a></h4>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                        <div className="icon"><i className="bx bx-file"></i></div>
                        <h4><a href="">Sed ut perspici</a></h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-box">
                        <div className="icon"><i className="bx bx-tachometer"></i></div>
                        <h4><a href="">Magni Dolores</a></h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                        <div className="icon-box">
                        <div className="icon"><i className="bx bx-layer"></i></div>
                        <h4><a href="">Nemo Enim</a></h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>

                    </div>

                </div>
                </section>


               

               
   
    

        <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>연락처</h2>
            <p>문의 사항을 남겨주세요.</p>
            </div>

            <div className="row">

            <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                <div className="address">
                    <i className="icofont-google-map"></i>
                    <h4>위치:</h4>
                    <p>대한민국 00시</p>
                </div>

                <div className="email">
                    <i className="icofont-envelope"></i>
                    <h4>이메일:</h4>
                    <p>000 @ 000.000</p>
                </div>

                <div className="phone">
                    <i className="icofont-phone"></i>
                    <h4>연락처:</h4>
                    <p>+1 5589 55488 55s</p>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style={{border:0, width: 100+'%', height: 290+'px'}} allowFullScreen></iframe>
                </div>

            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                    <div className="form-group col-md-6">
                    <label for="name">성함</label>
                    <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="성함을 기입해주세요." />
                    <div className="validate"></div>
                    </div>
                    <div className="form-group col-md-6">
                    <label for="name">연락처</label>
                    <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="연락처를 기입해주세요." />
                    <div className="validate"></div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="name">제목</label>
                    <input type="text" className="form-control" name="subject" id="subject" />
                    <div className="validate"></div>
                </div>
                <div className="form-group">
                    <label for="name">내용</label>
                    <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                    <div className="validate"></div>
                </div>
                <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">보내기</button></div>
                </form>
            </div>

            </div>

        </div>
        </section>



            </main>


            
            <footer id="footer">

                <div className="footer-newsletter">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h4>Join Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    </div>
                    </div>
                </div>
                </div>

                
                
                <div className="container footer-bottom clearfix">
                <div className="copyright">
                    &copy; Copyright <strong><span>Arsha</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">Dongryul</a>
                </div>
                </div>
            </footer>

            <a href="#" className="back-to-top"><i className="ri-arrow-up-line"></i></a>
            <div id="preloader"></div>
           
            </div>

        );
    }


}

{/* const style = {
    marginRight: 3,
    display: 'flex',
    justifyContent: 'center'
} */}

const form ={
    marginTop:80
}

export default UserListComponent;