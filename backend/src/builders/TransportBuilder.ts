import {Transport} from "../interfaces/Transport";
import {Bike} from "../models/transports/Bike";
import {Walk} from "../models/transports/Walk";
import {Car} from "../models/transports/Car";

export class TransportBuilder {

    bike(): Transport{
        return new Bike();
    }

    walk(): Transport{
        return new Walk();
    }

    bus(): Transport{
        return new Bike();
    }

    car(car: Car): Transport{
        return car;
    }
}

