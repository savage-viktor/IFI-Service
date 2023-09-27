import '../ContactUs/ContactUs.css';

function ContactUs() {
  return (
    <form class="contact-us__form">
      <input class="contact-us__input" type="text" placeholder="Введіть імя" />
      <input
        class="contact-us__input"
        type="phone"
        placeholder="Введіть телефон"
      />
      <input
        class="contact-us__input"
        type="email"
        placeholder="Введіть пошту"
      />
      <textarea
        // cols="30"
        // rows="10"
        class="contact-us__comment"
        type="text"
        placeholder="Повідомлення"
      ></textarea>

      <button class="contact-us__button" type="submit">
        Надіслати
      </button>
    </form>
  );
}

export default ContactUs;
