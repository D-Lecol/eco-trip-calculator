import {Country} from "../interfaces/Country";
import {Train} from "../models/transports/Train";

export class TrainBuilder {
    from(country: Country){
        const train = new Train();
        train.country = country;
        return train;
    }
}