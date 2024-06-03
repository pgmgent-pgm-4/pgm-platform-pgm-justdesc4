import React from "react";
import "./css/Filter.css";

export default function Filter({ items, onItemClick }) {
  return (
    <div className="filter">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <button onClick={() => onItemClick(item)}>
              {item.title || item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
