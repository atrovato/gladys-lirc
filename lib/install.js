const shared = require('./shared.js');

module.exports = function(sails) {
  console.log('LIRC: creating brain sentences...');
  return gladys.sentence.insertBatch(shared.sentences).then((res) => {
    console.log('LIRC: creating brain answers...');
    return gladys.answers.insertBatch(shared.answers);
  }).then((res) => {
    console.log('LIRC: start new brain training...');
    return gladys.brain.trainNew();
  });
};
