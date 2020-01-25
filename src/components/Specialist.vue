<template>
  <tr class="odd gradeX">
    <td class="patient-img">
      <img src="../assets/img/doc/doc1.jpg" alt />
    </td>
    <td>{{ specialistInfo.fullName }}</td>
    <td class="left">{{ specialistInfo.department }}</td>
    <td class="left">{{ specialistInfo.role }}</td>
    <td class="left">{{ specialistInfo.yearsOfExperience }}</td>
    <td>
      <a href="tel:4444565756">{{ specialistInfo.phoneNumber }}</a>
    </td>
    <td>
      <a href="mailto:shuxer@gmail.com">{{ specialistInfo.email }}</a>
    </td>
    <!-- <td class="left">22 Feb 2000</td> -->
    <td class="center">
      <a href="edit_doctor.html" class="btn btn-tbl-edit btn-xs">
        <i class="fa fa-pencil"></i>
      </a>
      <a class="btn btn-tbl-delete btn-xs">
        <i class="fa fa-trash-o"></i>
      </a>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    specialist: {
      type: Object,
      required: true,
      description: "A specialist object"
    }
  },
  data() {
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      specialistInfo: this.specialist
    };
  }
};
</script>