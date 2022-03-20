import React, { useState } from "react";

const TableFilters = () => {
  const [showStable, setShowStable] = useState(true);
  const [showFavList, setFavList] = useState(false);

  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            onChange={() => setShowStable(!showStable)}
            type="checkbox"
            id="stableCoin"
            defaultChecked={true}
          />
          <label htmlFor="stableCoin">
            {showStable ? "Avec stable coin" : "Sans stable coin"}
          </label>
        </div>
        <div
          className={showFavList ? "no-list-btn" : "no-list-btn active"}
          onClick={() => setFavList(false)}
        >
          <p>Aucune liste</p>
        </div>
        <div
          className={showFavList ? "fav-list active" : "fav-list"}
          onClick={() => setFavList(true)}
        >
          <p>Liste des favoris</p>
          <img src="./assets/star-full.svg" alt="icon-star" />
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
