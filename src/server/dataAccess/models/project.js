import { model, Schema } from 'mongoose';

const ProjectModel = model(
    "projects",
    new Schema({
        number: {
            type: String,
            required: true,
            unique: true
        },
        customerId: String,
        address: String,
        type: String,
    })
);

export default ProjectModel;


//TODO: Customer ID to be changed from string to object ID when customer table is created.
// customerId: {
//     type: Schema.Types.ObjectId,
//     ref: "customers"
//   },