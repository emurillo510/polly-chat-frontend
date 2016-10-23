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
                var _this = this;
                Ember.run.later((function() {
                    _this.toggleProperty('isDetermineIntermSkill');
                }), 3000);
                $('#identify-determine-begin').append(userInput);
            } else if (this.get('isAdditionalSkills')){
                let userInput = $('#input-chatbot').val();
                var _this = this;
                Ember.run.later((function() {
                    _this.toggleProperty('isDetermineBeginSkill');
                }), 3000);
                $('#identify-additional-skills').append(userInput);
            } else if(this.get('isOtherChecked')){
                let userInput = $('#input-chatbot').val();
                var _this = this;
                Ember.run.later((function() {
                    _this.toggleProperty('isDetermineBeginSkill');
                }), 3000);
                $('#identify-other-skills').append(userInput);
            } else if(this.get('isIdentifySkillset')){
                let userInput = $('#input-chatbot').val();
                let checked = this.get('isOtherChecked');
                if(checked){
                    var _this = this;
                    Ember.run.later((function() {
                        _this.toggleProperty('isOtherSkills');
                    }), 3000);  
                } else {
                    var _this = this;
                    Ember.run.later((function() {
                        _this.toggleProperty('isAdditionalSkills');
                    }), 3000);   
                }
            } else if(this.get('isIdentifyLocation')){
                let userInput = $('#input-chatbot').val();
                var _this = this;
                Ember.run.later((function() {
                    _this.toggleProperty('isIdentifySkillset');
                }), 3000);
                $('#identify-location').append(userInput);
            } else if(this.get('isIdentifySalary')){
                let userInput = $('#input-chatbot').val();
                var _this = this;
                Ember.run.later((function() {
                    _this.toggleProperty('isIdentifyLocation');
                }), 3000);
                $('#identify-salary').append(userInput);
            } else if(this.get('isIdentifyRole')){
                let userInput = $('#input-chatbot').val();
                var _this = this;
                Ember.run.later((function() {
                    _this.toggleProperty('isIdentifySalary');
                }), 3000);
                $('#identify-role').append(userInput);
            } else if(this.get('isIdentifyIndustry')){
                let userInput = $('#input-chatbot').val();
                var _this = this;
                Ember.run.later((function() {
                    _this.toggleProperty('isIdentifyRole');
                }), 3000);
                $('#identify-industry').append(userInput);
                this.set('usersIndustry', userInput);
            } else if(this.get('isIdentifyField')){
                let userInput = $('#input-chatbot').val();
                var _this = this;
                Ember.run.later((function() {
                    _this.toggleProperty('isIdentifyIndustry');
                }), 3000);
                $('#identify-field').append(userInput);
            } else if (this.get('isIdentifyEdu')) {
                let userInput = $('#input-chatbot').val();
                var _this = this;
                Ember.run.later((function() {
                    _this.toggleProperty('isIdentifyField');
                }), 3000);
                $('#identify-edu').append(userInput);
            } else if (this.get('isGreeting')) {
                let userInput = $('#input-chatbot').val();
                $('#identify-name').append(userInput);
                this.set('userName', userInput);
                var _this = this;
                Ember.run.later((function() {
                    _this.toggleProperty('isIdentifyEdu');
                }), 3000);
                
            }


        }
    }
});
