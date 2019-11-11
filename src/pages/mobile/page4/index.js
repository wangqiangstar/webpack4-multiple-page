
import App from "./App.vue";
import entry from "../../entry.js";
/* eslint-disable */
const entryAPI = () => import(/* webpackChunkName: 'page4-entry'*/ "../../entry.js")
const entryAPI1 = () => import(/* webpackChunkName: 'page4-entry'*/ "../../entry.js")
console.log(entryAPI)
const entryAPI2 = () => import(/* webpackChunkName: 'page4-entry'*/ "../../entry.js")
console.log(entryAPI2)
console.log(entryAPI1)
console.log('page4')
entry({
  App
});