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
          <label for="F_NAME">First Name</label>
          <input
            v-model="patient.F_NAME"
            type="text"
            class="form-control"
            id="F_NAME"
            placeholder="Enter first name"
            required
          >
        </div>
      </div>

      <div class="form-group">
        <label for="L_NAME">LAST NAME</label>
        <input
          v-model="patient.L_NAME"
          type="text"
          class="form-control"
          id="subject"
          placeholder="Enter last name"
          required
        >
      </div>
      <div class="form-group">
        <label for="PATIENT_NUMBER">PATIENT NUMBER</label>
        <input
          v-model="patient.PATIENT_NUMBER"
          class="form-control"
          id="PATIENT_NUMBER"
          placeholder="Enter patient phone number"
        >
        <label for="PATIENT_ADDRESS">PATIENT ADDRESS</label>

        <input
          v-model="patient.PATIENT_ADDRESS"
          class="form-control"
          id="PATIENT_ADDRESS"
          placeholder="Enter patient address"
        >
        <label for="D_ID">DOCTOR</label>
        <select v-model="patient.D_ID" class="form-control">
          <option disabled value>Please select doctor</option>
          <option
            v-for="doctor in doctors"
            :key="doctor.DOCTOR_ID"
            :value="doctor.DOCTOR_ID"
          >{{doctor.DF_NAME }} {{doctor.DL_NAME}}</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Add Patient</button>
      <router-link to="/">Go to back</router-link>
    </form>
  </div>
</template>
 

 <script>
const API_URL = "http://localhost:3000/patient_profiles";
const DOCTOR_URL = "http://localhost:3000/doctor";
export default {
  name: "addpatient",
  data: () => ({
    error: "",
    selected: "Doktor seçiniz",
    messages: [],
    patient: {
      F_NAME: "",
      L_NAME: "",
      J_DATE: new Date("1-1-1990"),
      PATIENT_NUMBER: "",
      PATIENT_ADDRESS: "",
      D_ID: ""
    },
    doctors: []
  }),
  computed: {},
  mounted() {
    fetch(DOCTOR_URL)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.doctors = result;
      });
  },
  methods: {
    addMessage() {
      var vm = this;
      console.log(this.patient);
      fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(this.patient),
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
    }
  }
};
</script>
 
<style>
#blue {
  width: 100;
}
</style>