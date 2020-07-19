import React,{ useState } from 'react';

const Contact = () => {
  const [formValues, setformValues] = useState({});
  const [error, seterror] = useState(false);
  const [errors, seterrors] = useState({});
  const [success, setsuccess] = useState(false);

  const handleChange = (title, value) => {
    const newFormValues = { ...formValues };
    newFormValues[title] = value;
    setformValues(newFormValues);
    if(value.length && title !== 'email'){
      const newErrors = { ...errors };
      delete newErrors[title];
      seterrors(newErrors);
    }
    if(title ==='email' && value.length){
      const emailValid = emailValidation(value);
      if(emailValid){
        const newErrors = { ...errors };
        delete newErrors[title];
        seterrors(newErrors);
      }
      else{
        seterror(true);
        const newErrors = { ...errors };
        newErrors[title] = 'Please Enter valid email';
        seterrors(newErrors);
      }

    }
  }

  const emailValidation = (value) => {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,8}$/i.test(value)) {
      return false;
    }
    return true;
  };

  const isValidation = () => {
    const requiredFields = ['personname', 'email', 'message', 'subject'];
    const errors = {};
    requiredFields.forEach((key) => {
      if (!formValues[key]) {
        errors[key] = 'This is required';
      }
      else if(key==='email' && !emailValidation(formValues[key])){
        errors[key] = 'Please Enter valid email';
      }
    });
    const error = Object.keys(errors).length ? true : false;
    seterror(error);
    seterrors(errors);
    return error;
  }

  const handleSubmit = () => {
    if(!isValidation()){
      fetch('/contact',{
        method:"POST",
        headers:{ 'Content-Type': 'application/json'},
        body:JSON.stringify(formValues)
      }).then(data=> data.json())
      .then(data => {
        console.log('data in success', data)
        if(data.status === 200){
          setsuccess(true)
        }
        else{
          setsuccess(false);
          error(true)
          seterrors({submit: data.error})
        }
      })
    }
    else{
      console.log('false')
    }
  }

  const {personname, email, message, subject } = formValues;

	return (
		<section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row mt-1">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <a href="https://www.google.com/maps/place/Shankar+Chowk+Lalitpur+Colony/@26.1965776,78.1598939,17z/data=!3m1!4b1!4m5!3m4!1s0x3976c4322c9650f1:0xa64b647f42fe016a!8m2!3d26.1965728!4d78.1620879"><i className="icofont-google-map"></i></a>
                <h4>Location:</h4>
                <p>14,Shankar chowk Lalitpur colony Gwalior, M.P.</p>
              </div>

              <div className="email">
                <a href='mailto:bansalprashant786@gmail.com' itemProp='email'><i className="icofont-envelope"></i></a>
                <h4>Email:</h4>
                <p>bansalprashant786@gmail.com</p>
              </div>

              <div className="phone">
              <a href='tel:+91 7806087034' itemProp='telephone'><i className="icofont-phone"></i></a>
                <h4>Call:</h4>
                <p>+91 7806087034</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <div action="contact" method="post" role="form" className="php-email-form">
              <div className="form-row">
                <div className="col-md-6 form-group">
                  <input type="text" value={personname} onChange={(e) => handleChange('personname', e.target.value)} name="name" className="form-control" id="name" placeholder="Your Name"/>
                  {
                    error && errors.personname &&
                      <div className="validate">
                        {error && errors.personname}
                      </div>
                  }
                </div>
                <div className="col-md-6 form-group">
                  <input type="email" value={email} onChange={(e) => handleChange('email', e.target.value)} className="form-control" name="email" id="email" placeholder="Your Email" />
                  {
                    error && errors.email &&
                      <div className="validate">
                        {error && errors.email}
                      </div>
                  }
                </div>
              </div>
              <div className="form-group">
                <input type="text" value={subject} onChange={(e) => handleChange('subject', e.target.value)} className="form-control" name="subject" id="subject" placeholder="Subject" />
                {
                    error && errors.subject &&
                      <div className="validate">
                        {error && errors.subject}
                      </div>
                  }
              </div>
              <div className="form-group">
                <textarea className="form-control" value={message} onChange={(e) => handleChange('message', e.target.value)} name="message" rows="5" placeholder="Message"></textarea>
                {
                  error && errors.message &&
                    <div className="validate">
                      {error && errors.message}
                    </div>
                }
              </div>
              <div className="mb-3">
                {error && errors.submit && <div className="error-message">{error && errors.submit}</div>}
                { success && <div className="sent-message">Your message has been sent. Thank you!</div>}
              </div>
              <div className="text-center"><button onClick={handleSubmit}>Send Message</button></div>
            </div>

          </div>

        </div>

      </div>
    </section>
	)
}

export default Contact;
