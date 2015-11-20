# webpack-dev-server-tutorial

This tutorial shows how to setup webpack-dev-server with gulp.

## Web project

Simple web project demonstrating some webpack features. It has some style sheets and some scripts.

## Webpack

Bundles are generated to public/build directory

webpack-dev-server's port can be changed in gulpfile

## How to run

1. npm install
2. gulp webpackDevServer
3. open http://localhost:3002/webpack-dev-server/ in your web browser
4. to demonstrate that changes are hot reloaded without page being reloaded enter some text into input field
5. change color in style.less to "red"
6. check changed page in your browser
7. change innerHTML to "It's working... 2" and check your browser again