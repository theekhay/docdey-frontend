<template>
  <div>
    <dashboard-layout>
      <div class="page-content-wrapper">
        <div class="page-content">
          <div class="page-bar">
            <div class="page-title-breadcrumb">
              <div class="pull-left">
                <div class="page-title">Appointment List</div>
              </div>
              <ol class="breadcrumb page-breadcrumb pull-right">
                <li>
                  <i class="fa fa-home"></i>&nbsp;
                  <router-link to="/dashboard">Home</router-link>&nbsp;
                  <i class="fa fa-angle-right"></i>
                </li>
                <li>
                  <a class="parent-item" href>Appointment</a>&nbsp;
                  <i class="fa fa-angle-right"></i>
                </li>
                <li class="active">Appointment List</li>
              </ol>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card card-box">
                <div class="card-head">
                  <header></header>
                  <!-- <div class="tools">
                    <a class="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
                    <a class="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
                    <a class="t-close btn-color fa fa-times" href="javascript:;"></a>
                  </div> -->
                </div>
                <div class="card-body">
                  <div class="table-scrollable">
                    <table
                      id="tableExport"
                      class="display table table-hover table-checkable order-column m-t-20"
                      style="width: 100%"
                    >
                      <thead>
                        <tr>
                          <th></th>
                          <th>Name</th>
                          <!-- <th>Email</th> -->
                          <th>Date Of Appointment</th>
                          <th>Duration</th>
                          <!-- <th>Mobile</th> -->
                          <th>Consulting Doctor</th>
                          <th>Injury/Condition</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <Appointment
                          v-for="appointment in appointments"
                          :appointment="appointment"
                          :key="appointment._id"
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dashboard-layout>
  </div>
</template>
<script>
import DashboardLayout from "@/layouts/DashboardLayout";
import Appointment from "@/components/Appointment";
import appointmentService from "@/services/appointment.service";

export default {
  components: {
    DashboardLayout,
    Appointment
  },
  data() {
    return {
      appointments: []
    };
  },
  methods: {
    getAppointments: async function() {
      let appointments = await appointmentService.getAppointments();
      this.appointments = appointments.data.data;
    }
  },
  async mounted() {
    this.getAppointments();
  }
};
</script>
