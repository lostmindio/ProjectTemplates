/*
 * File: app/store/Records.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.Records', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Record'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'MyApp.model.Record',
            storeId: 'MyStore',
            data: [
                {
                    id: 1,
                    title: 'Item 1',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    date: '10/1/2010',
                    isFeatured: true
                },
                {
                    id: 2,
                    title: 'Item 2',
                    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    date: '10/2/2010',
                    isFeatured: false
                },
                {
                    id: 3,
                    title: 'Item 3',
                    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
                    date: '10/3/2010',
                    isFeatured: false
                },
                {
                    id: 4,
                    title: 'Item 4',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    date: '10/4/2010',
                    isFeatured: true
                },
                {
                    id: 5,
                    title: 'Item 5',
                    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    date: '10/5/2010',
                    isFeatured: false
                },
                {
                    id: 6,
                    title: 'Item 6',
                    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
                    date: '10/6/2010',
                    isFeatured: false
                },
                {
                    id: 7,
                    title: 'Item 7',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    date: '10/7/2010',
                    isFeatured: true
                },
                {
                    id: 8,
                    title: 'Item 8',
                    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                    date: '10/8/2010',
                    isFeatured: false
                },
                {
                    id: 9,
                    title: 'Item 9',
                    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
                    date: '10/9/2010',
                    isFeatured: false
                },
                {
                    id: 10,
                    title: 'Item 10',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                    date: '10/10/2010',
                    isFeatured: false
                }
            ],
            proxy: {
                type: 'memory'
            }
        }, cfg)]);
    }
});