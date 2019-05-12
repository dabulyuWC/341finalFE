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
          <label for="DF_NAME">First Name</label>
          <input
            v-model="doctor.DF_NAME"
            type="text"
            class="form-control"
            id="F_NAME"
            placeholder="Enter Doctor first name"
            required
          >
        </div>
      </div>

      <div class="form-group">
        <label for="DL_NAME">LAST NAME</label>
        <input
          v-model="doctor.DL_NAME"
          type="text"
          class="form-control"
          id="subject"
          placeholder="Enter Doctor last name"
          required
        >
      </div>
      <div class="form-group">
        <label for="DOCTOR_MAIL">DOCTOR MAIL</label>
        <input
          v-model="doctor.DOCTOR_MAIL"
          type="text"
          class="form-control"
          id="subject"
          placeholder="Enter Doctor mail address"
          required
        >
      </div>
      <div class="form-group">
        <label for="DOCTOR_NUMBER">DOCTOR NUMBER</label>
        <input
          v-model="doctor.DOCTOR_NUMBER"
          class="form-control"
          id="DOCTOR_NUMBER"
          placeholder="Enter Doctor phone number"
        >
        <label for="DOCTOR_ADDRESS">DOCTOR ADDRESS</label>

        <input
          v-model="doctor.DOCTOR_ADDRESS"
          class="form-control"
          id="DOCTOR_ADDRESS"
          placeholder="Enter Doctor address"
        >
      </div>

      <button type="submit" class="btn btn-primary">Add Doctor</button>
      <router-link to="/">Go to back</router-link>
    </form>
  </div>
</template>
 

 <script>
const API_URL = "http://localhost:3000/doctor";

export default {
  name: "RegDoctor",
  data: () => ({
    error: "",
    messages: [],
    doctor: {
      DF_NAME: "",
      DL_NAME: "",
      DOCTOR_MAIL: "",
      DOCTOR_NUMBER: "",
      DOCTOR_ADDRESS: ""
    }
  }),
  computed: {},
  mounted() {},
  methods: {
    addMessage() {
      var vm = this;
      console.log(this.doctor);
      fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(this.doctor),
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