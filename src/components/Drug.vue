<template>
  <tr>
    <td class="mdl-data-table__cell--non-numeric">{{ drug.name }}</td>
    <td class="mdl-data-table__cell--non-numeric">
      {{ drug.commonBrands.join(", \n") }}
    </td>

    <td>{{ drug.variants.join(", ") }}</td>
    <td>{{ drug.sideEffects.join(", ") }}</td>
    <td>{{ drug.components.join(", ") }}</td>
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
    },
    data() {
      return {
        drug: this.drug
      };
    }
  }
};
</script>