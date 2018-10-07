class SmartCalculator {
  constructor(initialValue) {
    this.stack = [initialValue];
  }

  add(number) {
    this.stack.push('+', number);
    return this;
  }
  
  subtract(number) {
    this.stack.push('-', number)
    return this;
  }

  multiply(number) {
    this.stack.push('*', number);
    return this;
  }

  devide(number) {
    this.stack.push('/', number);
    return this;
  }

  pow(number) {
    this.stack.push('**', number);
    return this;
  }

  valueOf() {
    return eval(this.stack.join(''));
  }
}

module.exports = SmartCalculator;
