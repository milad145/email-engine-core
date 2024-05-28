# email-engine-core
Backend Web Developer TakeHome Challenge: Email Engine Core

### Configure and run the sample

1. Rename [sample.env](sample.env) to **.env** and open it in a text editor.

1. Replace `YOUR_CLIENT_ID_HERE` with the client ID of your registered Azure application.

1. Replace `YOUR_CLIENT_SECRET_HERE` with the client secret of your registered Azure application.

1. Replace `YOUR_TENANT_ID_HERE` with the tenant ID of your organization. This information can be found next to the client ID on the application management page, note: if you choose *Accounts in any organizational directory (Any Azure AD directory - Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)* replace this value for "common".

1. Replace `YOUR_NGROK_URL_HERE` with the HTTPS ngrok URL you copied earlier.

1. (Optional) - You can update the `CERTIFICATE_PATH`, `CERTIFICATE_ID`, `PRIVATE_KEY_PATH`, and `PRIVATE_KEY_PASSWORD` if desired.

1. (Optional) - If you are running the sample on Windows, you can provide a path to **openssl.exe** in the `WINDOWS_OPENSSL_PATH` value in **.env**.

1. Install the dependencies running the following command:

    ```Shell
    npm install
    ```

1. Start the application with the following command:

    ```Shell
    npm start
    ```

   > **Note:** You can also attach the debugger included in Microsoft Visual Studio Code using the included [launch.json](.vscode/launch.json). For more information, see [Node.js debugging in VS Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging).

1. Open a browser and go to [http://localhost:3000](http://localhost:3000).
