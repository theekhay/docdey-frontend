<template>
  <div id="app">
    <modal v-if="showModal" @close="closeModal">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <!-- <h3 slot="header">custom header</h3> -->
  </modal>
    <router-view />
  </div>
</template>
<script>
import medicationService from "@/services/medication.service";
import modal from "@/components/modals/MedicationAlert";

const moment = require("moment");

export default {
  components: {
    modal
  },
  data() {
    return {
      showModal: false,
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

      if (dosageTimes.length > 0) {

        let activeDosageTimes = dosageTimes.reduce((acc, dosage) => {
            console.log(dosage)
            if (!(dosage.time in acc)) acc = [...acc, ...dosage.dosageTimes] //acc.concat(dosage.dosageTimes);
            return acc;
        }, []);

        console.log("activeDosageTimes");
        console.log(activeDosageTimes);

        if (activeDosageTimes.includes(this.lastCheckTime) ) {
          this.hasMeditation = true;
          this.showModal = true;
        } else {
          this.hasMeditation = false;
        }
      }
    },

    closeModal: function(){
      this.showModal = false;
      this.hasMeditation = false;
    }
  },
  watch: {
    hasMeditation: function() {
      if (this.hasMeditation) this.alertUser();
    }
  },
  async created() {
    setInterval(() => this.checkMedication(), 1000 * 6);
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
