<template>
  <div>
    <dashboard-layout>
      <div class="page-content-wrapper">
        <div class="page-content">
          <div class="page-bar">
            <div class="page-title-breadcrumb">
              <div class="pull-left">
                <div class="page-title">Medication</div>
              </div>
              <ol class="breadcrumb page-breadcrumb pull-right">
                <li>
                  <i class="fa fa-home"></i>&nbsp;
                  <router-link to="/dashboard">Home</router-link>&nbsp;
                  <i class="fa fa-angle-right"></i>
                </li>
                <li>
                  <a class="parent-item" href>Medication</a>&nbsp;
                  <i class="fa fa-angle-right"></i>
                </li>
                <li class="active">New Medication</li>
              </ol>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="card card-box">
                <div class="card-head">
                  <header>Create New Medication</header>
                  <button
                    id="panel-button"
                    class="mdl-button mdl-js-button mdl-button--icon pull-right"
                    data-upgraded=",MaterialButton"
                  >
                    <i class="material-icons">more_vert</i>
                  </button>
                  <ul
                    class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                    data-mdl-for="panel-button"
                  >
                    <li class="mdl-menu__item">
                      <i class="material-icons">assistant_photo</i>Action
                    </li>
                    <li class="mdl-menu__item">
                      <i class="material-icons">print</i>Another action
                    </li>
                    <li class="mdl-menu__item">
                      <i class="material-icons">favorite</i>Something else here
                    </li>
                  </ul>
                </div>
                <div class="card-body" id="bar-parent">
                  <form @submit.prevent="saveMedicaiton" class="form-horizontal">
                    <div class="form-body">
                      <div class="form-group row">
                        <label class="control-label col-md-3">
                          Drug
                          <span class="required">*</span>
                        </label>
                        <div class="col-md-5">
                          <select
                            class="form-control input-height"
                            name="drug"
                            v-model="medication.drug"
                          >
                            <option value>Select Drug</option>
                            <option v-for="drug in drugs" :key="drug._id">{{ drug.name }}</option>
                          </select>
                        </div>
                      </div>

                      <div class="form-group row">
                        <label class="control-label col-md-3">
                          Dosage (daily)
                          <span class="required">*</span>
                        </label>
                        <div class="col-md-5">
                          <select
                            class="form-control input-height"
                            name="dosage"
                            v-model="medication.dosage"
                            @change="setDosage($event)"
                          >
                            <option value>Select Dosage</option>
                            <option value="1">once daily</option>
                            <option value="2">twice daily</option>
                            <option value="3">thrice daily</option>
                            <!-- <option value="0">others</option> -->
                          </select>
                        </div>
                      </div>

                      <!-- <dosage-time
                        v-for="index in dosage"
                        :key="index"
                        :dosageTimeIndex="index"
                        :time="getDosageTime(index)"
                      ></dosage-time>-->

                      <div v-for="index in medication.dosage" :key="index" class="form-group row">
                        <label class="control-label col-md-3">set time</label>
                        <div class="col-md-5">
                          <div class="row">
                            <div class="col-md-12">
                              <input
                                class="form-control input-height"
                                type="time"
                                ref="dosageTimes"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="form-group row">
                        <label class="control-label col-md-3">Dosage Start</label>
                        <div class="col-md-5">
                          <div
                            class="input-group date form_date"
                            data-date
                            data-date-format="dd MM yyyy"
                            data-link-field="dtp_input2"
                            data-link-format="yyyy-mm-dd"
                          >
                            <input
                              class="form-control input-height"
                              size="16"
                              type="date"
                              v-model="medication.dosageStart"
                            />
                            <span class="input-group-addon">
                              <span class="fa fa-calendar"></span>
                            </span>
                          </div>
                          <input type="hidden" id="dtp_input2" value />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="control-label col-md-3">Dosage Ends</label>
                        <div class="col-md-5">
                          <div
                            class="input-group date form_date"
                            data-date
                            data-date-format="dd MM yyyy"
                            data-link-field="dtp_input2"
                            data-link-format="yyyy-mm-dd"
                          >
                            <input
                              class="form-control input-height"
                              size="16"
                              type="date"
                              v-model="medication.dosageEnd"
                            />
                            <span class="input-group-addon">
                              <span class="fa fa-calendar"></span>
                            </span>
                          </div>
                          <input type="hidden" id="dtp_input5" value />
                        </div>
                      </div>
                    </div>
                    <div class="form-actions">
                      <div class="row">
                        <div class="offset-md-3 col-md-9">
                          <button type="submit" class="btn btn-info">Submit</button>&nbsp;&nbsp;
                          <router-link to="/medication">
                            <button type="button" class="btn btn-danger">Cancel</button>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </form>
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
//import DosageTime from "@/components/medication/DosageTime";
import drugService from "@/services/drug.service";
import medicationService from "@/services/medication.service";
import moment from "moment";

export default {
  components: {
    DashboardLayout
    //DosageTime
  },
  data() {
    return {
      drugs: [],
      dosageTimes: [],
      medication: {}
    };
  },
  methods: {
    setDosage: function(event) {
      this.medication.dosage = parseInt(event.target.value);
      //this.setDosageTimes(this.mediaction.dosage);
    },

    getDosageTime: function(index) {
      let dosageTimes = this.$store.getters.dosageTimes;
      return dosageTimes[index] || "";
    },

    saveMedicaiton: async function() {
      let dosageTimes = [];

      let drugs = [
        {
          name: this.medication.drug,
          id: "876789"
        }
      ];

      //medication should not be in the past
      if (
        moment().isAfter(moment(this.medication.dosageStart)) ||
        moment().isAfter(moment(this.medication.dosageEnd))
      ) {
        this.$toaster.warning(
          "Medication doage start or end dates cannot be in the past"
        );
        throw Error();
      }

      if (
        moment(this.medication.dosageStart).isAfter(
          moment(this.medication.dosageEnd)
        )
      ) {
        this.$toaster.warning(
          "Invalid medication range. Medication start cannot be greater than medication end"
        );
        throw Error();
      }

      for (let i = 0; i < this.medication.dosage; i++) {
        let dosageTime = this.$refs.dosageTimes[i].value;
        dosageTimes.push(dosageTime);
      }

      let authUser = JSON.parse(localStorage.getItem("authUser"));
      this.medication.userId = authUser._id;
      this.medication.dosageTimes = dosageTimes;
      this.medication.drugs = drugs;

      try {
        await medicationService.createMedication(this.medication);
        this.$toaster.success(
          "Medication has been saved and reminder has been set! stay Healthy "
        );
        this.medication = {};
      } catch (e) {
        console.log(e);
        this.$toaster.error("There was an error saving this medication");
      }

      console.log(this.medication);
    }
  },
  async mounted() {
    try {
      let resp = await drugService.getDrugs();
      this.drugs = resp.data.data;
    } catch (e) {
      this.$toaster.warning("uable to retreive list of drugs");
    }
  }
};
</script>
