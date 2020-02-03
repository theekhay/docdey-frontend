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
                <li>
                  <a class="parent-item" href>Drugs</a>&nbsp;
                  <i class="fa fa-angle-right"></i>
                </li>
                <li class="active">New Drug</li>
              </ol>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="card card-box">
                <div class="card-head">
                  <!-- <header>Add new Drug</header> -->
                  <!-- <button
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
                  </ul>-->
                </div>
                <div class="card-body" id="bar-parent">
                  <form @submit.prevent class="form-horizontal">
                    <div class="form-body">
                      <div class="form-group row">
                        <label class="control-label col-md-3">
                          Name
                          <span class="required">*</span>
                        </label>
                        <div class="col-md-5">
                          <input class="form-control input-height" name="Name" v-model="drug.name" />
                        </div>
                      </div>

                      <div class="form-group row">
                        <label class="control-label col-md-3">
                          Dosage
                          <span class="required">*</span>
                        </label>
                        <div class="col-md-5">
                          <input
                            class="form-control input-height"
                            name="dosage"
                            v-model="drug.dosage"
                          />
                        </div>
                      </div>

                      <div class="form-group row">
                        <label class="control-label col-md-3">
                          Components
                          <span class="required">*</span>
                        </label>
                        <div class="col-md-5">
                          <input
                            type="text"
                            class="tags tags-input"
                            data-type="tags"
                            value="red,green,black,yellow"
                            id="tags1580553378481"
                            style="display: none;"
                          />
                          <div
                            id="tags1580553378481_tagsinput"
                            class="tagsinput"
                            style="width: auto; height: 100px;"
                          >
                            <Tag
                              v-for="component in drug.components"
                              :key="component.name"
                              :name="component.name"
                              @remove="removeComponent(component)"
                            />

                            <div id="tags1580553378481_addTag">
                              <input
                                id="tags1580553378481_tag"
                                @keydown.enter.prevent="addComponent($event)"
                                v-model="currentComponent"
                                value
                                data-default="add a tag"
                                style="color: rgb(102, 102, 102); width: 68px;"
                              />
                            </div>
                            <div class="tags_clear"></div>
                          </div>
                        </div>
                      </div>

                      <div class="form-group row">
                        <label class="control-label col-md-3">
                          Side Effects
                          <span class="required">*</span>
                        </label>
                        <div class="col-md-5">
                          <input
                            type="text"
                            class="tags tags-input"
                            data-type="fruits-tags"
                            data-highlight-color="#00C0EF"
                            value="apple,red,black,banana"
                            id="tags1580553378501"
                            style="display: none;"
                          />
                          <div
                            id="tags1580553378501_tagsinput"
                            class="tagsinput"
                            style="width: auto; height: 100px;"
                          >
                            <Tag
                              v-for="sideEffect in drug.sideEffects"
                              :key="sideEffect"
                              :name="sideEffect"
                              @remove="removeSideEffect(sideEffect)"
                            />

                            <div id="tags1580553378501_addTag">
                              <input
                                id="tags1580553378501_tag"
                                v-model="currentEffect"
                                @keydown.enter.prevent="addEffect($event)"
                                data-default="add a tag"
                                style="color: rgb(102, 102, 102); width: 68px;"
                              />
                            </div>

                            <div class="tags_clear"></div>
                          </div>
                        </div>
                      </div>

                      <div class="form-group row">
                        <label class="control-label col-md-3">
                          Common Brands
                          <span class="required">*</span>
                        </label>

                        <div class="col-md-5">
                          <input
                            type="text"
                            class="tags tags-input"
                            data-type="fruits-tags"
                            data-highlight-color="#00C0EF"
                            value="apple,red,black,banana"
                            id="tags1580553378501"
                            style="display: none;"
                          />
                          <div
                            id="tags1580553378501_tagsinput"
                            class="tagsinput"
                            style="width: auto; height: 100px;"
                          >
                            <Tag
                              v-for="brand in drug.commonBrands"
                              :key="brand"
                              :name="brand"
                              @remove="removeCommonBrands(brand)"
                            />

                            <div id="tags1580553378501_addTag">
                              <input
                                id="tags1580553378501_tag"
                                @keydown.enter.prevent="addBrand($event)"
                                v-model="currentBrand"
                                data-default="add a tag"
                                style="color: rgb(102, 102, 102); width: 68px;"
                              />
                            </div>

                            <div class="tags_clear"></div>
                          </div>
                        </div>
                      </div>

                      <!-- <div class="form-group row">
                        <label class="control-label col-md-3"
                          >Interactions</label
                        >
                        <div class="col-md-5">
                          <div class="row">
                            <div class="col-md-12">
                              <input class="form-control input-height" type="time" ref="components" />
                            </div>
                          </div>
                        </div>
                      </div>-->
                    </div>
                    <div class="form-actions">
                      <div class="row">
                        <div class="offset-md-3 col-md-9">
                          <button @click.prevent="saveDrug" class="btn btn-info">Submit</button>&nbsp;&nbsp;
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
import drugService from "@/services/drug.service";
import Tag from "@/components/Html/Tags";

export default {
  components: {
    DashboardLayout,
    Tag
  },
  data() {
    return {
      drug: {
        components: [],
        sideEffects: [],
        commonBrands: []
      },
      drugs: [],
      currentComponent: "",
      currentEffect: "",
      currentBrand: ""
    };
  },
  methods: {
    saveDrug: async function() {
      try {
        await drugService.newDrug(this.drug);
        this.$toaster.success("Drug added succesffully");
        this.drugs.push(this.drug);
        this.drug = { components: [], sideEffects: [], commonBrands: [] };
      } catch (error) {
        this.$toaster.warning("There was an error performing this operation");
      }

      console.log(this.drug);
    },

    removeTag: function(property, name) {
      let index = this.drug[property].indexOf(name);
      this.drug[property].splice(index, 1);
    },

    removeComponent: function(name) {
      this.removeTag("components", name);
    },

    removeSideEffect: function(name) {
      this.removeTag("sideEffects", name);
    },

    removeCommonBrands: function(name) {
      this.removeTag("commonBrands", name);
    },

    addComponent: function(event) {
      console.log(event);
      let name = event.target.value;
      let component = {
        name,
        quantity: "100mls"
      };
      if (!this.drug.components.includes(component)) {
        this.drug.components.push(component);
      } else {
        this.$toaster.warning("Component exists already.");
      }

      this.currentComponent = "";
    },

    addBrand: function(event) {
      let brand = event.target.value;
      if (!this.drug.commonBrands.includes(brand)) {
        this.drug.commonBrands.push(brand);
      } else {
        this.$toaster.warning("Brand exists already.");
      }

      this.currentBrand = "";
    },

    addEffect: function(event) {
      let effect = event.target.value;
      if (!this.drug.sideEffects.includes(effect)) {
        this.drug.sideEffects.push(effect);
      } else {
        this.$toaster.warning("Side Effect exists already.");
      }

      this.currentEffect = "";
    },

    doNothing: function() {
      console.log("nothing done");
    }
  },
  async mounted() {
    try {
      let resp = await drugService.getDrugs();
      this.drugs = resp.data.data;
    } catch (e) {
      this.$toaster.warning("unable to retreive list of drugs...");
    }
  }
};
</script>
