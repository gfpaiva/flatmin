Vue.component('ProgressBar', {
  props: {
    percent: {
      type: Number,
      required: true,
      validator (percent) {
        return percent <= 100;
      }
    }
  },

  template: `
    <div class="progress-bar">
      <div class="progress-bar--stage" :style="{ width }">
        <div class="progress-bar--percent">{{ percent }}</div>
      </div>
    </div>
  `,

  computed: {
    width () {
      let size = this.percent <= 50 ? '+ 60px' : '';

      return `calc(${this.percent}% ${size})`;
    }
  }
});

Vue.component('SwitchBox', {
  props: {
    value: {
      type: Boolean,
      default: true,
    }
  },

  data () {
    return {
      checked: this.value,
    }
  },

  template: `
    <div class="switch-box">
      <label class="switch">
      <input type="checkbox" class="switch--chekbox" @click="toggle" :checked="checked">
      <span class="switch--slider switch--round"></span>
      </label>
    </div>
  `,

  methods: {
    toggle () {
      this.checked = !this.checked;
      this.$emit('input', this.checked);
    }
  }
});

new Vue().$mount('#app');