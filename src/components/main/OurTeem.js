import SwiperComp from "../layouts/SwiperComp";
import logo1 from '../../../public/swiperImgs/logo1.jpg'; 
import logo2 from '../../../public/swiperImgs/logo2.jpg'; 
import logo3 from '../../../public/swiperImgs/logo3.jpg'; 
import logo4 from '../../../public/swiperImgs/logo4.jpg'; 

const OurTeem = () => {
    return ( 
        <div className="py-10 py-lg-20">
        <div className="container">
          <div className="text-center mb-12">
            <h3
              className="fs-2hx text-dark mb-5"
              id="team"
              data-kt-scroll-offset="{default: 100, lg: 150}"
            >
              Our Great Team
            </h3>
            <div className="fs-5 text-muted fw-bold">
              It’s no doubt that when a development takes longer to complete,
              additional costs to
              <br />
              integrate and test each extra feature creeps up and haunts most
              of us.
            </div>
          </div>
          <div className="tns tns-default">
            <SwiperComp imgs={[logo1, logo2, logo3, logo4]} type={2} />
          </div>
        </div>
      </div>
     );
}
 
export default OurTeem;