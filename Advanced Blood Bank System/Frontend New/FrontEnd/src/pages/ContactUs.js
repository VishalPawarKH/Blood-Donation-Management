import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Base from "../components/Base";
import { removeUser } from "../Features/persist/persist";
import { storageItem } from "../services/helper";
import "./ContactUs.css";

const Contactus = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
    storageItem.removeItem("token");
    navigate("/");
  };

  return (
    <Base>
      <section className="contact-info-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact-info-container d-flex flex-column flex-lg-row justify-content-between align-items-start">

                <div className="contact-info-item d-flex align-items-center mb-4 mb-lg-0">
                  <div className="contact-info-icon me-3">
                    <img 
                      src="https://img.icons8.com/office/24/000000/iphone.png" 
                      alt="Phone Icon" 
                    />
                  </div>
                  <div className="contact-info-content">
                    <h5 className="contact-info-title mb-1">Phone</h5>
                    <p className="contact-info-text mb-0">+91 9999 999 9999</p>
                  </div>
                </div>

                <div className="contact-info-item d-flex align-items-center mb-4 mb-lg-0">
                  <div className="contact-info-icon me-3">
                    <img 
                      src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" 
                      alt="Email Icon" 
                    />
                  </div>
                  <div className="contact-info-content">
                    <h5 className="contact-info-title mb-1">Email</h5>
                    <p className="contact-info-text mb-0">contact@bloodforlives.com</p>
                  </div>
                </div>

                <div className="contact-info-item d-flex align-items-center">
                  <div className="contact-info-icon me-3">
                    <img 
                      src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png" 
                      alt="Address Icon" 
                    />
                  </div>
                  <div className="contact-info-content">
                    <h5 className="contact-info-title mb-1">Address</h5>
                    <p className="contact-info-text mb-0">29, Akurdi, MH, INDIA</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Contactus;
