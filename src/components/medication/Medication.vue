<template>
  <tr class="odd gradeX">
    <td class="center">{{drugs()}}</td>
    <!-- <td class="center">{{medication.dosage}}</td> -->
    <td class="center">{{ formatDate(medication.dosageStart) }}</td>
    <td class="center">{{ formatDate(medication.dosageEnd) }}</td>
    <td class="center">{{medication.dosageTimes.join(", ")}}</td>
    <td class="center" :class="getStatusClass">{{ getStatusText }}</td>
  </tr>
</template>

<script>
import moment from "moment";

export default {
  props: {
    medication: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      meds: this.medication,
      statusText: "",
      statusClass: ""
    };
  },
  methods: {
    drugs: function() {
      return this.medication.drugs.map(drug => drug.name).join(", ");
    },
    formatDate: function(date) {
      console.log(date);
      return moment(date).format("YYYY-MM-DD");
    }
  },
  computed: {
    getStatusText: function() {
      let now = moment();
      let dosageStart = moment(this.medication.dosageStart);
      let dosageEnd = moment(this.medication.dosageEnd);
      let text;

      if (now.isSameOrAfter(dosageStart, "days") && now.isSameOrBefore(dosageEnd, "days"))
        text = "Active";
      else if (now.isAfter(dosageEnd, "days")) text = "Completed";
      else text = "Awaiting Start";

      return text;
    },
    getStatusClass: function() {
      let now = moment();
      let dosageStart = moment(this.medication.dosageStart);
      let dosageEnd = moment(this.medication.dosageEnd);
      let statusClass;

      if (now.isSameOrAfter(dosageStart, "days") && now.isSameOrBefore(dosageEnd, "days"))
        statusClass = "text-success";
      else if (now.isAfter(dosageEnd, "days")) statusClass = "text-danger";
      else statusClass = "text-secondary";

      return statusClass;
    }
    
  }
};
</script>
