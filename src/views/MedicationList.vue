<template>
  <div>
    <dashboard-layout>
      <div class="page-content-wrapper">
        <div class="page-content">
          <div class="page-bar">
            <div class="page-title-breadcrumb">
              <div class="pull-left">
                <div class="page-title">My Medications</div>
              </div>
              <ol class="breadcrumb page-breadcrumb pull-right">
                <li>
                  <i class="fa fa-home"></i>&nbsp;
                  <router-link to="/dashboard">Home</router-link>&nbsp;
                  <i class="fa fa-angle-right"></i>
                </li>
                <li>
                  <a class="parent-item" href>Payments</a>&nbsp;
                </li>
              </ol>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card card-box">
                <div class="card-head">
                  <header></header>
                  <div class="tools">
                    <a class="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
                    <a class="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
                    <a class="t-close btn-color fa fa-times" href="javascript:;"></a>
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-scrollable">
                    <table
                      class="table table-hover table-checkable order-column full-width"
                      id="example4"
                    >
                      <thead>
                        <tr>
                          <th class="center">Drug</th>
                          <th class="center">Dosage</th>
                          <th class="center">Dosage Start</th>
                          <th class="center">Dosage Ends</th>
                          <th class="center">Dosage Times</th>
                          <!-- <th class="center">Tax</th>
                          <th class="center">Discount</th>
                          <th class="center">Total</th> -->
                        </tr>
                      </thead>
                      <tbody>
                        <Medication
                          v-for="medication in medications"
                          :key="medication._id"
                          :medication="medication"
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
import Medication from "@/components//medication/Medication";
import medicationService from "@/services/medication.service";
export default {
  components: {
    DashboardLayout,
    Medication
  },
  data() {
    return {
      medications: []
    };
  },
  methods: {
    getMedications: async function(){
      let resp = await medicationService.getMedications();
      this.medications = resp.data.data;
    }
  },

  async mounted(){
    this.getMedications();
  }
};
</script>
