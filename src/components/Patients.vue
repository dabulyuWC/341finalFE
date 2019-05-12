<template>
  <!-- <div>
    <hr>
    <div class="list-unstyled" v-for="message in patients" :key="message.PATIENT_ID">
      <li class="media">
        <div class="media-body">
          <h4 class="mt-0 mb-1">{{message.F_NAME}}</h4>
          <h5 class="mt-0 mb-1">{{message.L_NAME}}</h5>

          <br>
          <small></small>
        </div>
      </li>
      <hr>
    </div>
  </div>-->
  <div>
    <div class="center">
      <div class="textL">
        <router-link to="/addpatient">Add Patient</router-link>
        <span>|</span>
        <router-link to="/doctor">Add Doctor</router-link>
        <span>|</span>
        <router-link to="/addfamily">Add Family Information</router-link>
        <span>|</span>
        <router-link to="/addhospital">Add Hospital</router-link>
      </div>
      <div class="textR">
        <router-link to="/">View Patient</router-link>
        <span>|</span>
        <router-link to="/doctors">View Doctors</router-link>
        <span>|</span>
        <router-link to="/families">View Family Informations</router-link>
        <span>|</span>
        <router-link to="/patientinfo">View Patient Infos</router-link>
      </div>
    </div>

    <v2-table :data="responseAdapter.patients">
      <v2-table-column label="First Name" prop="F_NAME"></v2-table-column>
      <v2-table-column label="Last Name" prop="L_NAME"></v2-table-column>
      <!-- <v2-table-column label="HOSPITAL NAME" prop="HOSPITAL_NAME"></v2-table-column>
      <v2-table-column label="HOSPITAL DEPARTMENT" prop="H_DEPARTMENT"></v2-table-column>-->
      <v2-table-column label="PATIENT ADDRESS" prop="PATIENT_ADDRESS"></v2-table-column>
      <v2-table-column label="PATIENT NUMBER" prop="PATIENT_NUMBER"></v2-table-column>
    </v2-table>
  </div>
</template>

<script>
import Vue from "vue";
import moment from "moment";
import "beautify-scrollbar/dist/index.css";
import "v2-table/dist/index.css";
import V2Table from "v2-table";

Vue.use(V2Table);
const API_URL = "http://localhost:3000/patient_profiles";
export default {
  name: "Patients",
  data() {
    return {
      patients: []
    };
  },
  computed: {
    responseAdapter: ({ patients }) => {
      const formatOrder = patients.map(o => {
        const orderCopy = JSON.parse(JSON.stringify(o));
        orderCopy.J_DATE = moment(o.J_DATE).format("MMMM Do YYYY");
        return orderCopy;
      });
      return {
        patients: formatOrder
      };
    }
  },
  methods: {},
  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.patients = result;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.center {
  border: 3px solid green;
}

.textL {
  text-align: left;
}

.textR {
  text-align: right;
}
</style>
