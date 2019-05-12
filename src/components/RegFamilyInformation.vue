<template>
  <div class="col-lg-12">
    <form @submit.prevent="addMessage" class="form-horizontal">
      <div v-if="error" class="alert alert-success">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        <h4 class="alert-heading">Eklendi!</h4>
        <p class="mb-0">{{error}}</p>
      </div>

      <div>
        <div class="form-group">
          <label for="PATIENT_LNAME">Patient LastName</label>
          <input
            v-model="family.PATIENT_LNAME"
            type="text"
            class="form-control"
            id="PATIENT_LNAME"
            placeholder="Enter Patient LastName"
            required
          >
        </div>
      </div>

      <div class="form-group">
        <label for="L_NAME">TREATMENT</label>
        <input
          v-model="family.TREATMENT"
          type="text"
          class="form-control"
          id="subject"
          placeholder="Enter TREATMENT name"
          required
        >
      </div>
      <label for="family.DTIME">DTIME</label>
      <datepicker v-model="family.DTIME" name="family.DTIME" :inline="true"></datepicker>
      <!-- <datetime v-model="family.DTIME"></datetime> -->
      <div class="form-group">
        <label for="family.ADDRESS">FAMILY ADDRESS</label>

        <input
          v-model="family.ADDRESS"
          type="text"
          class="form-control"
          id="ADDRESS"
          placeholder="Enter family address"
        >
        <label for="D_ID">PATIENT</label>
        <select v-model="family.P_ID" class="form-control">
          <option disabled value>Please select patient</option>
          <option
            v-for="patient in patients"
            :key="patient.PATIENT_ID"
            :value="patient.PATIENT_ID"
          >{{patient.F_NAME }} {{patient.L_NAME}}</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Add Family Information</button>
      <router-link to="/">Go to back</router-link>
    </form>
  </div>
</template>
 

 <script>
import Vue from "vue";
import Datetime from "vue-datetime";
// You need a specific loader for CSS files
import "vue-datetime/dist/vue-datetime.css";

Vue.use(Datetime);
import moment from "moment";
import Datepicker from "vuejs-datepicker";
const API_URL = "http://localhost:3000/patient_profiles";
const FAMILY_URL = "http://localhost:3000/family";

export default {
  name: "addfamily",
  data: () => ({
    error: "",
    selected: "Hasta seçiniz",
    messages: [],
    family: {
      PATIENT_LNAME: "",
      DTIME: "",
      TREATMENT: "",
      ADDRESS: "",
      P_ID: ""
    },
    patients: []
  }),
  components: {
    Datepicker
  },
  computed: {},
  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.patients = result;
      });
  },
  methods: {
    addMessage() {
      var vm = this;
      console.log(this.family);
      fetch(FAMILY_URL, {
        method: "POST",
        body: JSON.stringify(this.family),
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => response.json())
        .then(result => {
          if (result) {
            console.log(result);
            vm.error = "Başarılı bir şekilde kayıt işlemi gerçekleştirildi.";
          } else {
            this.error = "ERROR";
          }
        });
    },
    customFormatter(date) {
      return moment(date).toDate();
    }
  }
};
</script>
 
<style>
#blue {
  width: 100;
}
</style>