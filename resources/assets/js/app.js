
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
    	isPassShown : true
    },
    methods : {
    	togglePassword : function() {
    		this.isPassShown = (this.isPassShown) ? false : true;
    	},
    	clearAddSiteForm : function() {
    		this.site_username = "";
    		this.site_password = "";
    		this.site_provider = "";
    		this.isPassShown = true;
    	},
    	addSite : function() {
            var self = this;
			axios.post('/dashboard/sites/addSite',{
				username : self.site_username,
				password : self.site_password,
				provider : self.site_provider
			}).then(function (response) {
			    
			}).catch(function (error) {
			    
			});
    	}
    }
});
