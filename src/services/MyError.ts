export default class MyError extends Error {

    constructor(message: string) {
        super(message);
        this.name = this.constructor.name;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
