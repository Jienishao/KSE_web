import React, { useEffect } from "react";
import ToolBar from "../components/ToolBar";
import NavBar from "../components/NavBar";
import SiteMap from "../components/SiteMap";
import "../css/MainPage.css"
import "../css/RequestForm.css"

function RequestForm() {
  useEffect(() => {
    scrollFunction();
    window.onscroll = () => {
      scrollFunction();
    };
  }, []);

  const scrollFunction = () => {
    const scrollToTopButton = document.getElementById("scroll_top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  };

  const scrollToTop = () => {
    const scrollTop = Math.max(
      document.body.scrollTop,
      document.documentElement.scrollTop
    );

    if (scrollTop > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, scrollTop - scrollTop / 10);
    } else {
      window.cancelAnimationFrame(scrollToTop);
    }
  }
  return (
    <div className="mainpage">
      <div className="toolbar">
        <ToolBar />
      </div>

      <div className="navbar">
        <NavBar />
      </div>

      <div className="content">
        <div className="header-background">
          <div className="company-info">
            <h1 className="company-name">Contact Us</h1>
            <p className="company-description">Your company tagline or brief description.</p>
            <p className="company-contact">Contact us at: info@company.com | +1 234 567 890</p>
          </div>
        </div>

        <div className="form-container">
          <h2 className="form-title">
            Submit An Inquiry
            <div className="form-title-underline"></div>
          </h2>
          <form className="inquiry-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-input" required />
            </div>

            <div className="form-group">
              <div className="form-row">
                <div className="form-col">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" className="form-input" required />
                </div>
                <div className="form-col">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" className="form-input" required />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="inquiryReason">Inquiry Reason</label>
              <select id="inquiryReason" className="form-select" required>
                <option value="">-select-</option>
                {/* Add other options here */}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="requestDetails">Request Details</label>
              <textarea id="requestDetails" className="form-textarea" required></textarea>
            </div>

            <div className="form-group">
              <div className="form-row">
                <div className="form-col">
                  <label htmlFor="companyName">Company Name</label>
                  <input type="text" id="companyName" className="form-input" required />
                </div>
                <div className="form-col">
                  <label htmlFor="preferredLanguage">Preferred Language</label>
                  <select id="preferredLanguage" className="form-select" required>
                    <option value="">-select-</option>
                    {/* Add other options here */}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="form-row">
                <div className="form-col">
                  <label htmlFor="country">Country</label>
                  <input type="text" id="companyName" className="form-input" required />
                </div>
                <div className="form-col">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input type="tel" id="phoneNumber" className="form-input" required />
                </div>
              </div>
            </div>

            <div className="form-group">
              <input type="checkbox" id="newsletter" className="form-checkbox" />
              <label htmlFor="newsletter">I agree to receive news, events and product updates from the company.</label>
            </div>

            <div className="form-group">
              <div className="recaptcha">
                {/* Insert reCAPTCHA component here */}
              </div>
            </div>

            <button type="submit" className="form-button">Submit</button>
          </form>
        </div>

        <div id="scroll_top" onClick={scrollToTop}>
          <span id="arrow-up">&#9650;</span>
          <span>Top</span>
        </div>

      </div>

      <div className="sitemap">
        <SiteMap />
      </div>

    </div>
  );
}

export default RequestForm;
