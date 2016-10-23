import Ember from 'ember';

let GREETING_MESSAGE = "Hi, I'm Polly! I'm here to help you research your fair salary.";
let ASKING_NAME_MESSAGE = "First, I need to learn a little about you. What's your name?";
let IDENTIFY_EDU_MESSAGE = "Nice to meet you, Jane. Let's get started. What's your highest earned degree of level of school?";
let IDENTIFY_INDUSTRY = "What industry are you currently in?";
let IDENTIFY_SALARY = "";

/*

{
  "url": "https://gateway.watsonplatform.net/conversation/api",
  "password": "sMBUnNFWNXop",
  "username": "fa17b65f-d5c7-4465-914e-464c73a28ed1"
}

*/

export default Ember.Controller.extend({
    isGreeting: true,
    isEducation: false,
    init(){
        console.log('page loaded....');
    },
    state: "GREETING",
    actions: {
        submit(){

            let state = this.get('state');

            if(state === "GREETING"){
                console.log('state', state);
                this.set('isGreeting', false);
                this.set('isEducation', true);
                console.log(this.get('isGreeting'));
                console.log(this.get('isEducation'));

                var route = this.get('route');
                route.refresh();

            }


        }
    }
    
});
