<template>
  <div id="app">
    <!-- <audio >
      <source src="@/assets/audio/alarm1.mp3" type="audio/mpeg" />Your browser does not support the audio element.
    </audio>-->
    <router-view />
  </div>
</template>
<script>
import medicationService from "@/services/medication.service";
const moment = require("moment");

export default {
  data() {
    return {
      hasMeditation: false,
      lastCheckTime: moment().format("HH:mm")
    };
  },

  methods: {
    alertUser: function() {
      let alarm = new Audio(
        "http://soundbible.com/mp3/analog-watch-alarm_daniel-simion.mp3"
      );
      alarm.play();
    },

    checkMedication: async function() {
      this.lastCheckTime = moment().format("HH:mm");

      console.log("this.lastCheckTime");
      console.log(this.lastCheckTime);

      let resp = await medicationService.getActiveMedication();
      let dosageTimes = resp.data.data;

      let activeDosageTimes = dosageTimes.filter(
        time => time == this.lastCheckTime
      );

      console.log("activeDosageTimes");
      console.log(activeDosageTimes);

      if (activeDosageTimes.length > 0) {
        this.hasMeditation = true;
      } else {
        this.hasMeditation = false;
      }
    }
  },
  watch: {
    hasMeditation: function() {
      if (this.hasMeditation) this.alertUser();
    }
  },
  async created() {
    setInterval(() => this.checkMedication(), 1000 * 60);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
