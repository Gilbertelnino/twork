import Hapi from '@hapi/joi';

const signupValidation = (newEmployee) => {
  const schema = Hapi.object({
    firstName: Hapi.string().required(),
    lastName: Hapi.string().required(),
    email: Hapi.string().required(),
    password: Hapi.string().required(),
    gender: Hapi.string().required(),
    department: Hapi.string().required(),
    address: Hapi.string().required(),
  });
  return schema.validate(newEmployee);
};
export default signupValidation;