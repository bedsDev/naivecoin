<template>
    <div>
        <div class="greeting">Private Key: {{privateKey}}</div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
// import {getPrivateFromWallet} from "../../wallet";

export default Vue.extend({
    props: ['name', 'initialEnthusiasm'],
    data() {
        let key:string = "getPrivateFromWallet()";
        return {
            privateKey: key,
        }
    },
    methods: {
        
    },
    computed: {
       
    }
});
// import { Vue, Component, Prop } from "vue-property-decorator";

// @Component
// export default class HelloDecorator extends Vue {
//     @Prop() name!: string;
//     @Prop() initialEnthusiasm!: number;

//     enthusiasm = this.initialEnthusiasm;

//     increment() {
//         this.enthusiasm++;
//     }
//     decrement() {
//         if (this.enthusiasm > 1) {
//             this.enthusiasm--;
//         }
//     }

//     get exclamationMarks(): string {
//         return Array(this.enthusiasm + 1).join('!');
//     }
// }
</script>
<style>
.greeting{
    font-size: 20px;
}
</style>

