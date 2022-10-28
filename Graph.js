const getGraph = () => {
  let adj = {
    1: {
      val: "f",
      children: [2],
    },
    2: {
        val:"_",
        children: [3]
    },
    3: {
        val:"c"
    }
  };
  return adj;
};

module.exports = { getGraph };
