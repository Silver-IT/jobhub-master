<p align="center">
  <a href="https://jdlandscaping.net/" target="blank"><img src="./src/assets/images/logo.svg" width="320" alt="J&D Landscaping Logo" /></a>
</p>

## J&D Landscaping Website

### Hosted domains
* Production server - [https://jdlandscaping.net](https://jdlandscaping.net)
* Staging server - [https://staging.jdlandscaping.net](https://staging.jdlandscaping.net)

### Culture & Development process
* We are team of passionated software developers and we have our own git management guideline, please check [backend repository](https://github.com/jobhubgroup/job-hub-api) for further more detail.
* We have a CI/CD integration with [Circle CI](https://app.circleci.com/projects/project-dashboard/github/Jobhubgroup) connected with our Github account
* Pushing to Git branch `prod` will deploy content to the production server
* Pushing to Git branch `master` will deploy content to the staging server
* You are supposed to merge all your work to `dev` branch and `master` is the next, `prod` should be the final step
* You can check our circle ci config from [here](./.circleci/config.yml)

### Technical guideline
* We use [Angular](https://angular.io), [bootstrap v4](https://getbootstrap.com) for UI framework and decorating widgets
* Our project is using [Angular CLI](https://cli.angular.io), you can follow guide from their offical website
* We use [AWS](https://aws.amazon.com/) for server.
* For the production server every all things are via **S3 + Cloudfront + Route53**, please check aws console for further more detail

#### Outline of code
* _Admin_ - all about admin panel for *Super Admins* & *Contractors*
* _Client_ - all about client side panel for *Customers*
* _Landing_ - static website pages for https://jdlandscaping.net
* _Auth_ - authentication pages such as login, register ...
* _Core_ - main features and functional things such as services, models etc.
* _Layout_ - main layout features, such as header, footer, sidebar in different cases
* _Shared_ - some common pages that will be used in different modules
* _ui-kit_ - reusable components we are going to use on this application

#### Angular CLI environments
##### Development
```bash
$ npm install

# run development server
$ ng serve

# build staging server
$ npm build
$ npm run start

# build production server
$ npm build:prod 

# do lint testing
$ npm run lint
```
