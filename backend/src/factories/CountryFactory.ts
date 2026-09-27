import {Country} from "../interfaces/Country.js";
import {Countries} from "../enums/Countries.js";
import {France} from "../models/countries/France.js";
import {Germany} from "../models/countries/Germany.js";
import {Poland} from "../models/countries/Poland.js";
import {Norway} from "../models/countries/Norway.js";

export class CountryFactory {
    static createByName(name: string): Country {
        switch (name) {
            case Countries.FRANCE:
                return new France()
            case Countries.GERMANY:
                return new Germany()
            case Countries.POLAND:
                return new Poland()
            case Countries.NORWAY:
                return new Norway()
        }

        return null
    }
}