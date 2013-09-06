/*
 * File: app/controller/Navigation.js
 *
 * This file was generated by Sencha Architect version 2.3.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.Navigation', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView: '#mainView',
            navMenu: {
                selector: '#navMenu',
                xtype: 'navmenu'
            }
        },

        control: {
            "mainview #menuButton": {
                tap: 'showMenu'
            },
            "navmenu button": {
                tap: 'navigate'
            }
        }
    },

    showMenu: function(target) {
        
        // Get or create navigation menu
        var menu = this.getNavMenu();
        if (!menu) {
            menu = Ext.create('MyApp.view.NavMenu');
        }
        
        var menuItems = menu.getItems().items,				// Menu buttons
        	currentView = this.currentView || "homepanel";	// Current view alias, default to home
        
        // Disable active view's button
        menuItems.forEach(function(button) {
        
            // Get custom navView attribute
            var navView = button.config.navView;
        
            // Active button, disable
            if (currentView == navView) {
                button.disable();
            }
        
            // Enable all others
            else {
                button.enable();
            }
        
        });
        
        // Show menu by menu button
        menu.showBy(target);
        
    },

    navigate: function(button, e, eOpts) {
        
        /**
        *	The following code enables navigation
        *	by checking the custom attribute 'navView',
        *	which is the alias of the view to show
        */
        
        var text = button.getText(),						// Button text
        	navView = button.getInitialConfig().navView,	// Get custom attribute 'navView'
        	mainView = this.getMainView(),					// Main navigation view
        	navMenu = this.getNavMenu();					// Navigation menu
        
        // Add view to main view
        mainView.push({
            xtype: navView,
            title: text
        });
        
        // Remember current view alias
        this.currentView = navView;
        
        // Hide menu
        navMenu.hide();
        
    }

});