import React, { useState } from "react";
import styles from "./ButtonAccordions.module.css";

const tabData = [
  {
    label: "HISTORY",
    content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
      et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
      quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.`,
  },
  {
    label: "APPROACH",
    content: `Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
      consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore 
      et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
      exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?`,
  },
  {
    label: "CULTURE",
    content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate 
    non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum 
    fuga. Et harum quidem rerum facilis est.`,
  },
  {
    label: "METHOD",
    content: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id 
    quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus 
    autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae 
    sint et molestiae non recusandae.`,
  },
];

const AccordionItem = ({
  label,
  content,
  isOpen,
  onClick,
}: {
  label: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className={styles.accordionItem}>
      <button
        className={`${styles.accordionHeader} ${isOpen ? styles.active : ""}`}
        onClick={onClick}
      >
        {label}
      </button>
      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
};

const ButtonAccordions: React.FC = () => {
  const [singleOpenIndex, setSingleOpenIndex] = useState<number | null>(null);
  const [multiOpenStates, setMultiOpenStates] = useState<boolean[]>(
    new Array(tabData.length).fill(false)
  );

  const handleSingleClick = (index: number) => {
    setSingleOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleMultiClick = (index: number) => {
    setMultiOpenStates((prev) =>
      prev.map((open, i) => (i === index ? !open : open))
    );
  };

  return (
    <div className={styles.accordionsWrapperAll}>
      <h2>Button Accordions</h2>
      <div className={styles.accordionsWrapper}>
        <div className={styles.accordionColumn}>
          <h4>Single Accordions</h4>
          {tabData.map((item, index) => (
            <AccordionItem
              key={index}
              label={item.label}
              content={item.content}
              isOpen={singleOpenIndex === index}
              onClick={() => handleSingleClick(index)}
            />
          ))}
        </div>

        <div className={styles.accordionColumn}>
          <h4>Multi Accordions</h4>
          {tabData.map((item, index) => (
            <AccordionItem
              key={index}
              label={item.label}
              content={item.content}
              isOpen={multiOpenStates[index]}
              onClick={() => handleMultiClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonAccordions;
