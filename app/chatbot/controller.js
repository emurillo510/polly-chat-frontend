import Ember from 'ember';

let watsonUrl = "api";
export default Ember.Controller.extend({
    actions: {
        submit(){

            let chatbox = $('#polly-messages');
            let userMessage = $('#input-chatbot').val();

            console.log('userMessage', userMessage);
            chatbox.append(userMessage + '<br/>');


            alert('send this to watson' + userMessage);
           /* 
            $(watsonUrl).post(userMessage, function(response){
                let data = response;


            });
            */
        }
    }
    
});
