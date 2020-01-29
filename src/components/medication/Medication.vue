<template>
  <tr class="odd gradeX">
    <td class="center">{{drugs()}}</td>
    <td class="center">{{medication.dosage}}</td>
    <td class="center">{{medication.dosageStart}}</td>
    <td class="center">{{medication.dosageEnd}}</td>
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
    }
  },
  computed: {
    getStatusText: function() {
      let now = moment();
      let dosageStart = moment(this.medication.dosageStart);
      let dosageEnd = moment(this.medication.dosageEnd);
      let text;

      if (now.isBetween(dosageStart, dosageEnd, "days")) text = "active";
      else if (now.isAfter(dosageEnd)) text = "completed";
      else text = "awaiting start";

      return text;
    },
    getStatusClass: function() {
      let now = moment();
      let dosageStart = moment(this.medication.dosageStart);
      let dosageEnd = moment(this.medication.dosageEnd);
      let statusClass;

      if (now.isBetween(dosageStart, dosageEnd, "days"))
        statusClass = "text-success";
      else if (now.isAfter(dosageEnd)) statusClass = "text-danger";
      else statusClass = "text-secondary";

      return statusClass;
    }
  }
};
</script>
