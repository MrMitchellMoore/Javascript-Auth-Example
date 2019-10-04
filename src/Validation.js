const Joi = require('@hapi/joi');

// Register Validation
const registerValidation = async data => {
  const schema = Joi.object().keys({
    name: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .min(6)
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return await Joi.validate(data, schema);
};

// Login Validation
const loginValidation = async data => {
  const schema = Joi.object().keys({
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return await Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
