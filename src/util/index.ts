// TODO: use @myjunior/commons
import fs from "fs";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export function createKeyFile(serviceAccountKeyBase64: string) {
  const buff = new Buffer(serviceAccountKeyBase64, "base64");
  const fileName = `/tmp/${uuidv4()}`;
  fs.writeFileSync(fileName, buff.toString("ascii"));
  return fileName;
}

export function errorData(error: any) {
  let data = {};
  if (error && error.response && error.response.data) {
    data = error.response.data;
  } else {
    console.log(`Error data not defined`);
  }
  return data;
}

export async function sendSuccessResponse(
  jwtToken: string,
  taskToken: string,
  output: any
): Promise<any> {
  if (process.env.MYJUNIOUR_TASK_SUCCESS_URL) {
    await axios.post(process.env.MYJUNIOUR_TASK_SUCCESS_URL, output, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
    console.log("Success status sent");
  } else {
    console.warn("Success end point not defined");
  }
}
export async function sendErrorResponse(
  jwtToken: string,
  taskToken: string,
  output: any
): Promise<any> {
  if (process.env.MYJUNIOUR_TASK_ERROR_URL) {
    await axios.post(process.env.MYJUNIOUR_TASK_ERROR_URL, output, {
      headers: { Authorization: `Bearer ${jwtToken}` },
    });
    console.log("Error status sent");
  } else {
    console.warn("Error end point not defined");
  }
}
