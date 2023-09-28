import '../ContactUs/ContactUs.css';

function ContactUs() {
  return (
    <form class="contact-us__form">
      <label class="contact-us__input-label">
        <input
          class="contact-us__input"
          type="text"
          placeholder="Введіть імя"
        />
        <svg class="contact-us__icon" width="20px" height="26px">
          <use href="./images/icons_sprite.svg#icon-form-name"></use>
        </svg>
      </label>
      <label class="contact-us__input-label">
        <input
          class="contact-us__input"
          type="phone"
          placeholder="Введіть телефон"
        />
        <svg class="contact-us__icon" width="16px" height="25px">
          <use href="./images/icons_sprite.svg#icon-form-phone"></use>
        </svg>
      </label>
      <label class="contact-us__input-label">
        <input
          class="contact-us__input"
          type="email"
          placeholder="Введіть пошту"
        />
        <svg class="contact-us__icon" width="23px" height="16px">
          <use href="./images/icons_sprite.svg#icon-form-email"></use>
        </svg>
      </label>

      <textarea
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
