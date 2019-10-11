// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');
var faker = new Faker({ locales: require('./lib/locales') });
module['exports'] = faker;
console.log(faker.hospital.drname());
console.log(faker.hospital.hname());
console.log(faker.hospital.surgery());
console.log(faker.hospital.fee());