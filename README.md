# </> Gist Interview

</> Gist Interview is an application built with ReactJS and for any person or company to use to simulate programming questions by simply creating and populating the "db.json" file with its Gist-IDs and at the end generating a dashboard.

## Screenshot

![Git Commands](./src/images/gist-interview-1.gif)

## Built with

- [ReactJS](https://reactjs.org)
- [react-render-gist](https://github.com/marjoballabani/react-render-gist#readme)
- [json-server](https://github.com/typicode/json-server)

### Install

First, clone the repo via git:

```bash
git clone https://github.com/mariorodeghiero/react-gist-interview.git your-project-name
```

And then install dependencies with yarn.

```bash
$ cd your-project-name
$ yarn
```

**Note**: If you can't use [yarn](https://github.com/yarnpkg/yarn), run `npm install`.

## Run

First start the file "db.json":

```bash
$ json-server --watch db.json --port 3001
```

![Db](./src/images/db-json1.png)

Open a new tab in the current directory and start the app in the `dev` environment:

```bash
$ npm run start
```

or

```bash
$ yarn start
```

After run, the browser open window automatically at http://localhost:3000/

## Deployment

Run the command below to deploy, minimizing All Files.

```bash
$ npm run build
```

or

```bash
$ yarn build
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Author

- [Mário Antônio do Amaral Rodeghiero](https://github.com/mariorodeghiero)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Icons made by

- [Freepik](http://www.freepik.com)
- [Smashicons](https://www.flaticon.com/authors/smashicons)
- [Vectors Market](https://www.flaticon.com/authors/vectors-market)
