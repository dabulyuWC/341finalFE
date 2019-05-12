import Vue from "vue";
import Router from "vue-router";
import Patients from "@/components/Patients";
import Regpatients from "@/components/Regpatients";
import RegHospital from "@/components/RegHospital";
import RegDoctor from "@/components/RegDoctor";
import RegFamilyInformation from "@/components/RegFamilyInformation";
import PatientInfo from "@/components/PatientInfo";
import FamilyInformation from "@/components/FamilyInformation";
import Doctors from "@/components/Doctors";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Patients",
      component: Patients
    },
    {
      path: "/addpatient",
      name: "addpatient",
      component: Regpatients
    },
    {
      path: "/doctor",
      name: "RegDoctor",
      component: RegDoctor
    },
    {
      path: "/addhospital",
      name: "addhospital",
      component: RegHospital
    },
    {
      path: "/addfamily",
      name: "addfamily",
      component: RegFamilyInformation
    },
    {
      path: "/doctors",
      name: "doctors",
      component: Doctors
    },
    {
      path: "/families",
      name: "families",
      component: FamilyInformation
    },
    {
      path: "/patientinfo",
      name: "patientinfo",
      component: PatientInfo
    }
  ]
});
