import {Trip} from "./interfaces/Trip";

class CalculatorService {
  newCalculate(trip: Trip){
    const result = trip.calculateCo2()
    return {co2: trip.calculateCo2(), label: this._getLabel(result)}
  }

  calculate(d: any, t: any, ct: any, p: any, c: any): any {
    var result = 0;
    var lbl = '';

    if (t === 'bike' || t === 'walk') {
      result = 0;
      lbl = 'GREEN';
    } else if (t === 'car') {
      result = this._calculateCar(d, ct, p, c);
      lbl = this._getLabel(result);
    } else if (t === 'train') {
      result = this._calculateTrain(d, c);
      lbl = this._getLabel(result);
    } else if (t === 'bus') {
      result = d * 0.104;
      lbl = this._getLabel(result);
    }

    return { co2: result, label: lbl };
  }

  _calculateCar(d: any, ct: any, p: any, c: any): number {
    var result = 0;
    switch (ct) {
      case 'thermal':
        result = d * 0.192;
        break;
      case 'electric':
        if (c === 'France') {
          result = d * 0.012;
        } else if (c === 'Germany') {
          result = d * 0.045;
        } else if (c === 'Poland') {
          result = d * 0.078;
        } else {
          result = d * 0.04;
        }
        break;
      case 'hybrid':
        result = d * 0.098;
        break;
    }

    if (p > 0) {
      result = result / p;
    }

    return result;
  }

  _calculateTrain(d: any, c: any): number {
    var result = 0;
    switch (c) {
      case 'France':
        result = d * 0.0032;
        break;
      case 'Germany':
        result = d * 0.032;
        break;
      case 'Poland':
        result = d * 0.069;
        break;
      case 'Norway':
        result = d * 0.001;
        break;
      default:
        result = d * 0.041;
        break;
    }
    return result;
  }

  _getLabel(result: number): string {
    if (result < 5) {
      return Co2Labels.GREEN;
    }
    if (result >= 5 && result < 15) {
      return Co2Labels.ORANGE;
    }
    return Co2Labels.RED;
  }
}

export enum Co2Labels {
  GREEN = 'GREEN',
  ORANGE = 'ORANGE',
  RED = 'RED',
}

export default new CalculatorService();
