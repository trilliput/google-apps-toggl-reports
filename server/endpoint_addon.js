var app = ask_('server/app');
app.registerMenuCallbacks(this);

/**
 * Called when an add-on is installed.
 * @param {Object} e Apps Script onInstall event object
 */
function onInstall(e) {
  app.pluginOnInstall(e);
}


/**
 * Called when a spreadsheet that is associated with this add-on is opened.
 * @param {Object} e Apps Script onInstall event object
 */
function onOpen(e) {
  app.pluginOnOpen(e);
}

/**
 * Toggl.com report for the given period
 *
 * @param {number} workspaceId Workspace id
 * @param {string} since Date in ISO format, e.g. 2016-04-29
 * @param {string} until Date in ISO format, e.g. 2016-05-28
 * @param {string} clientIds Client ids separated by comma
 * @param {string} projectIds Project ids separated by comma
 * @param {string} tagIds Tag ids separated by comma
 * @return {number} Total time in miliseconds
 * @customfunction
 */
function TOGGL_REPORT(workspaceId, since, until, clientIds, projectIds, tagIds) {
  return app.funcTogglReport(workspaceId, since, until, clientIds, projectIds, tagIds);
}

/**
 * Toggl.com report for one day
 *
 * @param {number} workspaceId Workspace id
 * @param {string} since Date in ISO format, e.g. 2016-04-29
 * @param {string} clientIds Client ids separated by comma
 * @param {string} projectIds Project ids separated by comma
 * @param {string} tagIds Tag ids separated by comma
 * @return {number} Total time in miliseconds
 * @customfunction
 */
function TOGGL_REPORT_DAY(workspaceId, since, clientIds, projectIds, tagIds) {
  return app.funcTogglReportDay(workspaceId, since, clientIds, projectIds, tagIds);
}

/**
 * Toggl.com report for one week
 *
 * @param {number} workspaceId Workspace id
 * @param {string} since Date in ISO format, e.g. 2016-04-29
 * @param {string} clientIds Client ids separated by comma
 * @param {string} projectIds Project ids separated by comma
 * @param {string} tagIds Tag ids separated by comma
 * @return {number} Total time in miliseconds
 * @customfunction
 */
function TOGGL_REPORT_WEEK(workspaceId, since, clientIds, projectIds, tagIds) {
  return app.funcTogglReportWeek(workspaceId, since, clientIds, projectIds, tagIds);
}

/**
 * Toggl.com report for one month
 *
 * @param {number} workspaceId Workspace id
 * @param {string} since Date in ISO format, e.g. 2016-04-29
 * @param {string} clientIds Client ids separated by comma
 * @param {string} projectIds Project ids separated by comma
 * @param {string} tagIds Tag ids separated by comma
 * @return {number} Total time in miliseconds
 * @customfunction
 */
function TOGGL_REPORT_MONTH() {
  return app.funcTogglReportMonth.apply(app, arguments);
}
