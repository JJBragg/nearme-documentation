## Content contributions

## Easy way

[Create a issue](https://guides.github.com/features/issues/) with your finding :)

## Quick way

Go to the file you think is wrong, [click edit and commit changes](https://help.github.com/articles/editing-files-in-your-repository/) in Github UI.

## Normal way

- [Fork the repository](https://guides.github.com/activities/forking/)
- install dependencies
- change something
- create pull request

## Contributors

Thank you to everyone who help our documentation in the journey to excellence. :)

[<img alt="pavelloz" src="https://avatars1.githubusercontent.com/u/546845?v=4&s=117" width="117">](https://github.com/pavelloz) |[<img alt="diana-lakatos" src="https://avatars0.githubusercontent.com/u/4191691?v=4&s=117" width="117">](https://github.com/diana-lakatos) |[<img alt="piotrze" src="https://avatars0.githubusercontent.com/u/96238?v=4&s=117" width="117">](https://github.com/piotrze) |[<img alt="Slashek" src="https://avatars3.githubusercontent.com/u/30107?v=4&s=117" width="117">](https://github.com/Slashek) |[<img alt="lemingos" src="https://avatars0.githubusercontent.com/u/95296?v=4&s=117" width="117">](https://github.com/lemingos) |[<img alt="kv109" src="https://avatars3.githubusercontent.com/u/399968?v=4&s=117" width="117">](https://github.com/kv109) |
:---: |:---: |:---: |:---: |:---: |:---: |
[pavelloz](https://github.com/pavelloz) |[diana-lakatos](https://github.com/diana-lakatos) |[piotrze](https://github.com/piotrze) |[Slashek](https://github.com/Slashek) |[lemingos](https://github.com/lemingos) |[kv109](https://github.com/kv109) |

[<img alt="godot" src="https://avatars0.githubusercontent.com/u/150861?v=4&s=117" width="117">](https://github.com/godot) |[<img alt="ignacy" src="https://avatars2.githubusercontent.com/u/25693?v=4&s=117" width="117">](https://github.com/ignacy) |[<img alt="DeanmvSG" src="https://avatars1.githubusercontent.com/u/15265711?v=4&s=117" width="117">](https://github.com/DeanmvSG) |[<img alt="onecreative" src="https://avatars0.githubusercontent.com/u/3567277?v=4&s=117" width="117">](https://github.com/onecreative) |[<img alt="chrisdanek" src="https://avatars1.githubusercontent.com/u/1758834?v=4&s=117" width="117">](https://github.com/chrisdanek) |[<img alt="juliennearme" src="https://avatars1.githubusercontent.com/u/12803644?v=4&s=117" width="117">](https://github.com/juliennearme) |
:---: |:---: |:---: |:---: |:---: |:---: |
[godot](https://github.com/godot) |[ignacy](https://github.com/ignacy) |[DeanmvSG](https://github.com/DeanmvSG) |[onecreative](https://github.com/onecreative) |[chrisdanek](https://github.com/chrisdanek) |[juliennearme](https://github.com/juliennearme) |

[<img alt="streflik" src="https://avatars2.githubusercontent.com/u/87532?v=4&s=117" width="117">](https://github.com/streflik) |[<img alt="mjaneczek" src="https://avatars3.githubusercontent.com/u/3797771?v=4&s=117" width="117">](https://github.com/mjaneczek) |[<img alt="andrei" src="https://avatars2.githubusercontent.com/u/7224?v=4&s=117" width="117">](https://github.com/andrei) |[<img alt="Agsiegert" src="https://avatars1.githubusercontent.com/u/4143205?v=4&s=117" width="117">](https://github.com/Agsiegert) |[<img alt="Developer-DNM" src="https://avatars1.githubusercontent.com/u/1714812?v=4&s=117" width="117">](https://github.com/Developer-DNM) |[<img alt="digitalfuel" src="https://avatars3.githubusercontent.com/u/10215670?v=4&s=117" width="117">](https://github.com/digitalfuel) |
:---: |:---: |:---: |:---: |:---: |:---: |
[streflik](https://github.com/streflik) |[mjaneczek](https://github.com/mjaneczek) |[andrei](https://github.com/andrei) |[Agsiegert](https://github.com/Agsiegert) |[Developer-DNM](https://github.com/Developer-DNM) |[digitalfuel](https://github.com/digitalfuel) |

<!--
  How to update this list?

  npm i -g github-contributors-list

  githubcontrib --owner mdyd-dev --repo nearme-documentation --cols 6 --showlogin --sortOrder desc
-->

## Code contributions

### Dependencies

nodejs 8.x, npm 6.x

### Development

    npm install

    npm start

### Build production assets

    npm run build

## Generators

    ./scripts/generate_graphql.sh
    ./scripts/generate_liquid_filters.sh
    ./scripts/generate_liquid_tags.sh
    ./scripts/generate_rest_api.sh

## Testing

We are using CodeceptJS to run integration tests

    API_KEY=XXXXXXXX npm test
