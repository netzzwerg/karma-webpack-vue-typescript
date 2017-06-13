import helper from 'helper';
import * as conf from 'conf.json';

export default class Bar {

  constructor() {}

  log() {
    console.log((<any>conf).foo);
    console.log('Bar ' + helper.version);
  }
}