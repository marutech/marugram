import React from "react";
import "../css/title.css";

const NewTitle = ({ onAvatarClick }) => {
  const avUrl =
    "https://i.imgur.com/sflhMJs.jpg";

  return (
    <>
      <div className="info__layout">
        <div className="info__logo-wrapper">
          <div className="logo__pic-bg-circle">
            <div className="logo__pic" /* onClick={onAvatarClick} */style={{ backgroundImage: `url(${avUrl})` }} />
          </div>
        </div>
        <div className="info__title-wrapper">
          <h1 className="info__title" data-name="info-title-insta-name">
            Ксюша Рыжая
          </h1>
          <div className="info__type"></div>
          <div className="info__description-wrapper">
            <div className="info__description" data-name="info-title-insta-description">
            <p>Гедонистка</p>
              <p>Амбассадор свободных сисек</p>
              <p>Здесь пьют <span role='img'>🍷</span></p>
              <p>Ржут <span role='img'>😄</span></p>
              <p>И слушают Меладзе <span role='img'>😎</span></p>
            </div>
          </div>
        </div>
        <div className="insta-site__contacts-group">
          <div className="info__cta-wrapper">
            <div className="info__action">
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
                  className="button button_yellow button_large button button_mobile-compact button_mobile-compact-opened "
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
          </div>
          <a
            target="_blank"
            href="https://t.me/ksusha_ryzhaya"
            rel="noreferrer noopener"
            className="button button_large button_gray button_insta-site-subscribe"
            data-device="desktop"
            data-goal="site.instagram_subscribe.click.link"
            data-name="social-button-telegram"
          >
            <svg
              className="button__icon button__icon_telegram"
              width="24"
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

            <span className="button__label">Подписаться на Telegram</span>
          </a>
          <div data-device="desktop" className="desktop__links">
            <div className="gdu">
              <div className="links links_gdu">
                <div className="links__link" data-name="gdu-phone">
                  <a
                    href="tel:+7 902 564-66-20"
                    title="Позвонить"
                    target="_blank"
                    rel="noreferrer noopener"
                    data-link-type="phone"
                    data-goal="site.contacts.click.phone"
                    data-goal-type="phone"
                    data-goal-link="tel:+7 902 564-66-20"
                    data-goal-substitution-phone="false"
                    data-tooltip="Показать номер"
                    className="button button_gray button_icon button_small"
                  >
                    <svg
                      className="button__icon"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.74619 1.13569C-0.959278 3.58868 1.47959 8.15366 4.66157 11.3356C7.8435 14.5171 12.4151 16.9625 14.8678 14.2573C15.0386 14.0689 15.3259 13.6578 15.7297 13.0239C16.0263 12.558 15.8892 11.9399 15.4234 11.6432L12.9873 10.2448C12.5345 9.98507 11.9582 10.1173 11.6639 10.5484C11.4445 10.8698 11.233 11.1318 11.0292 11.3346C9.68554 12.6716 7.98876 11.4806 6.25256 9.74465C4.51598 8.00807 3.33163 6.31825 4.66896 4.97426C4.87167 4.77055 5.13371 4.55901 5.45509 4.33963C5.8862 4.04536 6.01845 3.469 5.75875 3.01622L4.3603 0.580124C4.06362 0.114298 3.44548 -0.0228191 2.97965 0.273857C2.34574 0.677591 1.93459 0.964869 1.74619 1.13569Z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <span>Позвонить</span>
                  </a>
                </div>

                <div className="links__link" data-name="gdu-dropdown">
                  <div
                    data-dropdown="messengers-infoInsta"
                    data-dropdown-position="bottom"
                    data-dropdown-disable-flip="true"
                    className="button button_gray button_icon button_small"
                  >
                    <svg
                      className="button__icon"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.792665 15.4707C0.827128 15.4986 0.869865 15.5142 0.914164 15.5151C2.67909 15.5518 4.07498 15.2154 5.10182 14.506C6.00048 14.826 6.97791 15 8.00012 15C12.4184 15 16.0001 11.75 16.0001 7.5C16.0001 3.25 12.4184 0 8.00012 0C3.58184 0 0.00012207 3.25 0.00012207 7.5C0.00012207 9.44658 0.7515 11.1834 1.99049 12.4942C1.92149 13.3636 1.51224 14.262 0.762818 15.1896C0.693422 15.2754 0.706785 15.4013 0.792665 15.4707ZM8.00012 13C7.53154 13 7.07254 12.953 6.62905 12.8613C5.50234 12.6283 5.03794 12.7347 4.10026 13.4045C3.72848 13.6701 3.06447 13.932 3.06447 13.932C3.06447 13.932 4.0533 11.9739 3.06447 10.6735C2.37487 9.76661 2.00012 8.67551 2.00012 7.5C2.00012 4.4265 4.61435 2 8.00012 2C11.3859 2 14.0001 4.4265 14.0001 7.5C14.0001 10.5735 11.3859 13 8.00012 13Z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <span>Написать</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTitle;
