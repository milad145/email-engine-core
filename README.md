# email-engine-core
Backend Web Developer TakeHome Challenge: Email Engine Core

### Configure and run the sample

1. Rename [sample.env](sample.env) to **.env** and open it in a text editor.

1. Replace `your_azure_ad_client_id_here` with the client ID of your registered Azure application.

1. Replace `azure_ad_client_secret_here` with the client secret of your registered Azure application.

1. Replace `your_azure_redirect_uri_here` with the redirect uri of your registered Azure application.

1. Replace `your_jwt_key_here` and `your_jwt_iv_here` with the jwt key and IV that you encrypt the access token for saving in the database.

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
