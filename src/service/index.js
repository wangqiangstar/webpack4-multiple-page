import cheshi from './ceshi/api';
import beike from './beike/api';
import ceping from './ceping/api';


export default {
  cs: {
    ...cheshi
  },
  bk: {
    ...beike
  },
  cp: {
    ...ceping
  }
};
