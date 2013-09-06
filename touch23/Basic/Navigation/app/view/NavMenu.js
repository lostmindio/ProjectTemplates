/*
 * File: app/view/NavMenu.js
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

Ext.define('MyApp.view.NavMenu', {
    extend: 'Ext.Panel',
    alias: 'widget.navmenu',

    config: {
        centered: true,
        hidden: true,
        itemId: 'navMenu',
        padding: 10,
        hideOnMaskTap: true,
        modal: true,
        items: [
            {
                xtype: 'button',
                navView: 'homepanel',
                margin: 15,
                iconCls: 'home',
                text: 'Home'
            },
            {
                xtype: 'button',
                navView: 'aboutpanel',
                margin: 15,
                iconCls: 'info',
                text: 'About Us'
            },
            {
                xtype: 'button',
                navView: 'contactpanel',
                margin: 15,
                iconCls: 'compose',
                text: 'Contact Us'
            }
        ]
    }

});