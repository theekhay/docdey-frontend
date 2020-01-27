<template>
  <tr class="odd gradeX">
    <td class="center">{{drugs()}}</td>
    <td class="center">{{medication.dosage}}</td>
    <td class="center">{{medication.dosageStart}}</td>
    <td class="center">{{medication.dosageEnd}}</td>
    <td class="center">{{medication.dosageTimes.join(", ")}}</td>
  </tr>
</template>

<script>
export default {
  props: {
    medication: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      meds: this.medication
    };
  },
  methods: {
    drugs: function() {
      return this.medication.drugs.map(drug => drug.name).join(", ");
    }
  }
};
</script>
