import mongoose, {Schema} from "mongoose";

const AssignmentSchema = new Schema({
    course: {
        type: String
    },
    assignment_name: {
        type: String
    },
    deadline: {
        type: String
    }
},{
    collation: 'assignment'
});

const Assignment = mongoose.model('Assignment', AssignmentSchema);
export default Assignment;