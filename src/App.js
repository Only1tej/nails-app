import "./App.css";
import Footer from "./components/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSquareGooglePlus,
//   faEye,
//   faCartShopping,
// } from "@fortawesome/fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFontAwesome,
  faGooglePlusSquare,
  faSquareGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div>
      {/* <h1 className="font-bold text-2xl italic">Hello World</h1> */}
      {/* <Footer /> */}
      <div className="p-5 bg-purple-800">
        <div className="footer text-white space-y-2">
          <div>
            <h1 className="font-bold font-playball text-5xl">
              Pinky Nails & Spa
            </h1>
            <p className="font-bold text-lg">WALK-IN WELCOME !</p>
            {/* Google sign in icon */}
            <FontAwesomeIcon
              icon={faSquareGooglePlus}
              size="3x"
              style={{
                backgroundColor: "white",
                color: "#fa0505",
              }}
              // border
              fixedWidth
            />
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faGooglePlusSquare} />
              <FontAwesomeIcon icon={faSquareGooglePlus} />
            </div>
          </div>
          <div>
            <h1 className="font-bold font-hip text-2xl">Contact Us</h1>
            <div className=" font-footer">
              {/* Home icon */}
              <p className="underline">Address:</p>
              <p>
                7210 Towne Centre Dr,
                <br />
                Liberty Township, OH 45069
              </p>
            </div>
            <div className=" font-footer">
              {/* phone icon */}
              <p className="underline">Phone</p>
              <p className="font-extrabold">513-755-0333</p>
            </div>
            <div className=" font-footer">
              {/* email icon */}
              <p className="underline font-footer">Email</p>
              <p className="font-black"> maichi80@yahoo.com</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold font-apollo text-2xl">Location</h1>
            {/* Map */}
          </div>
        </div>
        <hr className="mt-4 mx-auto" />
        {/* <div className="divider"></div> */}
        <div className="mt-8 font-footer">
          <p className="flex justify-center lg:justify-start text-purple-500">
            © Copyright by Pinky Nails & Spa. All Rights Reserved.
          </p>
          <div className="mt-12">
            <a href="#">Pinky Nails & Spa</a>{" "}
            <span className="text-purple-500 mx-1">|</span>
            <a href="#">
              #1 top local manicure & pedicure services in Liberty Township,OH
              45069
            </a>
            <span className="text-purple-500 mx-1">|</span>
            <a href="#">Blog</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
