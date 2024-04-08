import asyncHandler from "../middleware/asyncHandler";
import Org from "../models/orgModel";
import { Request, Response } from "express";

const getOrgs = asyncHandler(async (req: Request, res: Response) => {
    const limit = 3; // Number of results per page

    let cursor = req.query.cursor; // Get the cursor from query parameter
    if (!cursor) {
        cursor = ""; // Set default cursor if not provided
    }

    const orgs = await Org.find({ _id: { $gt: cursor } }).limit(limit); // Query for organizations with pagination using cursor
    res.json(orgs);
});

export { getOrgs };
