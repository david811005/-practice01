import { createApp } from'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js';


const app = createApp({
  data(){
    return{
        nums:[
            {
                num:0,
                id:1,
            },
            {
                num:1,
                id:2,
            },
            {
                num:2,
                id:3,
            },
            {
                num:3,
                id:4,
            },
            {
                num:4,
                id:5,
            },
            {
                num:5,
                id:6,
            },
            {
                num:6,
                id:7,
            },
            {
                num:7,
                id:8,
            },
            {
                num:8,
                id:9,
            },
            {
                num:9,
                id:10,
            },
            {
                num:0,
                id:11,
            },
            
        ],
        slotgo1:{
            slotmove1:false,
            slotbounce1:false, 
        },
        slotgo2:{
            slotmove2:false,
            slotbounce:false, 
        },
        slotgo3:{
            slotmove2:false,
            slotbounce:false, 
        },
        curNum:0,
        newNum:[],
    }
  },
  methods: {
      go(){
          this.newNum=[];
          for(let i =1; i<=3; i++){
            // this.curNum=Math.floor(Math.random()*10);
            this.newNum.push(Math.floor(Math.random()*10));
        }
        this.slotgo1.slotbounce1=false;
        this.slotgo1.slotmove1=true;
        this.slotgo2.slotbounce2=false;
        this.slotgo2.slotmove2=true;
        this.slotgo3.slotbounce3=false;
        this.slotgo3.slotmove3=true;
        setTimeout(() => {
            this.slotgo1.slotmove1=false;
            this.slotgo1.slotbounce1=true;
         },1500);
        setTimeout(() => {
            this.slotgo2.slotmove2=false;
            this.slotgo2.slotbounce2=true;
         },1700);
        setTimeout(() => {
            this.slotgo3.slotmove3=false;
            this.slotgo3.slotbounce3=true;
         },1900);

      },
  },

  created() {
     
  },
  computed:{
        currentnum(){
            if(this.slotgo1.slotbounce1==true){
                return {
                    top:`${this.newNum[0]*-100}%`
                }
            }
        },
        currentnum2(){
            if(this.slotgo2.slotbounce2==true){
                return {
                    top:`${this.newNum[1]*-100}%`
                }
            }
        },
        currentnum3(){
            if(this.slotgo3.slotbounce3==true){
                return {
                    top:`${this.newNum[2]*-100}%`
                }
            }
        },
  }
});
app.mount('#app');
