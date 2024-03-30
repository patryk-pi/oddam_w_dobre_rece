import asyncHandler from "../middleware/asyncHandler";
import Org from "../models/orgModel";

const getOrgs = asyncHandler(async (req, res) => {
    const orgs = await Org.find({});
    res.json(orgs);
});

export { getOrgs };
