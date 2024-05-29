//initiate log files
import {initLogs, initSecurityLog, APP_LOG} from './lib/utils/logs.js';

initLogs(APP_LOG);
initSecurityLog();

//initiate server
import initServer from './lib/init-server.js';

initServer();
