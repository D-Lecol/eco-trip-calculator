import {Country} from "../interfaces/Country.js";
import {Train} from "../models/transports/Train.js";

export class TrainBuilder {
    from(country: Country) {
        const train = new Train();
        train.country = country;
        return train;
    }
}