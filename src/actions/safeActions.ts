import {createSafeActionClient, DEFAULT_SERVER_ERROR} from "next-safe-action";

class MyServerActionError extends Error {}

export const safeAction = createSafeActionClient({
    handleReturnedServerError(e) {
        if (e instanceof MyServerActionError) {
            return e.message;
        }
        return DEFAULT_SERVER_ERROR;
    }
});

export const safeAuthenticatedAction = createSafeActionClient({
    handleReturnedServerError(e) {
        if (e instanceof MyServerActionError) {
            return e.message;
        }
        return DEFAULT_SERVER_ERROR;
    },
    async middleware() {


        //Récupération de la session

        // If the session is not valid, you would throw an error.


        //return userID
        return 2;
    },
});

