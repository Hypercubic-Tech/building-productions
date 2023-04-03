import SwiperComp from "../layouts/SwiperComp";

import logo1 from '../../../public/swiperImgs/logo1.jpg'; 
import logo2 from '../../../public/swiperImgs/logo2.jpg'; 
import logo3 from '../../../public/swiperImgs/logo3.jpg'; 
import logo4 from '../../../public/swiperImgs/logo4.jpg'; 

const HowItWorks = () => {
    return ( 
        <div className="mb-n10 mb-lg-n20 z-index-2">
        <div className="container">
          <div className="text-center mb-17">
            <h3
              className="fs-2hx text-dark mb-5 georgian"
              id="how-it-works"
              data-kt-scroll-offset="{default: 100, lg: 150}"
            >
              როგორ მუშაობს?
            </h3>
            <div className="fs-5 text-muted fw-bold georgian">
              თუ თქვენ თავად აპირებთ გაუძღვეთ რემონტს
              <br />
              მაშინ ჩვენი პროგრამა თქვენთვის ნამდვილი აღმოჩენაა
            </div>
          </div>
          <div className="row w-100 gy-10 mb-md-20">
            <div className="col-md-4 px-5">
              <div className="text-center mb-10 mb-md-0">
                <img
                  src="assets/media/illustrations/sketchy-1/2.png"
                  className="mh-125px mb-9"
                  alt=""
                />
                <div className="d-flex flex-center mb-5">
                  <span className="badge badge-circle badge-light-success fw-bolder p-5 me-3 fs-3">
                    1
                  </span>
                  <div className="fs-5 fs-lg-3 fw-bolder text-dark georgian">
                    გაიერეთ რეგისტრაცია
                  </div>
                </div>
                <div className="fw-bold fs-6 fs-lg-4 text-muted">
                  Save thousands to millions of bucks
                  <br />
                  by using single tool for different
                  <br />
                  amazing and great
                </div>
              </div>
            </div>
            <div className="col-md-4 px-5">
              <div className="text-center mb-10 mb-md-0">
                <img
                  src="assets/media/illustrations/sketchy-1/8.png"
                  className="mh-125px mb-9"
                  alt=""
                />
                <div className="d-flex flex-center mb-5">
                  <span className="badge badge-circle badge-light-success fw-bolder p-5 me-3 fs-3">
                    2
                  </span>
                  <div className="fs-5 fs-lg-3 fw-bolder text-dark georgian">
                    აირჩიეთ სამუშაოები
                  </div>
                </div>
                <div className="fw-bold fs-6 fs-lg-4 text-muted">
                  Save thousands to millions of bucks
                  <br />
                  by using single tool for different
                  <br />
                  amazing and great
                </div>
              </div>
            </div>
            <div className="col-md-4 px-5">
              <div className="text-center mb-10 mb-md-0">
                <img
                  src="assets/media/illustrations/sketchy-1/12.png"
                  className="mh-125px mb-9"
                  alt=""
                />
                <div className="d-flex flex-center mb-5">
                  <span className="badge badge-circle badge-light-success fw-bolder p-5 me-3 fs-3">
                    3
                  </span>
                  <div className="fs-5 fs-lg-3 fw-bolder text-dark georgian">
                    საიწყე დათვლა
                  </div>
                </div>
                <div className="fw-bold fs-6 fs-lg-4 text-muted">
                  Save thousands to millions of bucks
                  <br />
                  by using single tool for different
                  <br />
                  amazing and great
                </div>
              </div>
            </div>
          </div>
          <div className="tns tns-default">
            <div
              data-tns="true"
              data-tns-loop="true"
              data-tns-swipe-angle="false"
              data-tns-speed={2000}
              data-tns-autoplay="true"
              data-tns-autoplay-timeout={18000}
              data-tns-controls="true"
              data-tns-nav="false"
              data-tns-items={1}
              data-tns-center="false"
              data-tns-dots="false"
              data-tns-prev-button="#kt_team_slider_prev1"
              data-tns-next-button="#kt_team_slider_next1"
            >
              <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                <img
                  src="assets/media/product-demos/demo1.png"
                  className="card-rounded shadow mw-100"
                  alt=""
                />
              </div>
              <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                <img
                  src="assets/media/product-demos/demo2.png"
                  className="card-rounded shadow mw-100"
                  alt=""
                />
              </div>
              <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                <img
                  src="assets/media/product-demos/demo4.png"
                  className="card-rounded shadow mw-100"
                  alt=""
                />
              </div>
              <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                <img
                  src="assets/media/product-demos/demo5.png"
                  className="card-rounded shadow mw-100"
                  alt=""
                />
              </div>
            </div>
            <SwiperComp  imgs={[logo1, logo2, logo3, logo4]} type = {1} />
          </div>
        </div>
      </div>
     );
}
 
export default HowItWorks;