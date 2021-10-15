// I was chaned a litte
var gr = new GlideRecord('task');
// Changes in "Branch-B-2"
// Und noch eine Änderung im "Branch-B-2"
var gr = new GlideRecord('incident');
var gr = new GlideRecord('task');

gr.addQuery('number', 'INC0010001');
gr.query();
if (gr.next()) {
    getSelection.info('Record found');
}