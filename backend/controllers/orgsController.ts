import asyncHandler from "../middleware/asyncHandler";
import Org from "../models/orgModel";
import { Request, Response } from "express";

const getOrgs = asyncHandler(async (req: Request, res: Response) => {
    const limit = 3; // Number of results per page

    // Get the cursor from the request from redux toolkit

    let cursor = req.query.cursor;
    let orgs;
    if (cursor) {
        orgs = await Org.find({ _id: { $gt: cursor } }).limit(limit);
    } else {
        orgs = await Org.find().limit(limit);
    }
    res.json(orgs);
});

export { getOrgs };
