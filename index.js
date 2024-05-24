/* server.js */

/**
 * @type {{
 * port: Number
 * }}
 */
import dotenv from 'dotenv';
import config from 'config';

// initiate config
global.SecConfig = dotenv.config().parsed;
global.EnvConfig = config.get('config');


import {initLogs, initSecurityLog, APP_LOG} from './lib/utils/logs.js';

initLogs(APP_LOG);
initSecurityLog();

import initServer from './lib/init-server.js';

initServer();
