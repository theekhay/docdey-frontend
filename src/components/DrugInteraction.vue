<template>
  <div>
    <div class="row"></div>
    <div class="row">
      <div class="col-md-12 col-sm-6">
        <div class="card card-box">
          <div class="card-head">
            <header> Drug Interaction</header>
            <button
              id="panel-button8"
              class="mdl-button mdl-js-button mdl-button--icon pull-right"
              data-upgraded=",MaterialButton"
            >
              <i class="material-icons">more_vert</i>
            </button>
            <ul
              class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
              data-mdl-for="panel-button8"
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
          <div class="card-body" id="bar-parent10">
            <form class="form-horizontal">
              <div class="form-group row">
                <label class="col-lg-12 col-md-12">Select Drugs to see interaction</label>
              </div>
              <div class="form-group row">
                <div class="col-lg-12 col-md-12">
                  <select class="form-control select2" v-model="drug1" @change="getInteraction">
                    <option value>Select a drug</option>
                    <optgroup label="Drug list here">
                      <option
                        v-for="drug in drugs"
                        :key="drug._id"
                        :value="drug.name"
                      >{{ drug.name }}</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-lg-12 col-md-12">
                  <select class="form-control select2" v-model="drug2" @change="getInteraction">
                    <option value>Select a drug</option>
                    <optgroup label="Drug list here">
                      <option
                        v-for="drug in drugs"
                        :key="drug._id"
                        :value="drug.name"
                      >{{ drug.name }}</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </form>

            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card card-topline-purple">
                      <div class="card-head">
                        <header class="pull-left">Result</header>
                        <div class="tools">
                          <a class="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
                          <a class="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
                          <a class="t-close btn-color fa fa-times" href="javascript:;"></a>
                        </div>
                      </div>
                      <div class="card-body">
                        <p v-if="drug1 && drug2">{{ drug1 }} => {{ drug2 }}</p>
                        <p>{{ interaction }}</p>
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
</template>

<script>
import drugService from "@/services/drug.service";

export default {
  data() {
    return {
      drug1: "",
      drug2: "",
      drugs: [],
      interaction: "Select drugs to see thier interactions."
    };
  },
  methods: {
    getInteraction: async function() {
      if (this.drug1 && this.drug2) {
        try {
          let resp = await drugService.getInteraction(this.drug1, this.drug2);
          this.interaction = resp.data.data.interaction;
        } catch (e) {
          this.interaction = "No interaction found for this selection.";
        }
      } else {
        this.$toaster.warning("Select drugs to check interaction");
      }
    },

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
