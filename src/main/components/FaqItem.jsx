import React from "react";

export const FaqItem = ({ question, answer }) => {
  return (
    <article>
      <div className="faq__inner">
        <h1 className="faq__inner__title">{question}</h1>
        <p>{answer}</p>
      </div>
    </article>
  );
};
