import helper from 'helper';

export default class Foo {

  constructor() {}

  log() {
    console.log('Foo ' + helper.version);
  }
}