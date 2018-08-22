# v-select2-multiple-component
Select2 control with multiple select for Vue.

## Dependencies libraries
V-Select2-Component is baseed on these plugins and libs(version):
- [vue(>= 2.0-release)](https://vuejs.org/index.html)
- [jQuery](https://jquery.com/)
- [select2](https://select2.github.io/)
- [v-select2-component](https://github.com/godbasin/vue-select2) (the select2 component version but not support multiple select)

## How to install & use
---
### Install
``` cmd
// npm install
npm install v-select2-multiple-component --save
```

### Use in component
1. Import as global component (use everywhere):
``` javascript
// import Select2MultipleControl
import Select2MultipleControl from 'v-select2-multiple-component';

Vue.component('Select2MultipleControl', Select2);
new Vue({
	// ...
})
```

2. Import into a single component:
``` javascript
<template>
  <div>
    <select2-multiple-control v-model="myValue" :options="myOptions" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
    <h4>Value: {{ myValue }}</h4>
  </div>
</template>
<script>
import Select2MultipleControl from 'v-select2-multiple-component';

export default {
    // declare Select2MultipleControl
    components: {Select2MultipleControl},
    data() {
        return {
            myValue: '',
            myOptions: ['op1', 'op2', 'op3'] // or [{id: key, text: value}, {id: key, text: value}]
        }
    },
    method: {
        myChangeEvent(val){
            console.log(val);
        },
        mySelectEvent({id, text}){
            console.log({id, text})
        }
    }
}
</script>
```

### Option settings
- `options`: `option[]`
  - data source for select2
  - `option`: `{id: key, text: value}` or `string`
- `v-model`: option values that is selected
  - `id[]` or `string[]`
- `change`
  - callback when option selected change
  - return value
  - parmas: same with `v-model`
- `select`
  - callback when option selected
  - parmas: `option`(`{id: value, text: key, selected: ifSelected}` or `string`)
- `disabled`
  - if select is disabled
- `settings`
  - configurable settings, see [Select2 options API](https://select2.org/configuration/options-api)
  - `setting`: `{ settingOption: value, settingOption: value }`

## Final
Special thanks to godbasin for the non-multiselect select2.

Copyright &copy; 2018 by Seth Phat [Phat Tran Minh](http://sethphat.com)