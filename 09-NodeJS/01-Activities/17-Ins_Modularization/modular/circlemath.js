const getCircleArea = (radius) => Math.PI * radius * radius;
const getSphereVolume = (radius) => 1.33 * Math.PI * radius * radius * radius;
const yesExported = () => "hello I am exported"
const notExported = () => "hello I am not exported"


// module.exports is an object we use to store variables or methods
module.exports = {
  getCircleArea,
  getSphereVolume,
  yesExported
};
