<template>
  <div>
    <dashboard-layout>
      <div class="page-content-wrapper">
        <div class="page-content">
          <div class="page-bar">
            <div class="page-title-breadcrumb">
              <div class="pull-left">
                <div class="page-title">Specialists</div>
              </div>
              <ol class="breadcrumb page-breadcrumb pull-right">
                <li>
                  <i class="fa fa-home"></i>&nbsp;
                  <router-link to="/dashboard">Home</router-link>&nbsp;
                  <i class="fa fa-angle-right"></i>
                </li>
                <li class="active">Specialists</li>
              </ol>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="tabbable-line">
                <!-- <ul class="nav nav-pills nav-pills-rose">
                  <li class="nav-item tab-all">
                    <a class="nav-link active show" href="#tab1" data-toggle="tab">List View</a>
                  </li>
                  <li class="nav-item tab-all">
                    <a class="nav-link" href="#tab2" data-toggle="tab">Grid View</a>
                  </li>
                </ul> -->
                <div class="tab-content">
                  <div class="tab-pane active fontawesome-demo" id="tab1">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="card card-box">
                          <div class="card-head">
                            <header></header>
                            <div class="tools">
                              <a class="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
                              <a
                                class="t-collapse btn-color fa fa-chevron-down"
                                href="javascript:;"
                              ></a>
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
                                    <th></th>
                                    <th>Name</th>
                                    <th>Specialization</th>
                                    <th>Role</th>
                                    <th>Experience</th>
                                    <!-- <th>Mobile</th>
                                    <th>Email</th> -->
                                    <!-- <th>Joining Date</th> -->
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <Specialist
                                    v-for="specialist in specialists"
                                    :key="specialist._id"
                                    :specialist="specialist"
                                  ></Specialist>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
import Specialist from "@/components/Specialist";
import specialistService from "@/services/specialist.service";
export default {
  components: {
    DashboardLayout,
    Specialist
  },
  data() {
    return {
      specialists: []
    };
  },
  methods: {
    getSpecialists: async function() {
      let specialists = await specialistService.getSpecialists();
      this.specialists = specialists.data.data;
    }
  },

  async mounted() {
    this.getSpecialists();
  }
};
</script>
