import React, { useRef, useState } from "react";
import "../App.css";
import Data from "../Data.json";
import RadioButton from "./RadioButton";

const SearchBar = ({ placeholder }) => {
  const [data, setData] = useState(Data);
  const [Food, setFood] = useState("Food");
  const [Electrical, setElectrical] = useState("Electrical");
  const [Grocery, setGrocery] = useState("Grocery");

  const inputHandler = (e) => {
    if (e.target.value === "") {
      window.location.reload(true);
      const tempData = data;
      setData(tempData);
      return;
    }

    const searchedResult = data.filter(
      (item) =>
        item.companyname
          .toLowerCase()
          .startsWith(e.target.value.toLowerCase()) ||
        item.Speciality.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setData(searchedResult);
  };

  const handleChange = (e) => {
    if (e.target.value === "") {
      window.location.reload(true);
      const tempData = data;
      setData(tempData);
      return;
    } else if (e.target.value === "Food") {
      const Food = data.filter((item) =>
        item.Speciality.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setData(Food);
    } else if (e.target.value === "Electrical") {
      setFood("");
      const Electrical = data.filter((item) =>
        item.Speciality.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setData(Electrical);
    } else if (e.target.value === "Grocery") {
      setElectrical("");
      const Grocery = data.filter((item) =>
        item.Speciality.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setData(Grocery);
    }
    setGrocery("");
    setElectrical("");
    setFood("");
  };

  return (
    <>
      {" "}
      <div className="search">
        <div className="search-Input">
          <input
            type="text"
            placeholder={placeholder}
            onChange={inputHandler}
          />
        </div>
        {/* <div className="search-Icon"> {faCoffee} </div> */}
        <h2>Search on the basis of CheckBoxes</h2>
        <div className="radios">
          <RadioButton
            name="Food"
            value={Food}
            label="Food"
            onChange={handleChange}
          />
          <RadioButton
            name="Electrical"
            label="Electrical"
            value={Electrical}
            onChange={handleChange}
          />
          <RadioButton
            name="Grocery"
            value={Grocery}
            label="Grocery"
            onChange={handleChange}
          />
        </div>
        <div className="data-results">
          {data.map((items) => {
            const { id, City, Speciality, companyname, logo } = items;
            return (
              <div key={id}>
                <h2> {companyname} </h2>
                <h2> {City} </h2>
                <h3>{Speciality} </h3>{" "}
                <img style={{ height: "15em" }} src={logo} alt="No Pic Found" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
