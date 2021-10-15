// Changes in "Branch-B-2"
// Und noch eine Änderung im "Branch-B-2"
var gr = new GlideRecord('incident');

gr.addQuery('number', 'INC0010001');
gr.query();
if (gr.next()) {
    getSelection.info('Record found');
}