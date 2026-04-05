const analyzeArray = (array) => {
  return {
    average: array.reduce((sum, current) => sum + current, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

module.exports = analyzeArray;
