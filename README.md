# cesium-viewer-cra-electron

Cesium viewer minimal example that can be built for the web or as an electron app.

The viewer uses the DragDropMixin, so CZML files can be dragged into
the browser window to be viewed.

Based on the following packages that do all of the hard work:
- [cra-craco-electron-example](https://github.com/wwlib/cra-craco-electron-example):
  makes cra, craco, and electron work together
- [craco-cesium](https://github.com/reearth/craco-cesium):
  lets cesium be used with create-react-app and craco
- [resium](https://github.com/reearth/resium):
  react components for cesium

### Dev

#### prerequisites
- install node (i.e. v8.12.0)
- install yarn

#### install
```
yarn
```

#### web
To develop for the Web and automatically launch a browser window for development...

```
yarn start:web
```

To build for the Web...

```
yarn build:web
```

#### electron
To build for the electron, launch an electron window and reload electron automatically while developing...
```
yarn watch:electron
```
and in another console tab...
```
yarn start:electron-dev
```


#### electron-builder
To build a native application (i.e. for MacOS)...
```
yarn build:electron
yarn dist
```

Then launch the dmg found in the `dist` folder or open the app in `dist/mac`



## Other available Scripts (Create React App)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
