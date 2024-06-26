# Contributing Guide

## Development

```shell
pnpm i
pnpm dev
```

## Deployment

Build docker image locally

```shell
sudo make build_image
```

Run docker container locally
```shell
sudo docker run --rm --name univer-examples -p 3010:3010 univer-examples:dev
```

Test at http://localhost:3010/univer-examples/


## Dependency

Update to nightly
```shell
pnpm update @univerjs/core@nightly @univerjs/design@nightly @univerjs/docs@nightly @univerjs/docs-ui@nightly @univerjs/engine-formula@nightly @univerjs/engine-render@nightly @univerjs/facade@nightly @univerjs/rpc@nightly @univerjs/sheets@nightly @univerjs/sheets-formula@nightly @univerjs/sheets-numfmt@nightly @univerjs/sheets-ui@nightly @univerjs/sheets-zen-editor@nightly @univerjs/ui@nightly @univerjs/slides@nightly @univerjs/slides-ui@nightly @univerjs/data-validation@nightly @univerjs/sheets-data-validation@nightly @univerjs/sheets-conditional-formatting@nightly @univerjs/sheets-conditional-formatting-ui@nightly @univerjs/find-replace@nightly @univerjs/sheets-find-replace@nightly @univerjs/sheets-filter@nightly @univerjs/sheets-filter-ui@nightly
```

Update to lastest
```shell
pnpm update @univerjs/core@latest @univerjs/design@latest @univerjs/docs@latest @univerjs/docs-ui@latest @univerjs/engine-formula@latest @univerjs/engine-render@latest @univerjs/facade@latest @univerjs/rpc@latest @univerjs/sheets@latest @univerjs/sheets-formula@latest @univerjs/sheets-numfmt@latest @univerjs/sheets-ui@latest @univerjs/sheets-zen-editor@latest @univerjs/ui@latest @univerjs/slides@latest @univerjs/slides-ui@latest  @univerjs/data-validation@latest @univerjs/sheets-data-validation@latest @univerjs/sheets-conditional-formatting@latest @univerjs/sheets-conditional-formatting-ui@latest @univerjs/find-replace@latest @univerjs/sheets-find-replace@latest @univerjs/sheets-filter@latest @univerjs/sheets-filter-ui@latest
```