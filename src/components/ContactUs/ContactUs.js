import '../ContactUs/ContactUs.css';

function ContactUs() {
  return  <form className='ContactUs'>
    <input type="text" placeholder='Введіть імя' />
    <input type="phone" placeholder='Введіть телефон'/>
    <input type="email" placeholder='Введіть пошту'/>
    <input type="text" placeholder='Повідомлення'/>
    <button type='submit' >Надіслати</button>
  </form>
}

export default ContactUs;
