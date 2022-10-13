import { filterData } from "../../services/db";
import "./header.css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const localData = useRef({
    bodyPartValue: "",
    targetMuscleValue: "",
    equipmentValue: "",
  });
  const containerRef = useRef();

  const handleSelectedFilter = (e, localDataKey) => {
    localData.current[localDataKey] = e.target.value;
    props.onChange(localData.current);
  };

  console.dir(containerRef.current);

  return (
    <div className="header-container" ref={containerRef}>
      <div className="logo-container">
        <FontAwesomeIcon icon={faDumbbell} />
        <p className="header-title">Fitness App</p>
      </div>

      <select onChange={(e) => handleSelectedFilter(e, "bodyPartValue")}>
        <option value="">--Body part--</option>
        {filterData.bodyParts.map((bodyPart) => {
          return (
            <option
              className="header-option"
              style={{ textTransform: "capitalize" }}
              value={bodyPart}
            >
              {bodyPart.toUpperCase()}
            </option>
          );
        })}
      </select>
      <select onChange={(e) => handleSelectedFilter(e, "targetMuscleValue")}>
        <option value="">--Target muscle--</option>
        {filterData.targetMuscles.map((targetMuscle) => {
          return (
            <option className="header-option" value={targetMuscle}>
              {targetMuscle.toUpperCase()}
            </option>
          );
        })}
      </select>
      <select onChange={(e) => handleSelectedFilter(e, "equipmentValue")}>
        <option value="">--Equipment--</option>
        {filterData.equipment.map((el) => {
          return (
            <option className="header-option" value={el}>
              {el.toUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Header;
