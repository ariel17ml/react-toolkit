export default class Logger {

  constructor(enabled) {
    if (enabled === undefined) {
      const envEnabled = process.env.REACT_APP_LOGGING_ENABLED;
      this.enabled = envEnabled === undefined ? false : envEnabled;
    } else {
      this.enabled = enabled;
    }
  }

  _log(fn, args) {
    if (this.enabled) {
      fn.apply(console, args);
    } 
  }

  info() {
    this._log(console.info, arguments);
  }

  error() {
    this._log(console.error, arguments);
  }

  trace() {
    this._log(console.trace, arguments);
  }

  table() {
    this._log(console.table, arguments);
  }
}
