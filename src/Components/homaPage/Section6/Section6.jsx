import "./section6.css";

// Image imports
import img1 from "./../../../assets/ra.png";
import img2 from "./../../../assets/image 152 (1).png";
import img3 from "./../../../assets/frame 87.png";
import img4 from "./../../../assets/image (1).png";
import img5 from "./../../../assets/image 154.png";
import img6 from "./../../../assets/image 155.png";
import img7 from "./../../../assets/image 156.png";
import img8 from "./../../../assets/image 157.png";
import img9 from "./../../../assets/image 158.png";
import img10 from "./../../../assets/image 159.png";
import img11 from "./../../../assets/image 160.png";
import img12 from "./../../../assets/image 161.png";
import img13 from "./../../../assets/image 162.png";
import img14 from "./../../../assets/image 163.png";
import img15 from "./../../../assets/image 164.png";
import img16 from "./../../../assets/image 165.png";

export default function Section6() {
  return (
    <div className="container-fluid p-0">
      <div className="row justify-content-around">
        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="p-3 bg-white gallery">
            <h4>Best Sellers in Toys & Games</h4>
            <img src={img1} className="img-fluid" alt="Toy" />
            <p>
              Storio Rechargeable Toys Talking Cactus Baby Toys for Kids Dancing
              Cactus Toys…
            </p>
            <span>
              <svg
                width="55"
                height="30"
                viewBox="0 0 55 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.68745 12.8201C4.21831 12.8201 3.84458 12.7922 3.56628 12.7366C3.29592 12.673 3.07726 12.5656 2.91027 12.4145C2.74329 12.2555 2.57631 12.0289 2.40932 11.7347L0.739496 8.78862V8.47851H1.69368C2.15487 8.47851 2.53257 8.42683 2.82678 8.32346C3.12894 8.22009 3.35556 8.04913 3.50664 7.81058C3.66567 7.57203 3.75711 7.25795 3.78097 6.86832H0.727568V6.34352H3.76904C3.75314 6.08907 3.70543 5.86642 3.62591 5.67559C3.55435 5.48475 3.44303 5.32969 3.29195 5.21042C3.14882 5.08319 2.96196 4.98778 2.73136 4.92416C2.50077 4.86055 2.22246 4.82874 1.89645 4.82874H0.727568V4.30394H6.27379V4.82874H4.19843C4.35746 4.94007 4.48866 5.07127 4.59203 5.22235C4.70335 5.37343 4.79082 5.54439 4.85443 5.73522C4.91804 5.91811 4.9578 6.12087 4.9737 6.34352H6.27379V6.86832H4.96178C4.92997 7.25 4.81865 7.59987 4.62781 7.91793C4.43697 8.23599 4.13879 8.49442 3.73326 8.69321C3.33568 8.88404 2.80293 8.99139 2.135 9.01524L3.5305 11.3769C3.72133 11.6949 3.91615 11.9335 4.11494 12.0925C4.31372 12.2515 4.54034 12.331 4.79479 12.331H4.9737V12.8201H4.68745Z"
                  fill="black"
                />
              </svg>
            </span>
            <div className="d-flex justify-content-around mt-2">
              <img src={img1} className="img-thumbnail" style={{ width: "39px", height: "60px" }} alt="Thumbnail" />
              <img src={img2} className="img-thumbnail" style={{ width: "39px" }} alt="Thumbnail" />
              <img src={img3} className="img-thumbnail" style={{ width: "39px", height: "60px" }} alt="Thumbnail" />
              <img src={img4} className="img-thumbnail" style={{ width: "39px", height: "60px" }} alt="Thumbnail" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="p-3 bg-white gallery">
            <h4>Customers’ Most-Loved Products</h4>
            <div className="images">
              <img src={img5} className="img-fluid" alt="Product" />
              <img src={img6} className="img-fluid" alt="Product" />
              <img src={img7} className="img-fluid" alt="Product" />
              <img src={img8} className="" alt="Product" />
              <p style={{ color: "#1F8394" }}>Explore more</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="p-3 bg-white gallery">
            <h4>Best Sellers in Beauty</h4>
            <div className="images">
              <img src={img9} className="img-fluid" alt="Beauty Product" />
              <img src={img10} className="img-fluid" alt="Beauty Product" />
              <img src={img11} className="img-fluid" alt="Beauty Product" />
              <img src={img12} className="img-fluid" alt="Beauty Product" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3 mb-4">
          <div className="p-3 bg-white gallery">
            <h4>
              Latest styles | Dresses,
              <br /> kurta & more | 50% -
            </h4>
            <div className="d-flex justify-content-around">
              <div className="text-center images2">
                <img src={img13} className="img-fluid" alt="Kurta" />
                <p>Kurta & sets</p>
              </div>
              <div className="text-center images2">
                <img src={img14} className="img-fluid" alt="Tops" />
                <p>Tops</p>
              </div>
            </div>
            <div className="d-flex justify-content-around mt-2">
              <div className="text-center images2">
                <img src={img15} className="img-fluid" alt="Dresses" />
                <p>Dresses</p>
              </div>
              <div className="text-center images2">
                <img src={img16} className="img-fluid" alt="Sarees" />
                <p>Sarees</p>
              </div>
            </div>
            <p className="text-start" style={{ color: "#1F8394" }}>
              See more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
