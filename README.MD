# CLI React-Components-Generator

## Description

This is a CLI tool to generate React components and their files.
e.g.:

```
create-component c <component-name>
```

will generate the following files:

```
├── <component-name>.js
├── <component-name>.test.js
├── <component-name>.stories.js
├── <component-name>.module.css
└── index.js
```

You can also generate a component with TypeScript and choose a different folder to save the files:

```
create-component c src/components/<component-name>
```

will generate the following files:

```
├──  src/components/<component-name>
    ├── <component-name>.tsx
    ├── <component-name>.test.tsx
    ├── <component-name>.stories.tsx
    ├── <component-name>.module.css
    └── index.ts
```

## Installation

1. Clone the repository

```
git clone git@github.com:JeanBayer/cli-react-files-generator.git
```

2. Install the dependencies

```
npm install
```

3. Link the package

```
npm link
```

## Usage

```
create-component c <component-name>
```
