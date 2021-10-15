var gr = new GlideRecord('incident');
//Hier
gr.addQuery('number', 'INC0010001');
gr.query();
if (gr.next()) {
    getSelection.info('Record found');
}