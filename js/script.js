const { createApp } = Vue;

createApp({
    data() {
        return {
         
            
     emails:[],
    }
    
},
  methods: {
    generaEmail() {
        for (let i = 0;i < 10; i++)
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
            this.emails.push(resp.data.response);
          })
      }
},
 mounted(){
    this.generaEmail();
}

}).mount('#app');