import React from "react";
import { FaqItem } from "../components/FaqItem";

export default () => {
  const items = [
    {
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae, rem delectus nihil aliquid, ipsa corporis qui quam at repellat assumenda ratione esse obcaecati tenetur quos harum necessitatibus eos architecto!",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae, rem delectus nihil aliquid, ipsa corporis qui quam at repellat assumenda ratione esse obcaecati tenetur quos harum necessitatibus eos architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae, rem delectus nihil aliquid, ipsa corporis qui quam at repellat assumenda ratione esse obcaecati tenetur quos harum necessitatibus eos architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae, rem delectus nihil aliquid, ipsa corporis qui quam at repellat assumenda ratione esse obcaecati tenetur quos harum necessitatibus eos architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae, rem delectus nihil aliquid, ipsa corporis qui quam at repellat assumenda ratione esse obcaecati tenetur quos harum necessitatibus eos architecto!"
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae, rem delectus nihil aliquid, ipsa corporis qui quam at repellat assumenda ratione esse obcaecati tenetur quos harum necessitatibus eos architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae, rem delectus nihil aliquid, ipsa corporis qui quam at repellat assumenda ratione esse obcaecati tenetur quos harum necessitatibus eos architecto!"
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae, rem delectus nihil aliquid, ipsa corporis qui quam at repellat assumenda ratione esse obcaecati tenetur quos harum necessitatibus eos architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae, rem delectus nihil aliquid, ipsa corporis qui quam at repellat assumenda ratione esse obcaecati tenetur quos harum necessitatibus eos architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae, rem delectus nihil aliquid, ipsa corporis qui quam at repellat assumenda ratione esse obcaecati tenetur quos harum necessitatibus eos architecto!"
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae, rem delectus nihil aliquid, ipsa corporis qui quam at repellat assumenda ratione esse obcaecati tenetur quos harum necessitatibus eos architecto!"
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae, rem delectus nihil aliquid, ipsa corporis qui quam at repellat assumenda ratione esse obcaecati tenetur quos harum necessitatibus eos architecto!"
    }
  ];
  return (
    <div className="container-style faq">
      {items.map(item => <FaqItem {...item} />)}
    </div>
  );
};
