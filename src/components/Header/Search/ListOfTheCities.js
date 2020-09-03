import React from "react";

const ListOfTheCities = ({ list, submit }) => {
  return (
    <div className="listOfCities-box">
      <ul className="city-list">
        {list.map((item) => {
          return (
            <li key={item.id} onClick={(event) => submit(item, event)}>
              <h4>{item.city}</h4> {item.country}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListOfTheCities;
