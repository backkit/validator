class ValidatorService {

  constructor({appdir}) {
    this.validators = {};
    this.appdir = appdir;
  }

  /**
   * Register new validator function
   *
   * @param {String} _ns - validator namespace
   * @param {String} _name - validator name
   * @return {Function}
   */
  add(_ns, _name, _fn) {
    this.validators[_ns] = this.validators[_ns] || {};
    this.validators[_ns][_name] = _fn;
    return this;
  }

  /**
   * Get validator function
   *
   * @param {String} _ns - validator namespace
   * @param {String} _name - validator name
   * @return {Function}
   */
  get(_ns, _name) {
    return this.validators[_ns] && this.validators[_ns][_name] ? this.validators[_ns][_name] : null;
  }

  /**
   * Register validators
   */
  register() {
    return [
      `${this.appdir}/res/validator/*.js`,
      `${this.appdir}/res/validator/*/*.js`
    ];
  }
}

module.exports = ValidatorService;