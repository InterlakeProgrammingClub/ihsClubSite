<div align="center">
  <a href="https://clubs.interlakeprogrammingclub.com">
    <img src="./public/logo.png" height="128" />
    <h1>ihsClubSite</h1>
  </a>

  <p>A club site made with Next.js and ❤️</p>
</div>

# Usage

## Getting started
To get the repository setup, follow these steps
```bash
$ git clone https://github.com/InterlakeProgrammingClub/ihsClubSite.git
$ cd ihsClubSite
$ npm i
```

## Configuration

### Club Info
If you would like to change the club info, head over to ``src/json/clubs.json`` and setup the below info.

| Parameter    | Optional?    | Accepts                          |
|--------------|--------------|----------------------------------|
| name         | no           | string                           |
| description  | yes          | string                           |
| route        | no           | string representing a route      |
| contact      | yes          | string                           |
| clubcontact  | yes          | string                           |
| room         | yes          | string                           |
| advisor      | yes          | string                           |
| day          | yes          | string                           |
| image        | no           | path to image                    |

> Note that if you would not like to include info, you may leave it as an empty string (``""``)

### Contact Form
By default, the form in ``/contact`` is not shown. If you would like it to show/change the link, you can follow these steps.
1. Copy ``.env.example`` into ``.env``
2. Set the link of your form

## Final Steps
Finally, you can go ahead and start the webserver.  

For development:
```bash
$ npm run dev
```

For production:
```bash
$ npm run build
$ npm start
```

# Contributing
If you would like to help contribute to this project, you can either [create an issue](https://github.com/InterlakeProgrammingClub/ihsClubSite/issues/new) or [make a pull request](https://github.com/InterlakeProgrammingClub/ihsClubSite/compare).

# Authors
* [@FireStreaker2](https://github.com/FireStreaker2)
* [@TNTiger17](https://github.com/TNTiger17)
* [@brachiotusk](https://github.com/brachiotusk)
* [@HongyiRen2009](https://github.com/HongyiRen2009)


# License
[MIT](https://github.com/InterlakeProgrammingClub/ihsClubSite/blob/main/LICENSE)