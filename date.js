// module.exports = "Hello world"; it transfer data to main
exports.getDate = function () {
    const today = new Date();
  
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    };
  
    return today.toLocaleDateString("en-US", options);
  }
   
  exports.getDay = function() {
    const today = new Date();
  
    const options = {
      weekday: 'long'
    };
  
    return today.toLocaleDateString("en-US", options);
  }