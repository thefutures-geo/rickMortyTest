![HomePage](/images/readme/homepage.jpg)

# Rick and Morty App (rick-and-morty)

Behold, I present to you an effortlessly user-friendly app, complete with an intuitively designed framework aimed at delighting the user. With this app, you can dive into the wacky world of Rick and Morty and uncover fascinating details about your beloved characters! Get ready to embark on an adventure through the wondrous realm of Rick and Morty with just a few simple clicks!

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Start unit testing

```bash
yarn test:component
```

But wait!

Currently, there aren't many unit tests, all thanks to Pinia and its escapades with Quasar and Cypress, causing quite the headache for the developer!
Alas, accessing the context of the utilized store proved to be quite the conundrum, leaving only one properly tested file. My apologies!

-That's what happens when tests are left to the very last minute!-

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
