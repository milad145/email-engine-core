/* server.js */

/**
 * @type {{
 * port: Number
 * }}
 */

import {initLogs, initSecurityLog, APP_LOG} from './lib/utils/logs.js';

initLogs(APP_LOG);
initSecurityLog();

import initServer from './lib/init-server.js';

initServer();
