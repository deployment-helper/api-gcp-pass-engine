import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import Gcp from "@myjunior/gcp-appengine";
import { BaseController } from "../../base.controller";
import { reqCreateApplication, reqGetApplication } from "../../../validation";

import { ErrorUnAuthorizedAccess } from "../../../errors";
import { JWT } from "../../../jwt";
import { Config } from "../../../config";
import { BCRYPT } from "../../../constants";
import {
  createKeyFile,
  errorData,
  sendErrorResponse,
  sendSuccessResponse,
} from "../../../util";

import logger from "../../../logger";

type ReqCreateApp = {
  taskToken: string;
  serviceAccountKeyBase64: string;
  gcpProjectId: string;
};
// TODO: jwt token implementation pending
export class AppEngineController extends BaseController {
  constructor() {
    super();
  }
  /**
   * Create a AppEgnine Application on GCP.
   * @param req HttpRequest
   * @param resp HttpResponse
   * @param next NextFuntion
   */
  async create(req: Request, resp: Response, next: NextFunction) {
    logger.info("Crate AppEngine Application Req Start");
    const body: ReqCreateApp = req.body;
    this.validateReqSchema(reqCreateApplication, body);
    const keyFile = createKeyFile(body.serviceAccountKeyBase64);
    const gcp = new Gcp(keyFile);
    gcp
      .createInstance(body.gcpProjectId)
      .then(async (gcpResp: any) => {
        if (gcpResp instanceof Error) {
          resp.status(500).send(errorData(gcpResp));
          await sendErrorResponse("", body.taskToken, errorData(gcpResp));
          logger.info("Crate AppEngine Application Req End with Error");
        } else {
          resp.status(200).send(gcpResp.data);
          sendSuccessResponse("", body.taskToken, gcpResp.data);
          logger.info("Crate AppEngine Application Req End successfully");
        }
      })
      .catch(async (err) => {
        resp.status(500).send(err);
        await sendErrorResponse("", body.taskToken, err);
        logger.info("Crate AppEngine Application Req End with Error");
      });
  }
  /**
   *  Get AppEgnine application details from GCP.
   * @param req HttpRequest
   * @param resp HttpResponse
   * @param next NextFuntion
   */
  async get(req: Request, resp: Response, next: NextFunction) {
    logger.info("Get AppEngine Application Req Start");
    const body: ReqCreateApp = req.body;
    this.validateReqSchema(reqGetApplication, body);
    const keyFile = createKeyFile(body.serviceAccountKeyBase64);
    const gcp = new Gcp(keyFile);
    /* tslint:disable */
    gcp
      .getInstance(body.gcpProjectId)
      .then(async (gcpResp: any) => {
        if (gcpResp instanceof Error) {
          resp.status(500).send(errorData(gcpResp));
          await sendErrorResponse("", body.taskToken, errorData(gcpResp));
          logger.info("Get AppEngine Application Req End with Error");
        } else {
          resp.status(200).send(gcpResp.data);
          sendSuccessResponse("", body.taskToken, gcpResp.data);
          logger.info("Get AppEngine Application Req End successfully");
        }
      })
      .catch(async (err) => {
        resp.status(500).send(err);
        await sendErrorResponse("", body.taskToken, err);
        logger.info("Get AppEngine Application Req End with Error");
      });
  }
}
