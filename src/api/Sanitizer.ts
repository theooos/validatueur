import { Optional, Promise } from "./types";
import { ValidatorArgs } from "./ValidatorArgs";

export interface Sanitizer<T, U = T> {
	sanitize(value: T, args: ValidatorArgs): Promise<U>;
}
