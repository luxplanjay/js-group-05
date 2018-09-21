class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(type, callback) {
    if (!this.events[type]) {
      this.events[type] = [];
    }

    this.events[type].push(callback);
  }

  emit(type, ...args) {
    if (!this.events[type]) return;

    this.events[type].forEach(callback => {
      callback.apply(null, args);
    });
  }

  unsubscribe(type, fn) {
    if (!this.events[type]) return;

    this.events[type] = this.events[type].filter(callback => callback !== fn);
  }
}
