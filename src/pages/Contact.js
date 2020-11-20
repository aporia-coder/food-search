import React from "react";
import Hero from "../components/Hero";

// MUI
import Paper from "@material-ui/core/Paper";

const Contact = () => {
  return (
    <>
      <Hero>
        <Paper elevation={3} className="calorie-paper">
          <h5>CONTACT</h5>
          <form>
            <div className="form-control">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="message"
                placeholder="Message"
                required
              />
            </div>
            <div className="form-control">
              <input type="email" name="email" placeholder="Email" required />
            </div>
          </form>
        </Paper>
      </Hero>
    </>
  );
};

export default Contact;
