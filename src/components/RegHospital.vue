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
          <label for="F_NAME">Hospital Name</label>
          <input
            v-model="hospital.HOSPITAL_NAME"
            type="text"
            class="form-control"
            id="HOSPITAL_NAME"
            placeholder="Enter Hospital name"
            required
          >
        </div>
      </div>
      <div>
        <div class="form-group">
          <label for="F_NAME">Hospital Department</label>
          <input
            v-model="hospital.H_DEPARTMENT"
            type="text"
            class="form-control"
            id="H_DEPARTMENT"
            placeholder="Enter Hospital Department name"
            required
          >
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Add Hospital</button>
      <router-link to="/">Go to back</router-link>
    </form>
  </div>
</template>
 

 <script>
const API_URL = "http://localhost:3000/hospital";

export default {
  name: "addhospital",
  data: () => ({
    error: "",
    messages: [],
    hospital: {
      HOSPITAL_NAME: "",
      H_DEPARTMENT: ""
    }
  }),
  computed: {},
  mounted() {},
  methods: {
    addMessage() {
      var vm = this;

      fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(this.hospital),
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