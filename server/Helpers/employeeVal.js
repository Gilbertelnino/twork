import Hipi from '@hapi/joi';

const signupValidation = (newEmployee) => {
  const schema = hapi.object({
    firstName: hapi.string().required(),
    lastName: hapi.string().required(),
    email: hapi.string().required(),
    password: hapi.string().required(),
    gender: hapi.string().required(),
    department: hapi.string().required(),
    address: hapi.string().required(),
  });
  return schema.validate(newEmployee);
};
export default signupValidation;