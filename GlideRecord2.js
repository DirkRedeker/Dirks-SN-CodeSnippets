// I was chaned a litte

var gr = new GlideRecord('task');

gr.addQuery('number', 'INC0010001');
gr.query();
if (gr.next()) {
    getSelection.info('Record found');
}