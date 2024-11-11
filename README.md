# ElectronBuilderMSIBugDemo

Link to issue: https://github.com/electron-userland/electron-builder/issues/7979

## Install Dependencies

```
npm i
```

## Build MSI

```
npm run build:win
```

## Test

- Install the MSI from the dist folder
- After the installation, the demo program will open automatically. Copy the value of the Path variable
- Close the app
- Launch ElectronBuilderMSIBugDemo again from the Start Menu
- Copy the value of the Path variable and compare

Actual Result: The values are different.

Expected Result: The values are the same.

To be checked for other environment variables.
