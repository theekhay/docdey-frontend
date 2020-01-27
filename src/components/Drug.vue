<template>
  <tr>
    <td class="mdl-data-table__cell--non-numeric">{{ drug.name }}</td>
    <td class="mdl-data-table__cell--non-numeric">{{ drug.commonBrands.join(", \n") }}</td>

    <td>{{ drug.variants.join(", ") }}</td>
    <td>{{ drug.sideEffects.join(", ") }}</td>
    <td>{{ components() }}</td>
    <td>{{ drug.dosage }}</td>
  </tr>
</template>

<script>
export default {
  props: {
    drug: {
      type: Object,
      requied: true,
      description: "The details about the drug"
    }
  },
  methods: {
    components: function() {
      return this.drug.components.map(component => component.name).join(", ");
    }
  }
};
</script>
