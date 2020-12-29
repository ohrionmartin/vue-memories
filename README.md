## Ionic Overview

### What is Ionic?

* Open source, mobile-optimized ibrary for HTML/JS/CSS
* Built on top of AngularJS
* Built for native Cordova apps

### Ionic Command Line Features

```bash
#starts a new ionic project
ionic start
```

```bash
#Starts a local development server
ionic serve
```

```bash
#configure platform targets
ionic platform add ios
```

```bash
#locally build app for a platform
ionic build
```

```bash
#emulate app in simulator
ionic emulate
```

```bash
#run app on device
ionic run
```

### Starting a New Project

* We install node to get npm
* And install cordova

```bash
#ionic start [appName] [template]
ionic start myApp blank
```

### Run Your App

We can run the app in different ways:

* Local Browser: $ionic serve (localhost:8100)
* Emulator: $ionic emulate
* Device: $ionic run

First remember to install the SDK appropiate.

```bash
ionic add platform ios
ionic build ios
ionic emulate ios
# or
# which builds and deploys to the device
ionic runn ios
```

### Ionic Starter Templates

* blank
* tabs
* side menu
* maps


