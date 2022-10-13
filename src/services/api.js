const getExercices = async () => {
  const res = await fetch("allExercices.json");
  return res;
};

export { getExercices };
