class Thermostat {

  constructor() {
    this.MIN_TEMP = 10;
    this.powerSavingMode = true;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.DEFAULT_TEMP = 20;
    this.temperature = this.DEFAULT_TEMP;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
  }
  
  getTemp() {
    return this.temperature
  }

  upTemp() {
    if (this.isMaxTemp()) {
      return;
    }
    this.temperature += 1
  }

  downTemp() {
    if (this.isMinTemp()) {
      return;
    }
    this.temperature -=1
  }
  
  isMinTemp() {
    return this.temperature === this.MIN_TEMP
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }

  isMaxTemp() {
    if (this.isPowerSavingModeOn() === false) {
      return this.temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }

  resetTemp() {
    this.temperature = this.DEFAULT_TEMP;
  }

  energyUsage() {
    if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return 'low-usage';
    }
    if (this.temperature <= this.HIGH_ENERGY_USAGE_LIMIT) {
      return 'medium-usage';
    } else {
    return 'high-usage';
    }
  }



}