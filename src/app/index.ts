import Vue from "vue";
import HelloComponent from "./components/Hello.vue"
import PrivateKeyComponent from "./components/DisplayPrivateKey.vue"


let v = new Vue({
    el: "#app",
    template: `
    <div>
        <div>Hello {{name}}!</div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
        <PrivateKeyComponent></PrivateKeyComponent>
    </div>`,
    data: {
        name: "World"
    },
    components:{
        HelloComponent,
        PrivateKeyComponent
    }
});