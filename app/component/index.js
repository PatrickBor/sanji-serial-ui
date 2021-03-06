import angular from 'angular';
import {sjCore} from 'sanji-core-ui';

import {sjSerialInfo} from './info';
import {sjSerialForm} from './form';

import i18nConfig from './component.i18n';
import SerialService from './serial.service';
import SerialWindowComponent from './window.component';

const sjSerial = angular.module('sanji.serial', [
  sjCore,
  sjSerialInfo,
  sjSerialForm
])
  .config(i18nConfig)
  .service('serialService', SerialService)
  .component('sanjiSerialWindow', SerialWindowComponent)
  .name;
export {sjSerial};
