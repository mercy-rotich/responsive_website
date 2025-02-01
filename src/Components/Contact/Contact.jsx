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

    formData.append("access_key", "9b6dde3b-a155-4cdd-9736-9620dc7ba0ea");

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
}
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us Your message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laudantium, ducimus porro perspiciatis a molestiae nisi in placeat sapiente sit sunt autem facilis facere iure animi minima sint consectetur similique eveniet itaque. Obcaecati, sed!</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contach Mercy @Mercy@gmail.com</li>
                <li><img src={phone_icon} alt="" />0712345678</li>
                <li><img src={location_icon} alt="" />Location:Meru University</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='' placeholder='Enter Your name' required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter your phone number' required/>
                <label>Write Your Message Here</label>
               <textarea name="message" id="" rows="6" placeholder='enter your message' required></textarea>
               <button type="submit" className='btn dark-btn'> Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact