import {Transport} from "../interfaces/Transport.js";
import {Bike} from "../models/transports/Bike.js";
import {Walk} from "../models/transports/Walk.js";
import {Bus} from "../models/transports/Bus.js";
import {Car} from "../models/transports/Car.js";
import {Train} from "../models/transports/Train.js";

export class TransportBuilder {

    bike(): Transport {
        return new Bike();
    }

    walk(): Transport {
        return new Walk();
    }

    bus(): Transport {
        return new Bus();
    }

    car(car: Car): Transport {
        return car;
    }

    train(train: Train): Transport {
        return train;
    }
}

