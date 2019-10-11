/**
 *
 * @namespace faker.hospital
 */
var hospital = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * hospital
     *
     * @method faker.hospital.hospital
     */
    self.hospital = function () {
      return fake('{{hospital.hname}} {{hospital.drname}}');
    };
  
    self.hospital.schema = {
      "description": "Generates a random hospital.",
      "sampleResults": ["NIMS", "AIIMS", "Appolo"]
    };
  
    /**
     * hname
     *
     * @method faker.hospital.hname
     */
    self.hname = function () {
      return faker.random.arrayElement(faker.definitions.hospital.hname);
    };
  
    self.hname.schema = {
      "description": "Generates a hname name.",
      "sampleResults": ["NIMS", "AIIMS", "Apollo"]
    };
  
  
    /**
     * drname
     *
     * @method faker.hospital.drname
     */
    self.drname = function () {
      return faker.random.arrayElement(faker.definitions.hospital.drname);
    };
  
    self.drname.schema = {
      "description": "Generates a hospital drname.",
      "sampleResults": ["Dr.Praveen", "Dr.Deepak", "Dr.saideep"]
    };
  
    /**
     * surgery.js
     *
     * @method faker.hospital.surgery.js
     */
    self.surgery = function () {
      return faker.random.arrayElement(faker.definitions.hospital.surgery);
    };
  
    self.surgery.schema = {
      "description": "Generates a hospital surgery.js.",
      "sampleResults": ["Cataract surgery", "Appendectomy surgery", "Free skin graft surgery", "cesarean section surgery"]
    };
  
    /**
     * fee
     *
     * @method faker.hospital.fee
     */
    self.fee = function () {
      return faker.random.arrayElement(faker.definitions.hospital.fee);
    };
  
    self.fee.schema = {
      "description": "Generates a fee type.",
      "sampleResults": ["One lakh", "Two lakh", "Free"]
    };
  };
  
  module["exports"] = hospital;
  