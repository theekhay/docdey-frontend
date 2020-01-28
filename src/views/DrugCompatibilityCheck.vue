<template>
  <div>
    <dashboard-layout>
      <div class="page-content-wrapper">
        <div class="page-content">
          <div class="page-bar">
            <div class="page-title-breadcrumb">
              <div class="pull-left">
                <div class="page-title">Drug Check</div>
              </div>
              <ol class="breadcrumb page-breadcrumb pull-right">
                <li>
                  <i class="fa fa-home"></i>&nbsp;
                  <router-link to="/dashboard">Home</router-link>&nbsp;
                  <i class="fa fa-angle-right"></i>
                </li>
                <li class="active">Drug Check</li>
              </ol>
            </div>
          </div>

          <drug-interaction></drug-interaction>
        </div>
      </div>
    </dashboard-layout>
  </div>
</template>
<script>
import DashboardLayout from "@/layouts/DashboardLayout";
import DrugInteraction from "@/components/DrugInteraction";
export default {
  components: {
    DashboardLayout,
    DrugInteraction
  }
};
</script>
