# FEC

NYC-39 Team Toucan Front End Capstone Repository

## Running the App Locally

1. Make sure you've pulled the version you want to run
2. Make a 'config.js' in your main directory
3. Within config.js assign the `API_KEY` variable to your GitHub token
4. Install dependencies

    ```bash
    npm install
    ```

5. In one terminal, build the webpack bundle

    ```bash
    npm run build-dev
    ```

6. In another terminal, start the server

    ```bash
    npm run start
    ```

7. Navigate to [localhost:3000](http://localhost:3000) in your browser


### Guidelines

- Create a branch for each new feature using `git checkout -b <feature_name>`
- Abstain from working directly on the `main` branch, changes are merged to `dev` first.
- Another team member should review a pull request prior to merge
- Commit changes frequently

