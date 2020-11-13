import React from "react";

import "./Pagination.css";

function Pagination({
  numberOfPage,
  currentPage,
  onButtonClick
}) {
  const getPaginationButtons = () => {
    let buttons = [];

    for (let i = 0; i < numberOfPage; i++) {
      buttons.push(
        <button
          key={i}
          className="pagination-button"
          disabled={i === currentPage}
          onClick={() => onButtonClick(i)}
        >
          {i + 1}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="pagination">
      {getPaginationButtons()}
    </div>
  );
}

export default Pagination;
