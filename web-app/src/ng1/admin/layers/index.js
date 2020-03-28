import angular from 'angular';
import adminLayer from './layer.component';
import adminLayers from './layers.component';
import adminLayerEdit from './layer.edit.component';
import adminLayerPreview from './layer.preview.component';
import adminLayerDelete from './layer.delete.component';
import adminLayerWmsEdit from './layer.wms.edit.component';
import layerAccess from './layer.access.component';

angular.module('mage')
  .component('adminLayer', adminLayer)
  .component('adminLayers', adminLayers)
  .component('adminLayerEdit', adminLayerEdit)
  .component('adminLayerPreview', adminLayerPreview)
  .component('adminLayerDelete', adminLayerDelete)
  .component('adminLayerWmsEdit',adminLayerWmsEdit)
  .component('adminLayerAccess', layerAccess);
