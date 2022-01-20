<h1 align="center">Project Catwalk</h1>

<table align="center">
    <th colspan="4">Team Toucan's Front-End Capstone Members</th>
  <tr>
      <td align="center"><a href="https://github.com/mchristenson5891"><img src="https://avatars.githubusercontent.com/u/29007891?v=4" width="100px;" alt=""/><br /><sub><b>Michael Christenson</b></sub></a<br /></td>
    <td align="center"><a href="https://github.com/lamia-haider"><img src="https://avatars.githubusercontent.com/u/36172730?v=4" width="100px;" alt=""/><br /><sub><b>Lamia Haider</b></sub></a<br /></td>
    <td align="center"><a href="https://github.com/richardhyesungo"><img src="https://avatars.githubusercontent.com/u/18966944?v=4" width="100px;" alt=""/><br /><sub><b>Richard O</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/SGeoffrey"><img src="https://avatars.githubusercontent.com/u/79271297?v=4" width="100px;" alt=""/><br /><sub><b>Sam Geoffrey</b></sub></a><br /></td>
  </tr>
</table>

### Table of Contents:

1. Links:

   - Our deployed application: https://catwalk-764df.web.app/
   - Our project management / kanban board / ticketing system: https://github.com/team-toucan/fec/projects/1

2. [**Visual Demos:**](#visual-demos)
   - [**Overview**](#overview-component)
   - [**Questions & Answers**](#questions-and-answers-component)
   - [**Related Products**](#related-products-component)
3. [**Data Flow Visualizations:**](#component-data-flow-visualizations)
   - [**Overview**](#overview-data-flow)
   - [**Questions & Answers**](#questions-and-answers-data-flow)
   - [**Related Products**](#related-products-data-flow)
4. [**Repo Installation & Contribution Guidelines**](#repo-instructions)

###### **Built With:** ![JavaScript](https://img.shields.io/badge/JavaScript%20-%23323330.svg?&style=flat-square&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/React%20-%2320232a.svg?&style=flat-square&logo=react&logoColor=%2361DAFB) ![Axios](https://img.shields.io/badge/-Axios-blueviolet) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

<hr>

<h3 align="center" style="font-size: 2.7rem;">VISUAL DEMOS</h3>

#### Overview Component:

<img src="https://media.giphy.com/media/g91FrZEQuBwNrjOsaZ/source.gif" width="800"/>


#### Related Products Component:

<img src="https://media.giphy.com/media/DWKvH9CtotkdfHrqzJ/giphy.gif">

<h3 align="center" style="font-size: 2.7rem;">Component Data Flow Visualizations</h3>

#### Overview Data Flow:

<img src="https://i.imgur.com/QalXvxh.png" width="600"/>

<hr>

<h3 align="center" style="font-size: 2.7rem;">Repo Instructions</h3>

### I. To run app on local machine:

1. Open terminal on local machine
2. Run `git clone git@github.com:team-toucan/fec.git`
3. Change to fec directory `cd fec`
4. Create a new 'config.js' in the root directory
5. Create a GitHub token via https://github.com/settings/tokens
6. Within config.js, assign your GitHub token to a variable named `API_KEY`, then export via `export default API_KEY`
7. Install dependencies `npm install`
8. Start the server `npm run start`
9. Navigate to [localhost:3000](http://localhost:3000) in your browser

### II. Collaboration Guidelines:

- Do not work directly on the `main` branch
- Create a separate branch for each new feature using `git checkout -B <feature_name>`
- Commit changes frequently
- Any changes needs to be pushed to feature branch, then merged via pull request into dev branch
- Another team member should review the pull request before merging to dev
