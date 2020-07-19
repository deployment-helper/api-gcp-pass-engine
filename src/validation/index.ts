import Joi, { ObjectSchema } from "@hapi/joi";

const reqCreateApplication: ObjectSchema = Joi.object({
  taskToken: Joi.string().required(),
  serviceAccountKeyBase64: Joi.string().required(),
  gcpProjectId: Joi.string().required(),
});
const reqGetApplication: ObjectSchema = Joi.object({
  taskToken: Joi.string().required(),
  serviceAccountKeyBase64: Joi.string().required(),
  gcpProjectId: Joi.string().required(),
});

export { reqCreateApplication, reqGetApplication };
