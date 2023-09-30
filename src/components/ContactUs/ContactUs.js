import Form from './Form/Form';
import contactUs from '../../contactUs.json';

function ContactUs() {

  const handleSubmit = (name, phone, email, message) => {
    contactUs.push({ name, phone, email, message });

    console.log('Сабміт!!!', name, phone, email, message);
    console.log(contactUs);

 
  };

  return <Form onSubmit={handleSubmit} />;
}

export default ContactUs;
