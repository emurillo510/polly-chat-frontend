import Ember from 'ember';

let herokuURL = 'https://polly-bot-server.herokuapp.com/app';


export default Ember.Component.extend({
    amountWorth: 0,
    userName: "",
    usersIndustry: "",
    isFinished: false,
    isOtherChecked: false,

    isGreeting: true,
    isIdentifyEdu: false,
    isIdentifyField: false,
    isIdentifyIndustry: false,
    isIdentifyRole: false,
    isIdentifySalary: false,
    isIdentifyLocation: false,
    isIdentifySkillset: false,
    
    isOtherSkills: false,
    isAdditionalSkills: false,
    isDetermineBeginSkill: false,
    isDetermineIntermSkill: false,
    actions: {
        submit(){

            if(this.get('isDetermineIntermSkill')){
                let userInput = $('#input-chatbot').val();

                let userEducation = $('#identify-edu').html();
                let userField = $('#identify-field').html();
                let userIndustry = $('#identify-industry').html();
                let userRole = $('#identify-role').html();     


                let data = {
                    "degree": userEducation,
                    "industry": userIndustry,
                    "major": userField,
                    "role": userRole
                }

                console.log('data is: ', data);
                console.log('herokuURL', herokuURL);

                Ember.$.post(herokuURL, data, function(response){

                    
                    if(!this.isFinished){
                        let repsonse = response;
                        console.log("RESPONSE", response);
                        $('#amountWorth').append('<h2>Amount Worth!</h2>');
                        $('#amountWorth').append(response.guess); 
                    }
                    
                });

                this.set('isFinished', true);




            } else if(this.get('isDetermineBeginSkill')){
                let userInput = $('#input-chatbot').val();
                this.toggleProperty('isDetermineIntermSkill');
                $('#identify-determine-begin').append(userInput);
            } else if (this.get('isAdditionalSkills')){
                let userInput = $('#input-chatbot').val();
                this.toggleProperty('isDetermineBeginSkill');
                $('#identify-additional-skills').append(userInput);
            } else if(this.get('isOtherChecked')){
                let userInput = $('#input-chatbot').val();
                this.toggleProperty('isDetermineBeginSkill');
                $('#identify-other-skills').append(userInput);
            } else if(this.get('isIdentifySkillset')){
                let userInput = $('#input-chatbot').val();
                let checked = this.get('isOtherChecked');
                if(checked){
                  this.toggleProperty('isOtherSkills');
                } else {
                  this.toggleProperty('isAdditionalSkills');
                }
            } else if(this.get('isIdentifyLocation')){
                let userInput = $('#input-chatbot').val();
                this.toggleProperty('isIdentifySkillset');
                $('#identify-location').append(userInput);
            } else if(this.get('isIdentifySalary')){
                let userInput = $('#input-chatbot').val();
                this.toggleProperty('isIdentifyLocation');
                $('#identify-salary').append(userInput);
            } else if(this.get('isIdentifyRole')){
                let userInput = $('#input-chatbot').val();
                this.toggleProperty('isIdentifySalary');
                $('#identify-role').append(userInput);
            } else if(this.get('isIdentifyIndustry')){
                let userInput = $('#input-chatbot').val();
                this.toggleProperty('isIdentifyRole');
                $('#identify-industry').append(userInput);
                this.set('usersIndustry', userInput);
            } else if(this.get('isIdentifyField')){
                let userInput = $('#input-chatbot').val();
                this.toggleProperty('isIdentifyIndustry');
                $('#identify-field').append(userInput);
            } else if (this.get('isIdentifyEdu')) {
                let userInput = $('#input-chatbot').val();
                this.toggleProperty('isIdentifyField');
                $('#identify-edu').append(userInput);
            } else if (this.get('isGreeting')) {
                let userInput = $('#input-chatbot').val();
                this.toggleProperty('isIdentifyEdu');
                $('#identify-name').append(userInput);
                this.set('userName', userInput);
            }


        }
    }
});
