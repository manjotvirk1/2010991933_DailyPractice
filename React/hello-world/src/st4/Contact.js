import "./Contact.css";
import ContactUs from "./ContactUs";

const Contact = () => {
    return(<>
      <h2 className="common-heading">Feel free to contact us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13748.91182690317!2d76.6528112!3d30.5145926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1665307964150!5m2!1sen!2sin" 
      width="100%" 
      height="350" 
      style={{ border:0 }}
      allowFullScreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">         
      </iframe>
      <ContactUs />
    </>);
}
export default Contact;
