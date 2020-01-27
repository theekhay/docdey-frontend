<template>
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div class="card-box">
        <div class="card-head">
          <header>#HealthTip 120</header>
        </div>
        <div class="card-body">{{ tip }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import healthTipService from "@/services/healthTip.service";

export default {
  data() {
    return {
      tip: "loading tips ..."
    };
  },
  methods: {
    getTip: async () => {
      try {
        let resp = await healthTipService.getTip();
        return resp.data.data.tip;
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  },
  async created() {
    this.tip = await this.getTip();
    setInterval(async () => (this.tip = await this.getTip()), 60 * 60 * 100);
  }
};
</script>
