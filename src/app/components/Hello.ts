// src/components/Hello.ts
import Vue from 'vue';

export default Vue.extend({
    template:`
    <div>
        <div>Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
        
    </div>
    `,
    props:['name','initialEnthusiasm'],
    data(){
        return {
            enthusiam:this.initialEnthusiasm,
        }
    },
    methods:{
        increment(){this.enthusiam++},
        decrement(){
            if(this.enthusiam>1){
                this.enthusiam--;
            }
        }
        
    },
    computed:{
        exclamationMarks():string{
            return Array(this.enthusiam+1).join('!')
        }
    }
})


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