import React, { useState } from "react";
import styles from "./ButtonTabs.module.css";

const tabs = [
  {
    label: "HISTORY",
    content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.`,
  },
  {
    label: "APPROACH",
    content: `Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat 
    voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi 
    ut aliquid ex ea commodi consequatur?`,
  },
  {
    label: "CULTURE",
    content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum 
    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
    similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem 
    rerum facilis est.`,
  },
  {
    label: "METHOD",
    content: `Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
    placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut 
    officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.`,
  },
];

// 👉 Component nhỏ cho mỗi tab (phần 1)
const TabButton = ({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.tabButton} ${isActive ? styles.active : ""}`}
    >
      {label}
    </button>
  );
};

const ButtonTabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State phần 1
  const [activeTab2, setActiveTab2] = useState(0); // State phần 2

  return (
    <div className={styles.tabsContainer}>
      <h2 className={styles.heading}>Button Tabs</h2>

      {/* ===== PHẦN 1 ===== */}
      <div className={styles.tabBox1}>
        <div className={styles.tabButtons}>
          {tabs.map((tab, index) => (
            <TabButton
              key={index}
              label={tab.label}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className={styles.tabContent}>
          <p>{tabs[activeIndex].content}</p>
        </div>
      </div>

      {/* ===== PHẦN 2 ===== */}
      <div className={styles.tabLineButtons}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab2(index)}
            className={`${styles.tabLineButton} ${
              activeTab2 === index ? styles.activeLine : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabLineContent}>
        <p>{tabs[activeTab2].content}</p>
      </div>
    </div>
  );
};

export default ButtonTabs;
