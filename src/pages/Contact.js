import React, { useState } from "react";
import Banner from "../components/Banner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && msg) {
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
        setName("");
        setEmail("");
        setMsg("");
      }, 1500);
    }
  };

  return (
    <div classNam="page_wrapper">
      <Banner img={require("../assets/img/hotel-10.jpg")} title="Contact Us" />

      <div className="container mt-5 pt-5 mb-5 pb-5">
        <div className="contact_card">
          <div className="row no-gutters">
            <div className="col-md-7">
              <div className="p-4">
                <h3>Get In Touch</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="contact_item">
                  <i className="fa fa-phone" />

                  <p>
                    <a href="#">+91 9540 767 579</a>
                  </p>
                  <p>
                    <a href="#">+91 1244 013 200</a>
                  </p>
                </div>

                <div className="contact_item">
                  <i className="fa fa-envelope" />

                  <p>
                    <a href="mailto:reservation@conectstay.com">
                      reservation@conectstay.com
                    </a>
                  </p>
                </div>

                <div className="contact_item">
                  <i className="fa fa-map-marker" />

                  <p>B-49, Unchey Park Mandawali Fajalpur, Delhi 110092</p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <form name="contact" netlify netlify-honeypot="bot-field" hidden>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message"></textarea>
              </form>
              <form method="post">
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    value={email}
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                  />
                </div>

                <div className="text-center">
                  <button
                    disabled={loader}
                    type="submit"
                    className="btn btn-primary pl-5 pr-5 mt-4"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
