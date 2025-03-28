import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "0e225b3e-1160-4358-87b0-36a531384428");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>We’re here to help and would love to hear from you. Whether you have questions, need assistance, or just want to learn more about our services, our team is ready to assist you. Reach out to us via phone, email, or visit us in person—we're always happy to connect and provide the support you need. 
            Your inquiries are important to us, and we strive to respond as quickly as possible.</p>
            <ul>
                <li><img src={mail_icon} alt="" />amitydvbca@gmail.com</li>
                <li><img src={phone_icon} alt="" />+1 123 456 678</li>
                <li><img src={location_icon} alt="" />Yamuna Nagar, Haryana, India</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder='enter your mobile number' required />
                <label>Write your message here</label>
                <textarea name='message' rows="6" placeholder='enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact