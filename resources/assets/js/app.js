
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
var CryptoJS = require("crypto-js");
var axios = require('axios');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    data : {
    	site_username : "",
    	site_password : "",
    	site_provider : "",
    	isPassShown : true,
        login_username: "",
        login_password: "",
        register_username : "",
        register_password : "",
        sites : {},
        providers : [],
        providers_infos : []
    }, mounted : function() {
        var aesutil = new AesUtil;
        var self = this;
        axios.get('/dashboard/sites/getSites')
        .then(function (response){
            for (var i=0;i<response.data.length;i++) {
                self.providers = aesutil.decrypt(response.data[i].salt, response.data[i].iv, NeverLost.passphrase, response.data[i].data);
            }
        }).then(function (error){

        });
    }, methods : {
    	togglePassword : function() {
    		this.isPassShown = (this.isPassShown) ? false : true;
    	},
    	clearAddSiteForm : function() {
    		this.site_username = "";
    		this.site_password = "";
    		this.site_provider = "";
    		this.isPassShown = true;
    	},
    	addProvider : function() {
            var self = this;
            //INSERT TO PROVIDERS ARRAY
            this.providers.push({
                username : this.site_username,
                provider : this.site_provider,
                password : this.site_password
            });
            
            // this.providers.push(providers_infos);
            // console.log(JSON.stringify(this.providers));
            // //SUBMIT SITES OBJECT TO DATA REQUESTS
            // var request = {};
            // var aesutil = new AesUtil;
            // request.iv = aesutil.generateRandom();
            // request.salt = aesutil.generateRandom();
            // request.data = aesutil.encrypt(request.salt, request.iv, NeverLost.passphrase, JSON.stringify(this.providers));
            // console.log(request);
    	   


        },
        modifyProvider : function() {
            var self = this;
            var aesutil = new AesUtil;
            var indexOfProvider = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);  
        },
        register : function() {
            var self = this;
            axios.post('/register',{
                username : self.register_username,
                password : self.register_password
            }).then(function (response){
                window.location = "/dashboard/sites/home";
            }).then(function (error){

            });
        },
        login : function() {
            var self = this;
            axios.post('/login',{
                username : self.login_username,
                password : self.login_password
            }).then(function (response){
                window.location = "/dashboard/sites/home";
            }).catch(function (error){

            });
        }
    }
});
