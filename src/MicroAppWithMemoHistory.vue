<template>
  <div id="qk-vue">
  </div>
</template>

<script>
import { loadMicroApp } from "qiankun";
export default {
  data() {
    return {
      microApp: null
    }
  },
  props: {
      name: {
          type: String,
          required: true
      },
      entry: {
          type: String,
          required: true
      },
      params: {
          type: Object,
          default() {
              return {
                  mode: 'abstract'
              }
          }
      },
      path: {
          type: String,
          default: '/'
      }
  },
  watch: {
      name : {
        deep: true,
        handle(newVal) {
            this.init({name: newVal})
        }
      },
      entry : {
        deep: true,
        handle(newVal) {
            this.init({entry: newVal})
        }
      },
      path : {
        deep: true,
        handle(newVal) {
            this.microApp.update({ path: newVal });
        }
      },
      params : {
        deep: true,
        handle(newVal) {
            this.microApp.update({ ...newVal });
        }
      },
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.microApp.unmount();
  },
  methods: {
      init(options = {}) {
        options = {
            name: this.name,
            entry: this.entry,
            container: '#qk-vue',
            props: { ...this.params },
            ...options
        }
        this.microApp = loadMicroApp(options);
        this.microApp.mountPromise.then(() => {
            this.microApp.update({ path: this.path });
        })
      }
  }
}
</script>