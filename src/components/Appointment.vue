<template>
  <tr class="odd gradeX">
    <td class="patient-img">
      <img src="../assets/img/user/user4.jpg" alt />
    </td>
    <td>{{ appointment.patient.name }}</td>
    <!-- <td>
      <a href="mailto:shuxer@gmail.com">{{ appointment.patient.email }}</a>
    </td> -->
    <td class="center">{{ formatDate(appointment.date) }}</td>
    <td class="center">{{ appointment.startTime }} - {{ appointment.endTime }}</td>
    <!-- <td class="center">{{ appointment.endTime }}</td> -->
    <!-- <td>
      <a href="tel:444543564">{{ appointment.patient.phoneNumber }}</a>
    </td> -->
    <td>{{ appointment.specialist.name }}</td>
    <td>{{ appointment.condition }}</td>
    <td>
      <a href="edit_appointment.html" class="btn btn-tbl-edit btn-xs">
        <i class="fa fa-pencil"></i>
      </a>
      <button class="btn btn-tbl-delete btn-xs">
        <i class="fa fa-trash-o"></i>
      </button>
    </td>
  </tr>
</template>
<script>
import moment from "moment";
export default {
  props: {
    appointment: {
      type: Object,
      //required: true,
      description: "The appointment object",
      default: () => {
        return {
          patient: {
            name: "Tunde Kelanu",
            email: "tkelai@test.com",
            phoneNumber: "0908765563"
          },
          specialist: {
            name: "John Obinna"
          },
          condition: "check up",
          date: "12 Jan 2020",
          startTime: "08:10",
          endTime: "09:30"
        };
      }
    }
  },
  data() {
    return {
      //appointment: this.appointment
    };
  },
  methods: {
    formatDate: function(date) {
      console.log(date);
      return moment(date).format("YYYY-MM-DD");
    }
  }
};
</script>
