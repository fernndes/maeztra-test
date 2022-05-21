import React from "react";
import footer from "../../mocks/footer-content";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container footer">
      {footer.content.map((section, index) => {
        return (
          <div className="footer__content">
            <p className="footer__title">{section.title}</p>
            <ul>
              {section.topics.map((topic, topicIndex) => {
                return (
                  <li
                    key={`${topic.title}-${index}-${topicIndex}`}
                    className="footer__content-option"
                  >
                    {topic.title}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
