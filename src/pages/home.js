import { useEffect, useState } from "react";
// import { getExercices } from "../services/api";
import { allExercises } from "../services/db";
import CardExercice from "../components/card/card";
import Header from "../components/header/header";
import Pagination from "../components/pagination/pagination";
import ErrorMessage from "../components/errorMessage/errorMessage";
import "./home.css";

const Home = () => {
  const [cardData, setCardData] = useState([]);
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(5);

  const [bodyPart, setBodyPart] = useState("");
  const [targetMuscle, setTargetMuscle] = useState("");
  const [equipment, setEquipment] = useState("");

  const [error, setError] = useState("");

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const handleHeaderOnChange = (filterFields) => {
    setBodyPart(filterFields.bodyPartValue);
    setTargetMuscle(filterFields.targetMuscleValue);
    setEquipment(filterFields.equipmentValue);
  };

  useEffect(() => {
    function getData() {
      //const res = await getExercices();
      //const data = await res.json();
      const data = allExercises;
      const getExercicesList = () => {
        return data.map((exercice) => {
          return {
            name: exercice.name,
            image: exercice.gifUrl,
            bodyPart: exercice.bodyPart,
            targetMuscle: exercice.target,
            equipment: exercice.equipment,
          };
        });
      };
      const exercicesList = getExercicesList();

      const message = "There are no exercices for your filtered data.";

      if (bodyPart && targetMuscle && equipment) {
        const filteredExercicesList = exercicesList.filter((ex) => {
          return (
            ex.bodyPart === bodyPart &&
            ex.targetMuscle === targetMuscle &&
            ex.equipment === equipment
          );
        });

        if (filteredExercicesList.length === 0) {
          setError(message);
        } else {
          setError("");
        }

        setCardData(filteredExercicesList);
      } else if (bodyPart && targetMuscle) {
        const filteredExercicesList = exercicesList.filter((ex) => {
          return ex.bodyPart === bodyPart && ex.targetMuscle === targetMuscle;
        });

        if (filteredExercicesList.length === 0) {
          setError(message);
        } else {
          setError("");
        }

        setCardData(filteredExercicesList);
      } else if (bodyPart && equipment) {
        const filteredExercicesList = exercicesList.filter((ex) => {
          return ex.bodyPart === bodyPart && ex.equipment === equipment;
        });

        if (filteredExercicesList.length === 0) {
          setError(message);
        } else {
          setError("");
        }

        setCardData(filteredExercicesList);
      } else if (targetMuscle && equipment) {
        const filteredExercicesList = exercicesList.filter((ex) => {
          return ex.targetMuscle === targetMuscle && ex.equipment === equipment;
        });

        if (filteredExercicesList.length === 0) {
          setError(message);
        } else {
          setError("");
        }

        setCardData(filteredExercicesList);
      } else if (bodyPart) {
        const filteredExercicesList = exercicesList.filter((ex) => {
          return ex.bodyPart === bodyPart;
        });

        setError("");
        setCardData(filteredExercicesList);
      } else if (targetMuscle) {
        const filteredExercicesList = exercicesList.filter((ex) => {
          return ex.targetMuscle === targetMuscle;
        });

        setError("");
        setCardData(filteredExercicesList);
      } else if (equipment) {
        const filteredExercicesList = exercicesList.filter((ex) => {
          return ex.equipment === equipment;
        });

        setError("");
        setCardData(filteredExercicesList);
      } else {
        setError("");
        setCardData(exercicesList);
      }
    }

    getData();
  }, [bodyPart, targetMuscle, equipment]);

  // Records to be displayed on the current page
  const currentRecords =
    cardData.length > 0 &&
    cardData.slice(indexOfFirstRecord, indexOfLastRecord);
  console.log(currentRecords);

  const nPages =
    cardData.length > 0 && Math.ceil(cardData.length / recordsPerPage);

  return (
    <div className="home-container">
      <Header onChange={handleHeaderOnChange} />
      {!error && (
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          bodyPart={bodyPart}
          targetMuscle={targetMuscle}
          equipment={equipment}
        />
      )}
      {error && <ErrorMessage error={error} />}
      {cardData.length > 0 && (
        <CardExercice data={cardData} records={currentRecords} />
      )}
    </div>
  );
};

export default Home;
