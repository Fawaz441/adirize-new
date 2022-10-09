import React from "react";
import styled from "styled-components";
import { ReactComponent as PlusCircle } from "assets/svgs/add-circle.svg";

const Article = styled.article`
  padding: 16px 14px 14px 12px;
  border: 1px solid #f59848;
  input.tgg-title {
    appearance: unset;
    all: unset;
  }
  background: linear-gradient(
    108.96deg,
    rgba(245, 152, 72, 0.13) -27.23%,
    rgba(189, 81, 3, 0.13) 20.1%,
    rgba(190, 84, 3, 0.13) 56.48%,
    rgba(210, 139, 0, 0.13) 69.51%,
    rgba(202, 117, 1, 0.13) 108.78%,
    rgba(87, 62, 42, 0.13) 130.21%,
    rgba(31, 31, 31, 0.13) 155.87%
  );
  border-radius: 8px;

  .faq-accordion-title label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .faq-accordion-title span {
    margin-left: auto;
    transition: transform 0.4s ease-in-out;
  }

  /* FAQ card: main content */
  /*================================================*/

  .faq-accordion-content {
    color: var(--neutral-soft-color);
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.4s ease-in-out;
  }

  /* Effects */
  /*================================================*/

  /* main title, accordion title effects */

  /* onclick "" */
  .tgg-title:checked + div > label > h2 {
    font-weight: 700;
  }

  .tgg-title:checked + div > label > span {
    will-change: transform;
    transform: rotate(180deg);
  }

  /* main content, acordion text effect */

  .tgg-title:checked ~ .faq-accordion-content {
    will-change: max-height;
    max-height: 400px;
  }
`;

const FAQItem = ({ question, answer, index }) => {
  return (
    <Article className="faq-accordion">
      <input
        type="checkbox"
        className="tgg-title"
        id={`tgg-title-1-${index}`}
      />
      <div className="faq-accordion-title">
        <label htmlFor={`tgg-title-1-${index}`}>
          <h2 className="text-white text-sm">Q: {question}</h2>
          <span className="arrow-icon">
            <PlusCircle />
          </span>
        </label>
      </div>

      <div className="faq-accordion-content">
        <p className="text-white text-sm">{answer}</p>
      </div>
    </Article>
  );
};

const faqItems = [
  {
    question: "How Does AdirizeDAO Work?",
    answer:
      "ADI's protocol-managed treasury, protocol-owned liquidity (POL), bond mechanism, and staking rewards are all geared to regulate supply expansion to a high degree. The protocol makes money from bond sales, and the treasury uses the print to mint ADI and distributes them to stakers.",
  },
  {
    question: "Is $ADI A Stable Coin?",
    answer:
      "$ADI will not be used as a stablecoin. Instead, we aim to emerge as an algorithmic reserve currency backed by other decentralized assets.",
  },
  {
    question: "What Is A Rebase Mechanism?",
    answer:
      "Rebase coins are crypto-assets whose supply is algorithmically altered to maintain price stability. Rather than employing a reserve a certain amount of tokens are burned to preserve price stability.",
  },
  {
    question: "How Do I Buy $ADI?",
    answer:
      "The $ADI token is available via our presale, which you can find on the website. Once the presale ends the token will be listed on DEXs and freely tradeable alongside other cryptocurrencies.",
  },
  {
    question: "Will Unsold Tokens Be Burned?",
    answer:
      "Any tokens unsold in the presale will be burned to increase the valuation of tokens in existence.",
  },
];

const FAQ = () => {
  return (
    <div className="mt-[100px] xl:!mt-[128px]">
      <h3 className="text-center lg-text text-[32px] font-bold mb-[40px]">
        Frequently Asked Questions
      </h3>
      <div className="flex flex-col space-y-8 xl:max-w-[462px] xl:mx-auto">
        {faqItems.map((faqItem, index) => (
          <FAQItem
            question={faqItem.question}
            answer={faqItem.answer}
            key={index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
