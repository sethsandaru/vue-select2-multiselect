import Vue from 'vue'
import Select2MultipleControl from './Select2MultipleControl.vue'
const Select2Component = {};
Select2Component.install = function (Vue, options) {
    Vue.component('Select2', Select2MultipleControl)
};

export default Select2Component;