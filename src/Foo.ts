import helper from 'helper';
import * as conf from 'conf.json';

export default class Foo {

  constructor() {}

  log() {
    console.log((<any>conf).foo);
    console.log('Foo ' + helper.version);
  }
}