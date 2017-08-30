Vue.component('ProgressBar', {
  template: `
    <div class="progress-bar">
      <div class="progress-bar--stage" :style="{ width }">
        <div class="progress-bar--percent">{{ percent }}</div>
      </div>
    </div>
  `,

  props: {
    percent: {
      type: Number,
      required: true,
      validator () {
        return percent <= 100;
      }
    }
  },

  computed: {
    width () {
      let size = this.percent <= 50 ? '+ 60px' : '';

      return `calc(${this.percent}% ${size})`;
    }
  }
});

new Vue().$mount('#app');