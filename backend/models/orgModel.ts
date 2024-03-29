import mongoose, { Schema, InferSchemaType } from "mongoose";

const orgSchema = new Schema({
    orgName: {
        type: String,
        required: true,
    },
    orgPurpose: {
        type: String,
        required: true,
    },
    orgItems: {
        type: [String],
        required: true,
    },
});

type Org = InferSchemaType<typeof orgSchema>;

const Org = mongoose.model("Org", orgSchema);

export default Org;
