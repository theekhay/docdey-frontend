<template>
  <div>
    <dashboard-layout>
      <div class="page-content-wrapper">
        <div class="page-content">
          <div class="page-bar">
            <div class="page-title-breadcrumb">
              <div class="pull-left">
                <div class="page-title">Drugs</div>
              </div>
              <ol class="breadcrumb page-breadcrumb pull-right">
                <li>
                  <i class="fa fa-home"></i>&nbsp;
                  <router-link to="/dashboard">Home</router-link>&nbsp;
                  <i class="fa fa-angle-right"></i>
                </li>
                <li class="active">Drugs</li>
              </ol>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12">
              <div class="card-box">
                <div class="card-head pull-left">
                  <header>Drugs</header>
                </div>
                <div class="card-body">
                  <table
                    class="mdl-data-table ml-table-bordered mdl-js-data-table  is-upgraded"
                  >
                    <thead>
                      <tr>
                        <th class="mdl-data-table__cell--non-numeric">Name</th>
                        <th class="mdl-data-table__cell--non-numeric">
                          Common brands
                        </th>
                        <th>Variants</th>
                        <th>Side Effects</th>
                        <th>Components</th>
                        <th>Dosage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- <td></td> -->
                      <Drug
                        v-for="drug in drugs"
                        :key="drug._id"
                        :drug="drug"
                      />
                      <!-- <tr>
                        <td class="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
                        <td class="mdl-data-table__cell--non-numeric">Gandhi road, Ahmedabad</td>
                        
                        <td>$1.00</td>
                        <td>$0.90</td>
                        <td>$12.90</td>
                      </tr>

                      <tr>
                        <td class="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
                        <td class="mdl-data-table__cell--non-numeric">Gandhi road, Ahmedabad</td>
                        
                        <td>$1.00</td>
                        <td>$0.90</td>
                        <td>$1.25</td>
                      </tr>

                      <tr>
                        <td class="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
                        <td class="mdl-data-table__cell--non-numeric">Gandhi road, Ahmedabad</td>
                        
                        <td>$1.00</td>
                        <td>$0.90</td>
                        <td>$2.35</td>
                      </tr>

                      <tr>
                        <td class="mdl-data-table__cell--non-numeric">Acrylic (Transparent)</td>
                        <td class="mdl-data-table__cell--non-numeric">Gandhi road, Ahmedabad</td>
                        
                        <td>$1.00</td>
                        <td>$0.90</td>
                        <td>$12.90</td>
                      </tr>

                      <tr>
                        <td class="mdl-data-table__cell--non-numeric">Plywood (Birch)</td>
                        <td class="mdl-data-table__cell--non-numeric">Gandhi road, Ahmedabad</td>
                        
                        <td>$1.00</td>
                        <td>$0.90</td>
                        <td>$1.25</td>
                      </tr>

                      <tr>
                        <td class="mdl-data-table__cell--non-numeric">Laminate (Gold on Blue)</td>
                        <td class="mdl-data-table__cell--non-numeric">Gandhi road, Ahmedabad</td>
                        
                        <td>$1.00</td>
                        <td>$0.90</td>
                        <td>$2.35</td>
                      </tr> -->

                    </tbody>
                  </table>
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
import Drug from "@/components/Drug";
import drugService from "@/services/drug.service"
export default {
  components: {
    DashboardLayout,
    Drug
  },
  data() {
    return {
      drugs: ""
    };
  },
  methods: {
    getDrugs: async function() {
      let resp = await drugService.getDrugs();
      this.drugs = resp.data.data;
    }
  },
  async mounted() {
    this.getDrugs();
  }
};
</script>
