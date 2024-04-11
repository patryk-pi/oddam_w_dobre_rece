import asyncHandler from "../middleware/asyncHandler";
import Org from "../models/orgModel";
import { Request, Response } from "express";

const getOrgs = asyncHandler(async (req: Request, res: Response) => {
    // Get the cursor from the request from redux toolkit

    let cursor = req.query.cursor;
    let orgs;
    if (cursor) {
        orgs = await Org.find({ _id: { $gt: cursor } });
    } else {
        orgs = await Org.find();
    }
    res.json(orgs);
});

export { getOrgs };
