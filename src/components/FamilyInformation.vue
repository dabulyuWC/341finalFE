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
    <router-link to="/">Go to Back</router-link>
    <v2-table :data="responseAdapter.families">
      <v2-table-column label="DTIME" prop="DTIME"></v2-table-column>
      <v2-table-column label="Patient Last Name" prop="PATIENT_LNAME"></v2-table-column>
      <!-- <v2-table-column label="HOSPITAL NAME" prop="HOSPITAL_NAME"></v2-table-column>
      <v2-table-column label="HOSPITAL DEPARTMENT" prop="H_DEPARTMENT"></v2-table-column>-->
      <v2-table-column label="ADDRESS" prop="ADDRESS"></v2-table-column>
      <v2-table-column label="TREATMENT" prop="TREATMENT"></v2-table-column>
      <v2-table-column label="PATIENT NAME" prop="ISIMSOYISIM"></v2-table-column>
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
const API_URL = "http://localhost:3000/family";
export default {
  name: "families",
  data() {
    return {
      families: []
    };
  },
  computed: {
    responseAdapter: ({ families }) => {
      const formatOrder = families.map(o => {
        const orderCopy = JSON.parse(JSON.stringify(o));
        orderCopy.DTIME = moment(o.DTIME).format("MMMM Do YYYY");
        return orderCopy;
      });
      return {
        families: formatOrder
      };
    }
  },
  methods: {},
  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.families = result;
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
