import React from "react";
import "../css/title.css";

const ContactBtn = () => {
  return (
    <div className="info__action info__action_post">
      <div className="info__action-button" data-name="cta-button">
        <a
          href="https://t.me/Ryzhaya_ksusha"
          data-goal-title="Написать в Telegram"
          target="_blank"
          rel="noreferrer noopener"
          data-type="telegram"
          data-role="actionButton"
          data-name="cta-telegram"
          data-goal="site.main_action.click.telegram"
          data-goal-type="telegram"
          data-goal-source="header"
          className="button button_gray button_large button button_mobile-compact button_mobile-compact-opened "
          id=""
        >
          <svg
            width="24px"
            className="button__icon"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.086 20.3064C17.3677 20.5059 17.7308 20.5557 18.0546 20.4332C18.3783 20.3099 18.6163 20.0334 18.6881 19.6982C19.4484 16.1248 21.2929 7.08016 21.985 3.82961C22.0375 3.58462 21.95 3.33 21.7575 3.16638C21.565 3.00275 21.2981 2.95551 21.0601 3.04388C17.3914 4.40185 6.09273 8.64113 1.47459 10.35C1.18147 10.4585 0.990723 10.7402 1.00035 11.0491C1.01085 11.3588 1.21909 11.6274 1.51921 11.7176C3.59029 12.337 6.30885 13.1989 6.30885 13.1989C6.30885 13.1989 7.57932 17.0357 8.24168 18.9869C8.32481 19.2319 8.51643 19.4244 8.7693 19.4909C9.02129 19.5565 9.29078 19.4874 9.4789 19.3098C10.5429 18.3053 12.1878 16.7522 12.1878 16.7522C12.1878 16.7522 15.3133 19.0438 17.086 20.3064ZM7.45245 12.7142L8.92154 17.5598L9.24791 14.4912C9.24791 14.4912 14.9239 9.37173 18.1596 6.45368C18.2541 6.36793 18.2672 6.22443 18.1885 6.12381C18.1106 6.02319 17.9671 5.99956 17.8595 6.06781C14.1093 8.46263 7.45245 12.7142 7.45245 12.7142Z"
              fill="currentColor"
            ></path>
          </svg>

          <span className="button__label">Написать в Telegram</span>
        </a>
      </div>
    </div>
  );
};

export default ContactBtn;
