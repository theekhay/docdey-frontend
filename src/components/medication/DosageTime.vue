<template>
  <div class="form-group row">
    <label class="control-label col-md-3">set time</label>
    <div class="col-md-5">
      <div class="row">
        <div class="col-md-12">
          <input
            class="form-control input-height"
            @change="setDosageTime()"
            type="text"
            :value="time"
            ref="input"
            id="example-time-input"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    time: {
      type: String,
      required: true
    },
    dosageTimeIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      timeValue: this.time,
      index: this.dosageTimeIndex
    };
  },
  methods: {
    setDosageTime: function() {
      let payload = {
        index: this.index,
        time: this.timeValue
      }
      this.$store.commit("updateDosageTime", payload);
      console.log(this.$store.getters.dosageTimes);
    }
  }
}
</script>
