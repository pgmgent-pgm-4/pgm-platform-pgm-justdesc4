import React from "react";

export default function Filter({ items, onItemClick }) {
  return (
    <div>
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
