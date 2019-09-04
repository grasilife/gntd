
## 4.0.0-beta.3 (2019-08-08)

#### :rocket: New Features
* `@vue/cli`
  * [#4404](https://github.com/vuejs/vue-cli/pull/4404) feat: add `--next` flag to `vue upgrade` to check for beta versions ([@sodatea](https://github.com/sodatea))
  * [#4404](https://github.com/vuejs/vue-cli/pull/4404) feat: add `--next` flag to `vue upgrade` to check for beta versions ([@sodatea](https://github.com/sodatea))
* `@vue/cli-service`
  * [#4387](https://github.com/vuejs/vue-cli/pull/4387) feat!: deprecate `css.modules` in favor of `css.requireModuleExtension` ([@sodatea](https://github.com/sodatea))
  * [#4386](https://github.com/vuejs/vue-cli/pull/4386) feat: allow configuring scss options separately from sass ([@sodatea](https://github.com/sodatea))

#### :boom: Breaking Changes
* `@vue/cli-service`
  * [#4387](https://github.com/vuejs/vue-cli/pull/4387) feat!: deprecate `css.modules` in favor of `css.requireModuleExtension` ([@sodatea](https://github.com/sodatea))
* `@vue/cli-service`, `@vue/cli-ui`
  * [#4388](https://github.com/vuejs/vue-cli/pull/4388) chore!: remove the already-deprecated `baseUrl` option ([@sodatea](https://github.com/sodatea))
* `@vue/cli-plugin-e2e-cypress`
  * [#3774](https://github.com/vuejs/vue-cli/pull/3774) chore: remove support for legacy `vue-cli-service e2e` command ([@sodatea](https://github.com/sodatea))

#### :bug: Bug Fix
* `@vue/cli-shared-utils`
  * [#4405](https://github.com/vuejs/vue-cli/pull/4405) fix: `resolvePluginId` should correctly resolve `@vue/cli-service` ([@sodatea](https://github.com/sodatea))
* `@vue/cli-plugin-typescript`, `@vue/cli`
  * [#4374](https://github.com/vuejs/vue-cli/pull/4374) fix: do not generate empty file when adding ts plugin without router ([@cexbrayat](https://github.com/cexbrayat))
* `@vue/cli`
  * [#4377](https://github.com/vuejs/vue-cli/pull/4377) fix: Make sure afterInvoke hook doesn't get run from other plugins ([@pksunkara](https://github.com/pksunkara))

#### :memo: Documentation
* [#4395](https://github.com/vuejs/vue-cli/pull/4395) docs: update Now deployment guide ([@kidonng](https://github.com/kidonng))

#### :house: Internal
* `@vue/cli-plugin-e2e-cypress`, `@vue/cli-plugin-e2e-nightwatch`, `@vue/cli-plugin-eslint`, `@vue/cli-plugin-pwa`, `@vue/cli-plugin-typescript`, `@vue/cli-service-global`, `@vue/cli-service`, `@vue/cli-shared-utils`, `@vue/cli-test-utils`, `@vue/cli`
  * [#4385](https://github.com/vuejs/vue-cli/pull/4385) style: add a "no-shadow" linter rule ([@sodatea](https://github.com/sodatea))

#### Committers: 4
- Cédric Exbrayat ([@cexbrayat](https://github.com/cexbrayat))
- Haoqun Jiang ([@sodatea](https://github.com/sodatea))
- Kid ([@kidonng](https://github.com/kidonng))
- Pavan Kumar Sunkara ([@pksunkara](https://github.com/pksunkara))

