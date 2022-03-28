import { connect } from "mongoose";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const startConnection = async () => {
    try {
        const db = await connect("mongodb://localhost/mevm-fullstackapp");
        console.log(db.connection.name);
    } catch (error) {
        console.error(error);
    }
};
