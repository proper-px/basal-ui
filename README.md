# Basal UI

This is an example of utilizing monorepo [TURBOREPO](https://turbo.build/repo), client side bundler [Vite](https://vitejs.dev/), UI Library [React](https://reactjs.org/), and UI visualizer [Storybook](https://storybook.js.org/).

## Project structure

At the base of the project, there is a `turbo.json` file that defines **tasks** that can be run by Turbo in each package/workspace.

`turbo.json`

```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "outputs": ["dist/**"]
    },
    "dev": {},
    "dry-run": {},
    "sym-link": {}
  }
}
```

When running `turbo dev` in the root of the project, Turbo will run the `dev` npm task in each of the workspaces `package.json` file. Turbo will only run the task if it exists within a workspace.

> The root `package.json` contains build scripts so you can continue to run `npm run dev` which will run the `packages/*` `dev` script, as well as the `apps/docs` `dev` script.

## Workspaces

Workspaces are defined in the root `package.json` file. Each workspace is defined by a `package.json` file in the `packages` directory.

```json
{
  "name": "@basal-ui/hooks",
  ...
}
```

## Packages

Other packages can be referenced by a different package within the repo.

By specifying the package by it's `name` within its `package.json` file, Turbo will automatically symlink the package into the `node_modules` directory of the package that is referencing.

```json
{
  "name": "@basal-ui/form",
  "dependencies": {
    "tsconfig": "*"
  }
}
```

## FUTURE Enhancements

This is only the starting point and many things are still in flight. Here are some of the things that are going to be worked on in the near future.

- [ ] Create a `vite.config` package that can be consumed by all packages.
- [ ] Create a `eslint` package that can be consumed by all packages.
- [ ] Create a `CLI` that will be able to scaffold new packages and workspaces.
  - [ ] Something like `create-package @basal-ui/hooks`
  - [ ] This would create a new `dir` in `packages` with a `package.json` file, as well as adding the new package to the root `package.json` file `workspaces` section.
