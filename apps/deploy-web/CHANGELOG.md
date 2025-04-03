

## 2.67.0 (2025-04-03)


### Features

* add beta env ([#326](https://github.com/Chakra-Network/console/issues/326)) ([855ff4b](https://github.com/Chakra-Network/console/commit/855ff4b084a68d6042fcb3cd181fc91abe998520))
* adds basic feature flags support to api and deploy-web ([#1113](https://github.com/Chakra-Network/console/issues/1113)) ([130407c](https://github.com/Chakra-Network/console/commit/130407ce8632cde4cea49394ba01267a1962d158))
* adds certificate validation to ws proxy ([#780](https://github.com/Chakra-Network/console/issues/780)) ([2d1cc3d](https://github.com/Chakra-Network/console/commit/2d1cc3d7c39ec50ea3ca292d3d3bce47db3185ca)), closes [#170](https://github.com/Chakra-Network/console/issues/170)
* adds support for logging error cause ([#1064](https://github.com/Chakra-Network/console/issues/1064)) ([6cd48e6](https://github.com/Chakra-Network/console/commit/6cd48e6eb8ce7eb2c899d2f97f7154ee72e8a3e2))
* adds support for logging error cause ([#1064](https://github.com/Chakra-Network/console/issues/1064)) ([#1066](https://github.com/Chakra-Network/console/issues/1066)) ([ef8d604](https://github.com/Chakra-Network/console/commit/ef8d60447f98e699189c852b8d18f173458386ec))
* adjusts logic to send provider and chain details to provider proxy ([#742](https://github.com/Chakra-Network/console/issues/742)) ([a5ca831](https://github.com/Chakra-Network/console/commit/a5ca8313c9ef545336889d8a536e4cf92c537c61))
* **analytics:** add pixels scripts ([#1005](https://github.com/Chakra-Network/console/issues/1005)) ([010210b](https://github.com/Chakra-Network/console/commit/010210b957f9cc53d867f26b635a6a0993bf5da6))
* **analytics:** add user analytics and refactor analytic related logic ([552cd82](https://github.com/Chakra-Network/console/commit/552cd8244634bf1de49875ce0d9b7490466ae5b0))
* **analytics:** adds more user onboarding events ([4e87ad4](https://github.com/Chakra-Network/console/commit/4e87ad445d6e233dc1986e757b850082f65c172d))
* **analytics:** improves amplitude reporting ([c8399ae](https://github.com/Chakra-Network/console/commit/c8399ae3a08d13de35679bd6e6acac49f504a66a))
* **analytics:** integrates amplitude ([c88ff59](https://github.com/Chakra-Network/console/commit/c88ff59c19c0096916afa3774b2d15a1bd30d3eb))
* **analytics:** lease conversion events ([76beedf](https://github.com/Chakra-Network/console/commit/76beedf2cb17d94ca53df127a40f9cfabb852231)), closes [#817](https://github.com/Chakra-Network/console/issues/817)
* **analytics:** move lease created script ([#1051](https://github.com/Chakra-Network/console/issues/1051)) ([65ac516](https://github.com/Chakra-Network/console/commit/65ac5163e2760ca25e71a9c8f686313304774413))
* **auth:** add a turnstile widget ([d485fbb](https://github.com/Chakra-Network/console/commit/d485fbbf292a8a671d478eb1f03cfc208cda5e6f)), closes [#627](https://github.com/Chakra-Network/console/issues/627)
* **auth:** adds turnstile interceptor to all the services ([f4b517a](https://github.com/Chakra-Network/console/commit/f4b517a35a1bf54ccad26304f37c5213d8635ab8))
* **auth:** enable credentials on api and start-trial client ([c64d15e](https://github.com/Chakra-Network/console/commit/c64d15ecd02fc9ae632bd4cc2abdfff591be6a08)), closes [#627](https://github.com/Chakra-Network/console/issues/627)
* **auth:** forward cf clearance cookie to api via auth proxy ([bd81f2f](https://github.com/Chakra-Network/console/commit/bd81f2f36c8f8f53e01d5dd4c879f99de1b9d151))
* **auth:** forwards cf cookies in proxy ([3711a9d](https://github.com/Chakra-Network/console/commit/3711a9d3b780c2fb3215168cc017dd4794233faa))
* **auth:** implement anonymous user authentication ([fa9de2f](https://github.com/Chakra-Network/console/commit/fa9de2f0d0f8d0a0c483f07856cebdb58d8f5344)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **auth:** implement verification email re-send and rework relevant UI ([#676](https://github.com/Chakra-Network/console/issues/676)) ([c2de6a6](https://github.com/Chakra-Network/console/commit/c2de6a6f92dbb44b1758836f2a42de8eb81f4c94)), closes [#663](https://github.com/Chakra-Network/console/issues/663)
* **auth:** implements basic anonymous user auth ([ca816f5](https://github.com/Chakra-Network/console/commit/ca816f5e4136c1b4e515c73b249e10d0dc0964e3)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **auth:** improve turnstile widget UX ([#666](https://github.com/Chakra-Network/console/issues/666)) ([b42714e](https://github.com/Chakra-Network/console/commit/b42714e77fc0feed65af6f959cd0dc27e750994a))
* **billing:** add billing module with trial wallet creation ([d1ca550](https://github.com/Chakra-Network/console/commit/d1ca550ae3d94e08de15f2d329ed6f81d192653b)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **billing:** add wallet trialing flag ([e9cc512](https://github.com/Chakra-Network/console/commit/e9cc5125d7bf9b8853ea48f6e8ded87fd490d24a)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **billing:** adjust migrations and env for deployment ([45656d7](https://github.com/Chakra-Network/console/commit/45656d7848ac0fdd5689b46a32221d48a7b32469)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **billing:** adjust some UI features for managed wallet users ([6af49da](https://github.com/Chakra-Network/console/commit/6af49daa796856b363284431721799755dda54a3)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **billing:** change managed wallet button copy and style ([0fa46ac](https://github.com/Chakra-Network/console/commit/0fa46ac017fd7835b4b5695d5489701a3d7693ef)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **billing:** enable checkout options with promo codes ([0cb439d](https://github.com/Chakra-Network/console/commit/0cb439dcf4ca21974d7dacd784570cd032ee9f7b))
* **billing:** ensure master wallet sequence is correct ([8372f38](https://github.com/Chakra-Network/console/commit/8372f387718dec9a8fed81e4048690c46f7e8b10)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **billing:** handle tx errors ([3430a08](https://github.com/Chakra-Network/console/commit/3430a089629e40019b90fa712d668279b9774982)), closes [#340](https://github.com/Chakra-Network/console/issues/340) [#247](https://github.com/Chakra-Network/console/issues/247)
* **billing:** implement balance refresh ([9d54f44](https://github.com/Chakra-Network/console/commit/9d54f44c4024457b5bc339b6c32c67b3f3d37486)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **billing:** implement balance wallets refill ([fa1f252](https://github.com/Chakra-Network/console/commit/fa1f252468bd30106a67be2fb011870d5e5e6c8d)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **billing:** implement managed wallet ([164d86b](https://github.com/Chakra-Network/console/commit/164d86b56cb48d9ebb7b7102743d3c3fd363e6f6)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **billing:** implement managed wallet top up ([04f5aad](https://github.com/Chakra-Network/console/commit/04f5aad51079bea8c8d58c2147c78598b5bb409d)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **billing:** implement managed wallet top up 1 ([bd4c06b](https://github.com/Chakra-Network/console/commit/bd4c06bd49cc1c16380997b4af0185360ffd5f0b)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **billing:** implement wallet type switch ([155113c](https://github.com/Chakra-Network/console/commit/155113c0aee2913d2cf4da839126a4a10768de05)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **billing:** remove some UI features for managed wallet users ([f021f07](https://github.com/Chakra-Network/console/commit/f021f07458dd488f02ae37b6952b984fd70f1b71)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **billing:** rename POST /v1/wallets to POST /v1/start-trial ([b39b057](https://github.com/Chakra-Network/console/commit/b39b057315251c6b94532c4b3bfbf99380f46d62)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **billing:** resolve with valid only grants and allowances from http service ([77a0ffc](https://github.com/Chakra-Network/console/commit/77a0ffcfe0ce912814d3e3803af6b1ac803cde71))
* **billing:** unify deployment modals ([#804](https://github.com/Chakra-Network/console/issues/804)) ([03137c6](https://github.com/Chakra-Network/console/commit/03137c68740b76a7ad162415425b566148dd7bd3)), closes [#628](https://github.com/Chakra-Network/console/issues/628) [#628](https://github.com/Chakra-Network/console/issues/628) [#628](https://github.com/Chakra-Network/console/issues/628) [#628](https://github.com/Chakra-Network/console/issues/628) [#628](https://github.com/Chakra-Network/console/issues/628)
* **billing:** update master wallet and enable billing for prod ([90e0235](https://github.com/Chakra-Network/console/commit/90e023594e6135d0e99f4b734c7e3706159d0fb4))
* **billing:** update transactional messages for managed wallet ([efc0508](https://github.com/Chakra-Network/console/commit/efc050860cc459625259be7ac041e15ce49dcfc1)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **certificate:** managed wallet api create certificates ([#903](https://github.com/Chakra-Network/console/issues/903)) ([e00ef07](https://github.com/Chakra-Network/console/commit/e00ef07444a9a8bce9c5c4d5749b4adff5e8903b))
* **config:** replace api url definitions with env var configs ([6cf640d](https://github.com/Chakra-Network/console/commit/6cf640dccba598deeb229fd4e2110e1d7e412270)), closes [#163](https://github.com/Chakra-Network/console/issues/163) [#313](https://github.com/Chakra-Network/console/issues/313)
* **config:** replace network management with network store package ([3d804d5](https://github.com/Chakra-Network/console/commit/3d804d5b4f332dd702fb1be346c593bfb6c6ff71)), closes [#163](https://github.com/Chakra-Network/console/issues/163) [#313](https://github.com/Chakra-Network/console/issues/313)
* **config:** setup doppler env for api ([ed22ad7](https://github.com/Chakra-Network/console/commit/ed22ad7181e12f4e30583be2a9c118596146bf14))
* **console:** add all leap wallets ([#346](https://github.com/Chakra-Network/console/issues/346)) ([f00c367](https://github.com/Chakra-Network/console/commit/f00c3679ef997e5133dcdc46550deb2bcea81dd1))
* **console:** Add config from awesome akash for SSH toggle ([#301](https://github.com/Chakra-Network/console/issues/301)) ([8765a4f](https://github.com/Chakra-Network/console/commit/8765a4fe5123c868bacfa9c59cd0b6209a85224e))
* **console:** add llama 3.1 405 to staff picks ([#339](https://github.com/Chakra-Network/console/issues/339)) ([6ad71ce](https://github.com/Chakra-Network/console/commit/6ad71ce5e2f5339c6d791cf6759910a94ffeea83))
* **console:** add metamask ([#334](https://github.com/Chakra-Network/console/issues/334)) ([bc68df8](https://github.com/Chakra-Network/console/commit/bc68df8fe87c310f406663a73444f918d272422b))
* **console:** add rehypraw to display html for awesome akash templates ([#319](https://github.com/Chakra-Network/console/issues/319)) ([0014109](https://github.com/Chakra-Network/console/commit/00141098408668a542d65b77cf6084de9070ee7c))
* **console:** added application key to filter out third party exceptions ([#372](https://github.com/Chakra-Network/console/issues/372)) ([d01b8d5](https://github.com/Chakra-Network/console/commit/d01b8d5992ee12958562e73c7f06a333879e05ac))
* **console:** balance authz deployments ([#359](https://github.com/Chakra-Network/console/issues/359)) ([abdb18a](https://github.com/Chakra-Network/console/commit/abdb18a42af81e7e1724b7afbe8eb2b898b47f41))
* **console:** managed wallets popup confirmation ([#342](https://github.com/Chakra-Network/console/issues/342)) ([c7d16d6](https://github.com/Chakra-Network/console/commit/c7d16d6a0d942cef8e64c6978d9ff565a0336c0d))
* **console:** revoke all authz ([#308](https://github.com/Chakra-Network/console/issues/308)) ([eb89ae0](https://github.com/Chakra-Network/console/commit/eb89ae0bec1a50976389f05a172e3b451dff0029))
* **deploy-web:** improve provider detail uptime styling ([#221](https://github.com/Chakra-Network/console/issues/221)) ([db1ee83](https://github.com/Chakra-Network/console/commit/db1ee83a1ce3507b28d23312483b1978684f1874))
* **deploy-web:** show connect btn in authorization page if not connected ([1bb8618](https://github.com/Chakra-Network/console/commit/1bb86187db8bdba578c567144ac9fb4650679c12))
* **deployment:** add deepseek showcase ([#724](https://github.com/Chakra-Network/console/issues/724)) ([926cae8](https://github.com/Chakra-Network/console/commit/926cae830314c35cff8b03dfa76bc6719ab9da00))
* **deployment:** add help sidebar link ([54c501c](https://github.com/Chakra-Network/console/commit/54c501c65276c621b7bf440d758a7c5a4ae3acb6)), closes [#788](https://github.com/Chakra-Network/console/issues/788)
* **deployment:** add maintenant banner component ([#991](https://github.com/Chakra-Network/console/issues/991)) ([d939e25](https://github.com/Chakra-Network/console/commit/d939e25a9d03ad3876e6fdef624105a70a60c45d))
* **deployment:** add new badge ([dd338ee](https://github.com/Chakra-Network/console/commit/dd338ee7b4e6378a5627d4ea16fdf14a056145c6)), closes [#796](https://github.com/Chakra-Network/console/issues/796)
* **deployment:** add new endpoint to query filtered bids for trial accounts ([3d95615](https://github.com/Chakra-Network/console/commit/3d95615a067b50a4c468e25535089ef9ca0a058c))
* **deployment:** adds auto top feature flag ([da008e9](https://github.com/Chakra-Network/console/commit/da008e9251a52bbd53a0cc10ac3e026ddd8652f1)), closes [#714](https://github.com/Chakra-Network/console/issues/714)
* **deployment:** auto top up custodial deployment with available amount ([0792a36](https://github.com/Chakra-Network/console/commit/0792a367f64d83ed040043c021b98e5be2d82c80)), closes [#524](https://github.com/Chakra-Network/console/issues/524)
* **deployment:** creates setting if not exists on get ([66cd74b](https://github.com/Chakra-Network/console/commit/66cd74b039e6fab8c848a296047d1669b9c5a574)), closes [#714](https://github.com/Chakra-Network/console/issues/714)
* **deployment:** enable deployment from git repositories ([dfbaeb7](https://github.com/Chakra-Network/console/commit/dfbaeb78843341633025a0812a2fdb021de12c70)), closes [#417](https://github.com/Chakra-Network/console/issues/417)
* **deployment:** ensure there's sufficient fees allowance on cleanup ([fbbec68](https://github.com/Chakra-Network/console/commit/fbbec68e3e430f41ab12424a5ffb47aff059a79d))
* **deployment:** ensure usd values in deployments for managed wallets ([d1303d0](https://github.com/Chakra-Network/console/commit/d1303d0bd6bc8917dec39fedb74fe46306cb2949)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **deployment:** ensure user can re-send manifest ([27e1289](https://github.com/Chakra-Network/console/commit/27e12898755b720a0d5045225429e1e0c9bcb850))
* **deployment:** implement ato top up setting ([1301314](https://github.com/Chakra-Network/console/commit/130131485a68f699587415f96283e0dc83072502)), closes [#412](https://github.com/Chakra-Network/console/issues/412)
* **deployment:** implement clean up of managed deployments ([882fac4](https://github.com/Chakra-Network/console/commit/882fac457f91d968bd9ecd3129c9a2113c3dd0bf)), closes [#395](https://github.com/Chakra-Network/console/issues/395)
* **deployment:** implement concurrency option for stale deployments cleaner ([54cae5d](https://github.com/Chakra-Network/console/commit/54cae5d0f3c37dd6fe6623bcc249379f99cad247))
* **deployment:** implement deployment deposit top up via managed wallet ([baa36d3](https://github.com/Chakra-Network/console/commit/baa36d3b039c899fde0700bf3b1ae3c08209aa07)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **deployment:** implement plain linux deployment page ([6da5565](https://github.com/Chakra-Network/console/commit/6da5565c049ab9f9debace6e42ec976347b6b3a0)), closes [#227](https://github.com/Chakra-Network/console/issues/227)
* **deployment:** implement top up message sending ([f5d7233](https://github.com/Chakra-Network/console/commit/f5d7233c6ce1e7fc880e817e7d8ff66967b8a547)), closes [#395](https://github.com/Chakra-Network/console/issues/395)
* **deployment:** implements custodial deployments top up data collection ([108f073](https://github.com/Chakra-Network/console/commit/108f0736359cc866bb9aa01e3935105c413c8aae)), closes [#39](https://github.com/Chakra-Network/console/issues/39)
* **deployment:** implements custodial wallet balances collection for top up ([0b08cd3](https://github.com/Chakra-Network/console/commit/0b08cd3d4faeb818e00f0025a1c1bea818bcb213)), closes [#395](https://github.com/Chakra-Network/console/issues/395)
* **deployment:** implements ui auto top up toggle ([f03df32](https://github.com/Chakra-Network/console/commit/f03df324e1064f76b477cf888278eb4ad8f443cf)), closes [#714](https://github.com/Chakra-Network/console/issues/714)
* **deployment:** improve new deployment page ([3ffc38b](https://github.com/Chakra-Network/console/commit/3ffc38b2e942f11fc1ab11624aaa653745de6637)), closes [#444](https://github.com/Chakra-Network/console/issues/444)
* **deployment:** limit number of deployments for trials ([#923](https://github.com/Chakra-Network/console/issues/923)) ([d681d51](https://github.com/Chakra-Network/console/commit/d681d51c02501f61b81742fb4fd36aea6f536cea)), closes [#827](https://github.com/Chakra-Network/console/issues/827)
* **deployment:** managed api create leases ([#969](https://github.com/Chakra-Network/console/issues/969)) ([1193b0c](https://github.com/Chakra-Network/console/commit/1193b0cc4015778f0363958e296db2462be11273))
* **deployment:** managed api deposit ([#1055](https://github.com/Chakra-Network/console/issues/1055)) ([f407320](https://github.com/Chakra-Network/console/commit/f40732079f79c39cceb533c82ac6d48f058dd388))
* **deployment:** managed wallet api update deployment ([#1093](https://github.com/Chakra-Network/console/issues/1093)) ([6998834](https://github.com/Chakra-Network/console/commit/699883436cc1763a20f65cce17390403107b179a))
* **deployment:** re-add banner vars ([#992](https://github.com/Chakra-Network/console/issues/992)) ([8575352](https://github.com/Chakra-Network/console/commit/85753529636e238323f542db1c068304b60406de))
* **deployment:** refactor trial providers to config file ([b18a57a](https://github.com/Chakra-Network/console/commit/b18a57aaf01392fb62ee6b2801d022ac3e4e8958))
* **deployment:** remove maintenance banner ([#1006](https://github.com/Chakra-Network/console/issues/1006)) ([705952e](https://github.com/Chakra-Network/console/commit/705952e5d5f29429e98399878b32b24f557b618e))
* **deployment:** requires a deposit to maintain a deployment till the next auto top up ([e3ad957](https://github.com/Chakra-Network/console/commit/e3ad9579d6336912b1e51ca8f983f64322571d2d)), closes [#714](https://github.com/Chakra-Network/console/issues/714)
* **deployment:** reworks top up deployments to rely on db setting ([2762b97](https://github.com/Chakra-Network/console/commit/2762b97bbbb8d63566a258a683a5a0989f6885b4)), closes [#714](https://github.com/Chakra-Network/console/issues/714)
* **deployment:** show banner for trial users with no bids ([#922](https://github.com/Chakra-Network/console/issues/922)) ([344af36](https://github.com/Chakra-Network/console/commit/344af36c7c9172f22e4bcfdc2ea3fe62284a49a8)), closes [#887](https://github.com/Chakra-Network/console/issues/887)
* **deployment:** update ssh images ([6dbba51](https://github.com/Chakra-Network/console/commit/6dbba511b3a0d10a148ddd71f0ccef97943cca79))
* displays first lease service uri on deployment list if deployment name is unknown and small UX improvements ([#924](https://github.com/Chakra-Network/console/issues/924)) ([f3e9b8d](https://github.com/Chakra-Network/console/commit/f3e9b8d96878fab4cc89c37a2ad7747ab844c1b1))
* dynamic amount of storages ([411aa68](https://github.com/Chakra-Network/console/commit/411aa68273926d51eec4511929e17e09baae4b7a)), closes [#175](https://github.com/Chakra-Network/console/issues/175)
* **env:** implement unified file loading in console-web ([12f282a](https://github.com/Chakra-Network/console/commit/12f282aa2798d9597a9f950520fb19d174cb635e)), closes [#313](https://github.com/Chakra-Network/console/issues/313)
* **env:** unify app configs for api and indexer, update doc ([f3f7df4](https://github.com/Chakra-Network/console/commit/f3f7df486e0feabdd672e3d7776c7dab49cde90d)), closes [#313](https://github.com/Chakra-Network/console/issues/313)
* extract custom components ([#256](https://github.com/Chakra-Network/console/issues/256)) ([2d3e889](https://github.com/Chakra-Network/console/commit/2d3e8898f5d6e081f49da3ae5892023317f0b6e7))
* extract UI components shadcn ([#239](https://github.com/Chakra-Network/console/issues/239)) ([f2da963](https://github.com/Chakra-Network/console/commit/f2da963b4b56e6e006959216f35ca8cd7a4fb4f6))
* finish console rebrand ([#259](https://github.com/Chakra-Network/console/issues/259)) ([ae272e8](https://github.com/Chakra-Network/console/commit/ae272e81dc5bcadf6f8c8114514f2fee30d6e135))
* implement npm workspaces  ([#208](https://github.com/Chakra-Network/console/issues/208)) ([c403dc1](https://github.com/Chakra-Network/console/commit/c403dc155b9b213f5ba043d92ee1967e0b133fe3))
* improve provider leases graph ([#246](https://github.com/Chakra-Network/console/issues/246)) ([f5fe74e](https://github.com/Chakra-Network/console/commit/f5fe74e15d6b3d7fbccb28de141451ced5336823))
* improves error logging for AggregateError ([#1072](https://github.com/Chakra-Network/console/issues/1072)) ([c0ca85c](https://github.com/Chakra-Network/console/commit/c0ca85c13b608457e65b8e90dad2d6cc310dd643))
* introduce multi-line commands ([e58349b](https://github.com/Chakra-Network/console/commit/e58349b7eeb5f28adc80dbedd4cf3b5ca304b72f)), closes [#175](https://github.com/Chakra-Network/console/issues/175)
* merge "Upload SDL" to "Build your template" and add "Plain Linux" template ([#244](https://github.com/Chakra-Network/console/issues/244)) ([0edf499](https://github.com/Chakra-Network/console/commit/0edf4992b6e01f6243ab226f2666ec4e05c312e4))
* **network:** add API endpoints for deployment ([#860](https://github.com/Chakra-Network/console/issues/860)) ([5a58c29](https://github.com/Chakra-Network/console/commit/5a58c298e6ad15944a93b7cd1d82837b78235c9a)), closes [#767](https://github.com/Chakra-Network/console/issues/767)
* **network:** API endpoint listing bids ([#859](https://github.com/Chakra-Network/console/issues/859)) ([0c7a8b9](https://github.com/Chakra-Network/console/commit/0c7a8b97bd8bfaeaee78640a7256ef8cf279eb70)), closes [#767](https://github.com/Chakra-Network/console/issues/767)
* **network:** extract network store into a package ([608a16d](https://github.com/Chakra-Network/console/commit/608a16dfd12e5beca628e3169a8fc6ea1c5d12c2))
* **network:** stick to a certain network for managed wallets ([652648a](https://github.com/Chakra-Network/console/commit/652648ab7a765ff0ebe996aadf1680bab1ac7920)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **notifications:** adds basic alerts service ([5d4d6fc](https://github.com/Chakra-Network/console/commit/5d4d6fcf23ceb2b317453a001d4043855df5c5d1))
* **observability:** ensure logger can be configured in browser ([9ac2fdb](https://github.com/Chakra-Network/console/commit/9ac2fdb58d182413378d67e900d0dc2f2dd14746)), closes [#430](https://github.com/Chakra-Network/console/issues/430)
* **observability:** implements client side logging configuration ([da9923e](https://github.com/Chakra-Network/console/commit/da9923eebe673cbdddc475a80a1c2d272dad383e)), closes [#436](https://github.com/Chakra-Network/console/issues/436)
* only shows turnstile widget when cf rejects ([#722](https://github.com/Chakra-Network/console/issues/722)) ([0537f2c](https://github.com/Chakra-Network/console/commit/0537f2cece2c9e1a95547f41ac5c802471342b94))
* **package:** extract logger into packages ([bac463b](https://github.com/Chakra-Network/console/commit/bac463b4f4f18ef73a630d69eba7355cb20d4643)), closes [#429](https://github.com/Chakra-Network/console/issues/429)
* provider deployments on provider console ([#416](https://github.com/Chakra-Network/console/issues/416)) ([62374e1](https://github.com/Chakra-Network/console/commit/62374e15d4e02ffa9f44080a2d41a676b403d70b))
* **provider:** new provider trial endpoint ([2712e38](https://github.com/Chakra-Network/console/commit/2712e380b8f5af0930abbdf9347a1dee3eb75f8a)), closes [#488](https://github.com/Chakra-Network/console/issues/488)
* **provider:** provider pricing feature ([#475](https://github.com/Chakra-Network/console/issues/475)) ([14d73fa](https://github.com/Chakra-Network/console/commit/14d73fa4c3b099e9d530db76949394e16557aa73))
* **release:** implement release with image build ([a9fa7e8](https://github.com/Chakra-Network/console/commit/a9fa7e80b373af4ca90438292f582e661680fb2d))
* **sdl:** add ssh to main builder ([868df46](https://github.com/Chakra-Network/console/commit/868df46ab28f0a649bda48acf9b0adca995c2075)), closes [#227](https://github.com/Chakra-Network/console/issues/227)
* **sdl:** sdl builder private containers ([95a6e2b](https://github.com/Chakra-Network/console/commit/95a6e2b11353b1c07a23f763ef9c9216855025b1)), closes [#479](https://github.com/Chakra-Network/console/issues/479)
* **setting:** only show setting page for a connected user wallet ([66cadb0](https://github.com/Chakra-Network/console/commit/66cadb0c7aa1bb37397a26ef4be37c52396aa735)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* shared packages ([#237](https://github.com/Chakra-Network/console/issues/237)) ([bd79006](https://github.com/Chakra-Network/console/commit/bd79006abff3ee2d06657269ddd0e76d1554f275))
* show a popup on start trial ([#1116](https://github.com/Chakra-Network/console/issues/1116)) ([fdee6e6](https://github.com/Chakra-Network/console/commit/fdee6e6148a4b14d857aeb91f1612a634e72f5e0)), closes [#826](https://github.com/Chakra-Network/console/issues/826)
* **stats:** shows ephemeral and persistent storage separately on pie chart ([#647](https://github.com/Chakra-Network/console/issues/647)) ([7512198](https://github.com/Chakra-Network/console/commit/75121983391db0b932b324656a939370c47827c7)), closes [#645](https://github.com/Chakra-Network/console/issues/645) [#665](https://github.com/Chakra-Network/console/issues/665)
* templates logo url ([#315](https://github.com/Chakra-Network/console/issues/315)) ([fd92d15](https://github.com/Chakra-Network/console/commit/fd92d157884eab79e6dea7c248957fa1d61a58b3))
* upgrade nodejs version to 22.14 (latest lts) ([#1095](https://github.com/Chakra-Network/console/issues/1095)) ([8533b35](https://github.com/Chakra-Network/console/commit/8533b355762016829c4435fd67c7885df79b251e))
* **user:** add user api keys schema + api ([2eac7e9](https://github.com/Chakra-Network/console/commit/2eac7e97246f63570bdd7d9d9700438e99948c7f)), closes [#787](https://github.com/Chakra-Network/console/issues/787)
* **user:** implement anonymous user registration ([b58d74a](https://github.com/Chakra-Network/console/commit/b58d74a8ba0412f1ff8eeeaecafa1a2369723cbf)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **user:** implement stale anonymous users cleanup cli command ([a936f44](https://github.com/Chakra-Network/console/commit/a936f44c6e532efc1f559986c352594237ce3691)), closes [#464](https://github.com/Chakra-Network/console/issues/464)
* **user:** remove anonymous user from localstorage if it's removed ([36298ee](https://github.com/Chakra-Network/console/commit/36298ee0ba4426d5fe2e70cf741b90e26773fc01))
* **users:** api keys UI ([#857](https://github.com/Chakra-Network/console/issues/857)) ([32f9567](https://github.com/Chakra-Network/console/commit/32f9567f05590c2d9bbd6445366570c474f8e063))
* **wallet:** add fee granter to transaction signer ([2a06cc6](https://github.com/Chakra-Network/console/commit/2a06cc64e831bb69763f7f32319f91982e64e09b)), closes [#219](https://github.com/Chakra-Network/console/issues/219)
* **wallet:** ensure proper denom for a managed wallet ([2dbf6b1](https://github.com/Chakra-Network/console/commit/2dbf6b15207530425415095c9cdb97429cadb32e)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **wallet:** implement fee granter as a global setting ([9fa3060](https://github.com/Chakra-Network/console/commit/9fa3060098898115182f10916123abbf7768c34d)), closes [#219](https://github.com/Chakra-Network/console/issues/219)
* **wallet:** improve coupon codes ux ([#1028](https://github.com/Chakra-Network/console/issues/1028)) ([b4a81c7](https://github.com/Chakra-Network/console/commit/b4a81c79b97213ae72d37efe4771129f5b69b5ef))
* **wallet:** improve fiat payments ux ([295e085](https://github.com/Chakra-Network/console/commit/295e08542deb57634de624c5815e1e7127333a16)), closes [#411](https://github.com/Chakra-Network/console/issues/411)
* **wallet:** save selected wallet type local storage ([9d1c5b5](https://github.com/Chakra-Network/console/commit/9d1c5b5a444633012cdda800a55b4ff904b6ee58)), closes [#570](https://github.com/Chakra-Network/console/issues/570)
* **wallet:** update copy and remove allowance notifications ([022b219](https://github.com/Chakra-Network/console/commit/022b2194102f6d969ccfadb38c99d0a0606530fa)), closes [#247](https://github.com/Chakra-Network/console/issues/247)


### Bug Fixes

* **auth:** avoid fetching profile via proxy ([ffce24e](https://github.com/Chakra-Network/console/commit/ffce24e64ea4e89423634ece4cdb047aeee21d92))
* **auth:** checks for cf error more generally ([1582ff8](https://github.com/Chakra-Network/console/commit/1582ff81eff9fa0546c7c372d24a061756261840))
* **auth:** ensure turnstile widget is only shown initially on when interactive ([71f7ea8](https://github.com/Chakra-Network/console/commit/71f7ea8ae843bade1a8fb4bbe7f71cc0731cf42e)), closes [#627](https://github.com/Chakra-Network/console/issues/627)
* **auth:** fix logout button not logging out completely ([#446](https://github.com/Chakra-Network/console/issues/446)) ([96f45dd](https://github.com/Chakra-Network/console/commit/96f45dd617ef32fe813de03026c9370498099f34))
* **auth:** patches fetch to retry on cloudflare challenge ([c6f4c7d](https://github.com/Chakra-Network/console/commit/c6f4c7d5f97e318cef77d232011dcee9b10f5aa8)), closes [#836](https://github.com/Chakra-Network/console/issues/836)
* **auth:** properly authenticate new endpoints ([ce241e1](https://github.com/Chakra-Network/console/commit/ce241e1a7edb079e014f2d95bab1ce1902b94656)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **auth:** removes a turnstile widget before rendering ([153c1d1](https://github.com/Chakra-Network/console/commit/153c1d157e837abf4597d1f0439f183b2cd45b92))
* **auth:** removes a turnstile widget before rendering ([69bb2b0](https://github.com/Chakra-Network/console/commit/69bb2b06c1c68fe96a16faf0f7e292c7d9a5aa9b))
* **auth:** removes turnstile widget before rendering ([bd32f01](https://github.com/Chakra-Network/console/commit/bd32f0132e6151ebb46f6b03903cb0cbd82cbd4f))
* **auth:** revert cf clearance cookie forwarding to api via auth proxy ([ac6aca5](https://github.com/Chakra-Network/console/commit/ac6aca5752fd66d144fcb6c5eafbe69c6bc91401))
* **auth:** simplifies turnstile widget error display ([198fe5d](https://github.com/Chakra-Network/console/commit/198fe5d893e6e0d501707a61711f0f8215b1849f))
* **billing:** banner light mode styling ([a5aa61b](https://github.com/Chakra-Network/console/commit/a5aa61bff15bfbb4f2e4bdf7664f983f79b10f3a)), closes [#520](https://github.com/Chakra-Network/console/issues/520)
* **billing:** check for email verified to add funds ([e1cfa10](https://github.com/Chakra-Network/console/commit/e1cfa10835ad29938f12812f8b28d582213850ec)), closes [#535](https://github.com/Chakra-Network/console/issues/535)
* **billing:** disable grantee grants query for managed deployments deposit modal ([91bf940](https://github.com/Chakra-Network/console/commit/91bf9401bf8d9558465f009a0c01b39afef6a349))
* **billing:** enable balances fetching back ([eaa42a5](https://github.com/Chakra-Network/console/commit/eaa42a5ecd04db87bcbd5f4d9ac75771f4e20244))
* **billing:** ensure checkout pricing is displayed correctly ([3bcb4a8](https://github.com/Chakra-Network/console/commit/3bcb4a881e3bb58e741de8bb8a0a661dede0d8ae))
* **billing:** fix usdc balance calculation ([18b6ef3](https://github.com/Chakra-Network/console/commit/18b6ef3a0785f115651eec5afcbe25ab433af386))
* **billing:** mobile banner styling ([566d941](https://github.com/Chakra-Network/console/commit/566d9416149698d195e2463f32903496ff497a22)), closes [#525](https://github.com/Chakra-Network/console/issues/525)
* **billing:** only show pricing options when available ([6e31276](https://github.com/Chakra-Network/console/commit/6e31276d4fcb56d9a74d7b1b04226a80a5795bec))
* **billing:** properly check fee grant before tx ([b721141](https://github.com/Chakra-Network/console/commit/b72114172847514cbccbd831db3503d20f533aed))
* **billing:** properly reference a var in balances hook ([ba53d6b](https://github.com/Chakra-Network/console/commit/ba53d6b70341f0bb03aaa609a05b8a73931b5120))
* **billing:** use specific endpoint to check managed wallet grants ([d87d79f](https://github.com/Chakra-Network/console/commit/d87d79fbe29350c57c625e61e7f9805c5dc0b6ea))
* **billing:** use specific endpoint to check managed wallet grants ([a8f265b](https://github.com/Chakra-Network/console/commit/a8f265b345da62cfa33c5c57c274d691a8062ed1))
* **certificate:** certificates pagination bug ([#384](https://github.com/Chakra-Network/console/issues/384)) ([a068b15](https://github.com/Chakra-Network/console/commit/a068b15024f0d1f0b45526eda5ecc83763b95625))
* change the link to "learn more" during tx sign ([#1122](https://github.com/Chakra-Network/console/issues/1122)) ([e77d95a](https://github.com/Chakra-Network/console/commit/e77d95ab4525fbae02bcca856040ae677f61fbf5))
* **config:** increase nginx large header buffer limit ([#526](https://github.com/Chakra-Network/console/issues/526)) ([192b9a2](https://github.com/Chakra-Network/console/commit/192b9a27d1f43f88762cca625ff19460281a9995))
* console your account ([#328](https://github.com/Chakra-Network/console/issues/328)) ([f26958b](https://github.com/Chakra-Network/console/commit/f26958b0cfacd5b39829fc43236ae064dae7d44b))
* **console:** add null check for user in sign and broadcast ([#304](https://github.com/Chakra-Network/console/issues/304)) ([8eae178](https://github.com/Chakra-Network/console/commit/8eae17825dc401c3776be492ca853e27b7e6a934))
* **console:** default uakt 10000 ([#324](https://github.com/Chakra-Network/console/issues/324)) ([7b5f258](https://github.com/Chakra-Network/console/commit/7b5f25899cb0f44f09878673d5c48db23c143b8e))
* **console:** managed wallet manifest fix error ([#351](https://github.com/Chakra-Network/console/issues/351)) ([69880b0](https://github.com/Chakra-Network/console/commit/69880b0390dfc632b55fe56e9db27cd0bd8db8d6))
* **console:** refactor useAllowance hook ([#336](https://github.com/Chakra-Network/console/issues/336)) ([269d227](https://github.com/Chakra-Network/console/commit/269d22709a485bb0b1bec8f34e8a66a2c3625480))
* **console:** return 404 when template is not found ([6c6e0a9](https://github.com/Chakra-Network/console/commit/6c6e0a9585037934e12ecd47ce579e84e902152d))
* **console:** update CustomGoogleAnalytics.tsx ([#290](https://github.com/Chakra-Network/console/issues/290)) ([48d855b](https://github.com/Chakra-Network/console/commit/48d855b30af3bca7baf90303f6839b241d27508e))
* **deploy-web:** fix provider uptime sorting during ssr ([3ece973](https://github.com/Chakra-Network/console/commit/3ece9735e5c7f69f58aa5ad56b58b34d7a82c52e))
* **deploy-web:** fix spacing for uptime ([#222](https://github.com/Chakra-Network/console/issues/222)) ([3f7193a](https://github.com/Chakra-Network/console/commit/3f7193ab053e4f008cd661ae5a869fe92e475615))
* **deploy-web:** fixed error handling for transaction page ([#213](https://github.com/Chakra-Network/console/issues/213)) ([a006e03](https://github.com/Chakra-Network/console/commit/a006e03ad7a18679eee1d0870dec724f3a632d84))
* **deploy-web:** handle sdl parsing error in sdl builder ([#228](https://github.com/Chakra-Network/console/issues/228)) ([5da2bc9](https://github.com/Chakra-Network/console/commit/5da2bc9647ac8b6ba189eb67632a43697304511d))
* **deployment:** added provider validation for trial ([ae03311](https://github.com/Chakra-Network/console/commit/ae03311c5189d3569cad3ae45c662069c2e1eaaa))
* **deployment:** adds usdc option to parse pricing amount ([0f38c18](https://github.com/Chakra-Network/console/commit/0f38c18c521b2cc68fe79d3634623baea5a59f64)), closes [#714](https://github.com/Chakra-Network/console/issues/714)
* **deployment:** append trial attribute for anon only ([#1155](https://github.com/Chakra-Network/console/issues/1155)) ([814e154](https://github.com/Chakra-Network/console/commit/814e154a4bcaaea74507a87a3af3c9a628154835))
* **deployment:** fix deployment not found ([#709](https://github.com/Chakra-Network/console/issues/709)) ([548e538](https://github.com/Chakra-Network/console/commit/548e5387f2265290af872e35393b1f430737c9a3))
* **deployment:** fix import sdl in render ([#1127](https://github.com/Chakra-Network/console/issues/1127)) ([7e34b7c](https://github.com/Chakra-Network/console/commit/7e34b7c1703ae76d77bdb76269b7cd7e9626ea04))
* **deployment:** git template fetch in deploy ([094aaf4](https://github.com/Chakra-Network/console/commit/094aaf48b7b00ed4af3299fac0fb584a09e12866)), closes [#489](https://github.com/Chakra-Network/console/issues/489)
* **deployment:** latest processed height deployment stale ([8d8384f](https://github.com/Chakra-Network/console/commit/8d8384f519ae958e324a81fbf5a2ae00383bddc3)), closes [#491](https://github.com/Chakra-Network/console/issues/491)
* **deployment:** managed wallet user template ([ab83f2f](https://github.com/Chakra-Network/console/commit/ab83f2f699e84b3a4f90739d2d003a9f8e9d27aa)), closes [#483](https://github.com/Chakra-Network/console/issues/483)
* **deployment:** managed walllet fixes ([#382](https://github.com/Chakra-Network/console/issues/382)) ([4a43483](https://github.com/Chakra-Network/console/commit/4a4348390c56d0f2794b6689cf19ef84edaf9c54))
* **deployment:** only enables auto top up if deposit is successful ([151b781](https://github.com/Chakra-Network/console/commit/151b78178ff392fd2106e598bb01e481ddf8086d))
* **deployment:** only set the template and redirect once when loading new deployment ([#394](https://github.com/Chakra-Network/console/issues/394)) ([654dbae](https://github.com/Chakra-Network/console/commit/654dbaed6bc7fbd37b6261c0a65510fde1859a51))
* **deployment:** provider label ([#632](https://github.com/Chakra-Network/console/issues/632)) ([f96c570](https://github.com/Chakra-Network/console/commit/f96c570cf31b4ab3cb6470dc1ad043a7173c3792))
* **deployment:** remove control over deployment detail fetching ([7c2263b](https://github.com/Chakra-Network/console/commit/7c2263b5cc99a0886e7ee1a1b018691d7a64782f)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **deployment:** sign up for trial ([#1098](https://github.com/Chakra-Network/console/issues/1098)) ([777340d](https://github.com/Chakra-Network/console/commit/777340da91505a3dd1754ee5aea4e9d9f47f8108))
* **deployment:** templates new deploy ([#403](https://github.com/Chakra-Network/console/issues/403)) ([c0d50b1](https://github.com/Chakra-Network/console/commit/c0d50b1d50a1f083105afd877a2c370dfcb34dd8))
* **deployment:** trial provider attributes ([6f5c94d](https://github.com/Chakra-Network/console/commit/6f5c94d41879a8d23ed129857f5d28285d4f9ee9)), closes [#453](https://github.com/Chakra-Network/console/issues/453)
* **deployment:** validate max deposit amount correctly ([44c0274](https://github.com/Chakra-Network/console/commit/44c02745635510b8b5eb6bb4f9462b232543f393)), closes [#603](https://github.com/Chakra-Network/console/issues/603)
* disable grantee grants temporarily ([1a992c1](https://github.com/Chakra-Network/console/commit/1a992c1031ca8b17d6c0c613d9eba4286e54175b))
* **dx:** fix e2e tests ([9ab53ef](https://github.com/Chakra-Network/console/commit/9ab53eff42a43c4f02757b4b19aa5877f25c366e)), closes [#741](https://github.com/Chakra-Network/console/issues/741)
* ensure apps build consistently in docker and locally ([f4dbd88](https://github.com/Chakra-Network/console/commit/f4dbd88a886d683062eebd7495375bff0bd4aa54)), closes [#209](https://github.com/Chakra-Network/console/issues/209)
* ensure deploy web type check is passing ([62acb44](https://github.com/Chakra-Network/console/commit/62acb44e7625063a39a53ac87e4902a3dfc6d4fb))
* ensure proper schema type on server props getter ([aedf03d](https://github.com/Chakra-Network/console/commit/aedf03d837fd6b2ebd6e76b32a694e043053a441))
* ensure release can detect changes for apps based on local packages ([#1070](https://github.com/Chakra-Network/console/issues/1070)) ([e1053c4](https://github.com/Chakra-Network/console/commit/e1053c456ba718fc58a93799e550e9338d9aea45))
* ensure that akash prebuilt templates exist in the final docker image ([#1020](https://github.com/Chakra-Network/console/issues/1020)) ([2a940a3](https://github.com/Chakra-Network/console/commit/2a940a349a85182f88fb8a83990bf3a78b0bab3f))
* ensure that deployment details are not fetched unless node api endpoint is not empty ([#806](https://github.com/Chakra-Network/console/issues/806)) ([8fc4523](https://github.com/Chakra-Network/console/commit/8fc4523034e06036bddc75378d1503d7ba8ead64))
* ensure that sdl is truthy before passing it to `importSimpleDSL` ([#960](https://github.com/Chakra-Network/console/issues/960)) ([08a00cd](https://github.com/Chakra-Network/console/commit/08a00cd204f67c469da0ee607542cf6bcf0106a9))
* ensure user has local certificate before checking lease status ([#943](https://github.com/Chakra-Network/console/issues/943)) ([c53dfc1](https://github.com/Chakra-Network/console/commit/c53dfc1006f2eb3ea30092efd05715f842090150))
* ensures provider-proxy has valid blockchain API_URL on sandbox env ([#1032](https://github.com/Chakra-Network/console/issues/1032)) ([325461e](https://github.com/Chakra-Network/console/commit/325461e684a547669ac9765a3ac378ceadb86ee1))
* **env:** parse process env with zod to ensure default values ([0224f79](https://github.com/Chakra-Network/console/commit/0224f79a231df9acc66f965469e5df59b60896ad))
* fallbacks to `local` if DEPLOYMENT_ENV is not specified ([#1029](https://github.com/Chakra-Network/console/issues/1029)) ([f9bc424](https://github.com/Chakra-Network/console/commit/f9bc4242900c58b0bd519e5c755616aedccfb71b))
* fix border clipping on EnvFormModal ([e8b2d5f](https://github.com/Chakra-Network/console/commit/e8b2d5f90c16d25330995a07bec436968111b318))
* fixes warnings in ui package ([#979](https://github.com/Chakra-Network/console/issues/979)) ([3279d94](https://github.com/Chakra-Network/console/commit/3279d948179edd5473fd507ebb66c8532616c774))
* handle provider active leases graph when no leases or new provider ([#253](https://github.com/Chakra-Network/console/issues/253)) ([a7feeda](https://github.com/Chakra-Network/console/commit/a7feedaa50cc37960323182a97f4d26df59960c5))
* handles case when service.uris is null ([#957](https://github.com/Chakra-Network/console/issues/957)) ([82b43c5](https://github.com/Chakra-Network/console/commit/82b43c58786bf31af94cd1c12c2ab572dede4fb5))
* improve perf ([d9de0eb](https://github.com/Chakra-Network/console/commit/d9de0eba93d0c4ee4d7e051f98843578ba30a258)), closes [#427](https://github.com/Chakra-Network/console/issues/427)
* improve the settings node fetching to avoid having a failing node ([#262](https://github.com/Chakra-Network/console/issues/262)) ([07fd696](https://github.com/Chakra-Network/console/commit/07fd696989d9d16c6e5b07071e2260f749fab4d0))
* make sure to deposit with 0 balance ([8246395](https://github.com/Chakra-Network/console/commit/8246395ba15e622ba5c82824548e18b16ffc0101))
* make sure to deposit with 0 balance ([c166b0e](https://github.com/Chakra-Network/console/commit/c166b0e5a76f7099160cde6dfbe449e0ff266058))
* move leapwallet CSS library import to component-specific usage ([#281](https://github.com/Chakra-Network/console/issues/281)) ([333e29a](https://github.com/Chakra-Network/console/commit/333e29afd5a05602e58760234b171278b6f7960e))
* **network:** safely parse initial selected network ([8f0e2de](https://github.com/Chakra-Network/console/commit/8f0e2de54b64469bfbb9e169030435c04060739b))
* **observability:** bump logger version ([b258c63](https://github.com/Chakra-Network/console/commit/b258c6389d22c0bf57e9c702b51a1280faf74eb7))
* **observability:** ensure pino-pretty works in built app ([7f6f9ca](https://github.com/Chakra-Network/console/commit/7f6f9ca7ca4e1ff4bc3b85735270f61cc8120242)), closes [#474](https://github.com/Chakra-Network/console/issues/474)
* **observability:** make sure otl data is added to logs ([820870d](https://github.com/Chakra-Network/console/commit/820870d43203ddec5d3cd101d5c46b4b67e1d16d))
* **observability:** set logger time format to iso ([3fc959e](https://github.com/Chakra-Network/console/commit/3fc959eb1f7ac1132eab054909a6336263482db8))
* **provider:** added missing types and added error handling ([#751](https://github.com/Chakra-Network/console/issues/751)) ([aee3589](https://github.com/Chakra-Network/console/commit/aee35895d9d632194907c9f04f5d50b7d0f52b58))
* **provider:** render longer provider names, make them copiable ([#898](https://github.com/Chakra-Network/console/issues/898)) ([64f8fa0](https://github.com/Chakra-Network/console/commit/64f8fa02a5b98a75b08382db97c0534ed26ed959)), closes [#858](https://github.com/Chakra-Network/console/issues/858) [#858](https://github.com/Chakra-Network/console/issues/858)
* renders turnstile only on client side ([#949](https://github.com/Chakra-Network/console/issues/949)) ([d282d20](https://github.com/Chakra-Network/console/commit/d282d20ae2cb5e78704190a5016081766467d6ff))
* **sdl:** break controls earlier so columns don't overlap  ([c9d3b45](https://github.com/Chakra-Network/console/commit/c9d3b4528a7a1e864f98541d1a93fbf7622f7cde)), closes [#828](https://github.com/Chakra-Network/console/issues/828)
* **sdl:** can use AMD GPUs  ([1569a35](https://github.com/Chakra-Network/console/commit/1569a35fda166bab34d3ba5e41207acf2545ed80)), closes [#64](https://github.com/Chakra-Network/console/issues/64)
* **styling:** fix typo on homepage ([#420](https://github.com/Chakra-Network/console/issues/420)) ([938f6b7](https://github.com/Chakra-Network/console/commit/938f6b7fcbe1a990cb6911a83000243ca6bb835c))
* **styling:** remove beta logo ([b052151](https://github.com/Chakra-Network/console/commit/b0521518709e2487208dd83256b4c630a1c7ac29))
* **template:** eliminates eternal loop when query if failing  ([ca93b51](https://github.com/Chakra-Network/console/commit/ca93b5123725394094aada5149811de548717d94))
* **template:** forces templates seo meta rendering on the backend ([cc674d8](https://github.com/Chakra-Network/console/commit/cc674d807526fde167c9a768ec2cd5be7075a040)), closes [#786](https://github.com/Chakra-Network/console/issues/786)
* type button code snippet ([51bd8cc](https://github.com/Chakra-Network/console/commit/51bd8cc45caf50b39574771da866b1893a5f2704))
* **ui:** fix tailwind.config.js content paths ([73de799](https://github.com/Chakra-Network/console/commit/73de799719ac916132dea08b2070e7d4b613fd26))
* update balance warning ([ec004a7](https://github.com/Chakra-Network/console/commit/ec004a78631cc32bc281b50d1af3c0225faf2f19))
* update nextjs version ([#1105](https://github.com/Chakra-Network/console/issues/1105)) ([5d24cd8](https://github.com/Chakra-Network/console/commit/5d24cd851eac88a0fbf04899ffdda689994c2b8b))
* update package version ([a873df7](https://github.com/Chakra-Network/console/commit/a873df7dcc77b57c065ac1bb5783603e921bf673))
* update react-query in a few places ([#1084](https://github.com/Chakra-Network/console/issues/1084)) ([7473929](https://github.com/Chakra-Network/console/commit/7473929504ad9d3527688082084e521a64741a25)), closes [#337](https://github.com/Chakra-Network/console/issues/337)
* updates dockerfile for node apps ([#1068](https://github.com/Chakra-Network/console/issues/1068)) ([54194a0](https://github.com/Chakra-Network/console/commit/54194a08ca514f1be623a20e7a01cfbbf2e2244a))
* **user:** ensure user pages are properly loaded ([463bfee](https://github.com/Chakra-Network/console/commit/463bfeeb531ba79bfc8bba3d8e3f7520fb4803d6)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **user:** revoke stale users expired grants ([21cbfa6](https://github.com/Chakra-Network/console/commit/21cbfa654d2a3effa11b8b83404158256142c1d5))
* **wallet:** authz pagination ([6193df5](https://github.com/Chakra-Network/console/commit/6193df5f0820f67095ed9fe9280654b278f398a1)), closes [#415](https://github.com/Chakra-Network/console/issues/415)
* **wallet:** crash when spend limit not set ([0280e58](https://github.com/Chakra-Network/console/commit/0280e58e09427f115ea1a73b614388af075b20b1)), closes [#651](https://github.com/Chakra-Network/console/issues/651)
* **wallet:** ensure managed wallet is gone after logout ([a7d4873](https://github.com/Chakra-Network/console/commit/a7d4873ed9e94f037d3ee3e78397f3da33b32f17))
* **wallet:** ensure managed wallet selected on create ([9f5bd71](https://github.com/Chakra-Network/console/commit/9f5bd71faca4b64c427ed6dfa7c458e3fdc52314))
* **wallet:** ensure proper network and manage wallet switch ([39ee991](https://github.com/Chakra-Network/console/commit/39ee991731145c3d3d8b3a6cb0ef37fe453b0d29))
* **wallet:** fix fetching of authz ([#1017](https://github.com/Chakra-Network/console/issues/1017)) ([37a0b2d](https://github.com/Chakra-Network/console/commit/37a0b2d0f29ed11e4aa0b11c1d4fd919094373fb))
* **wallet:** fix top-up amount button spacing ([#964](https://github.com/Chakra-Network/console/issues/964)) ([15ab5a2](https://github.com/Chakra-Network/console/commit/15ab5a240db371ec19f16cd52a3723243c3a0ece)), closes [#668](https://github.com/Chakra-Network/console/issues/668)
* **wallet:** fix your account usdc display ([1dedde4](https://github.com/Chakra-Network/console/commit/1dedde4078cc64ac9443ad458a2058f364d9e48a))
* **wallet:** init nextPageKey with null when paginating grants ([2698b14](https://github.com/Chakra-Network/console/commit/2698b14fc9ade6eab56e189daab753372677b9de))
* **wallet:** refetch using query directly to avoid circular dep ([e88ed70](https://github.com/Chakra-Network/console/commit/e88ed706efd5e6e1b27969a7efaa09f8b4157be5))
* **wallet:** remove managed wallet on registered user logout ([ab6188e](https://github.com/Chakra-Network/console/commit/ab6188e1f100e9598afc8524daa8fd50fc860b1a)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* **wallet:** wallet connect managed to custodial ([037f3f6](https://github.com/Chakra-Network/console/commit/037f3f689a6d7c86ef282771366e481eb6532ba7)), closes [#469](https://github.com/Chakra-Network/console/issues/469)


### Code Refactoring

* add getServerSideProps validation ([9a8d68d](https://github.com/Chakra-Network/console/commit/9a8d68dc494e91d4b63984eee707a6a92161a197))
* adds warmUpTemplatesCache script ([#962](https://github.com/Chakra-Network/console/issues/962)) ([46b37eb](https://github.com/Chakra-Network/console/commit/46b37eb632dc6da429da94b599160b2e587980c9))
* **auth:** remove email endpoint from console web ([2190000](https://github.com/Chakra-Network/console/commit/2190000885f89cc2fbd719f3a6f216fba354ed8d))
* **auth:** use explicit turnstile env var toggle ([99ac4f2](https://github.com/Chakra-Network/console/commit/99ac4f2e291433b29189f1366db0d5b3ccac1cbb)), closes [#627](https://github.com/Chakra-Network/console/issues/627)
* changes provider-proxy URL for console-web staging env ([#731](https://github.com/Chakra-Network/console/issues/731)) ([e89994e](https://github.com/Chakra-Network/console/commit/e89994e2f1c00780ba1f5d333eb87c600669ca80))
* changes structure and reduce side-effects in provider proxy ([#831](https://github.com/Chakra-Network/console/issues/831)) ([3002e00](https://github.com/Chakra-Network/console/commit/3002e00508019c5adaca4a0bdc42e3b9bf0e4ef1))
* **console:** add env vars for sentry ([#374](https://github.com/Chakra-Network/console/issues/374)) ([94bc07e](https://github.com/Chakra-Network/console/commit/94bc07ebdad8342bc4ad2b5279411c1396fa5333))
* **console:** remove address book feature from console ([605d0d5](https://github.com/Chakra-Network/console/commit/605d0d53524ffe35f7b1e0de6faf1d10886bff0c))
* **deployment:** splits some top up logic ([0747c20](https://github.com/Chakra-Network/console/commit/0747c200ae58cd31d06e2bc6a2a9976a0bfecc41)), closes [#395](https://github.com/Chakra-Network/console/issues/395)
* **dx:** fix linting issues ([1115a60](https://github.com/Chakra-Network/console/commit/1115a609ba6a080e4c91331f45fb0d12b48c5504))
* enable eslint rules which restricts what dependencies can be used ([#1074](https://github.com/Chakra-Network/console/issues/1074)) ([509fcd3](https://github.com/Chakra-Network/console/commit/509fcd39831311950afdfb51c189ef46b02c855f))
* enables strict ts mode for logging package ([#951](https://github.com/Chakra-Network/console/issues/951)) ([1086ec2](https://github.com/Chakra-Network/console/commit/1086ec2db2df5ea981fe90417085208254b335c9))
* enables strict ts types for http-sdk ([#941](https://github.com/Chakra-Network/console/issues/941)) ([4491dac](https://github.com/Chakra-Network/console/commit/4491dac6dc9ea6f6bb65c4a18e877778867b1dc3))
* enables strict types for net & network-store package ([#952](https://github.com/Chakra-Network/console/issues/952)) ([ccc6dc2](https://github.com/Chakra-Network/console/commit/ccc6dc2513006ce1c2522c359d7c946f0946da69))
* enables strict types for ui package ([#953](https://github.com/Chakra-Network/console/issues/953)) ([216ac0e](https://github.com/Chakra-Network/console/commit/216ac0e59e739c34d1d7acb2e14fd1a9d94bc816))
* **forms:** zod form validation and components ([#283](https://github.com/Chakra-Network/console/issues/283)) ([3b8279d](https://github.com/Chakra-Network/console/commit/3b8279d3b7e6f2f1160c26383a04cf775140f1b5))
* **http:** extract http services to the package ([8196b4a](https://github.com/Chakra-Network/console/commit/8196b4a0ff6503e9c057c9aea4409054cb4fc970)), closes [#247](https://github.com/Chakra-Network/console/issues/247)
* migrates console-web components to strict types ([#1050](https://github.com/Chakra-Network/console/issues/1050)) ([bd1e3e7](https://github.com/Chakra-Network/console/commit/bd1e3e734d249d36189d49e3fabad7d22d43fd99))
* moves ProviderRawData and its unit tests under a single folder ([#978](https://github.com/Chakra-Network/console/issues/978)) ([962fe7e](https://github.com/Chakra-Network/console/commit/962fe7ea106ce9f62bb772358508d94cacb6fd38))
* moves trial authorization spending out of db transaction ([#1129](https://github.com/Chakra-Network/console/issues/1129)) ([8c8e372](https://github.com/Chakra-Network/console/commit/8c8e3729ce7c1f7ad2c387b471b326f1fbc0d353))
* **network:** retrieves api versions and urls based on network store ([793a3ac](https://github.com/Chakra-Network/console/commit/793a3ac16ea181c25b14b4af21b9aa315d84a008))
* **observability:** ensure logger can be configured with options and env ([bb84492](https://github.com/Chakra-Network/console/commit/bb84492b3402688c19af79fce0ad19af25af8bd8)), closes [#430](https://github.com/Chakra-Network/console/issues/430)
* refactors console-web pages to strict types ([#1052](https://github.com/Chakra-Network/console/issues/1052)) ([68c0ef0](https://github.com/Chakra-Network/console/commit/68c0ef07ab35ce2a2bc5e94b8d47ce1740c98236))
* refactors part of deploy-web to strict typescript types ([#1003](https://github.com/Chakra-Network/console/issues/1003)) ([6ac6bb2](https://github.com/Chakra-Network/console/commit/6ac6bb2ba919c933b923d40c56ea26f9788caed7))
* refactors queries and hooks to strict types ([#1044](https://github.com/Chakra-Network/console/issues/1044)) ([6f520ba](https://github.com/Chakra-Network/console/commit/6f520ba6e0fe4b38b39a61841141513b1c6c8980))
* refactors services in console-web to strict types ([#1004](https://github.com/Chakra-Network/console/issues/1004)) ([fd85685](https://github.com/Chakra-Network/console/commit/fd85685858b64ead49a946955fe8da48ea9cc49b))
* replaces TemplatesContext with direct usage of useTemplates on top of react-query ([#935](https://github.com/Chakra-Network/console/issues/935)) ([ce5dc1e](https://github.com/Chakra-Network/console/commit/ce5dc1e04737765f76b486356d77d9ddc3723317))
* **template:** remove unused hook ([754321a](https://github.com/Chakra-Network/console/commit/754321a74bef12867dd88cafbd851a463ca354a4))
* **template:** replaces /v1/templates with /v1/templates-list ([#634](https://github.com/Chakra-Network/console/issues/634)) ([f81d56e](https://github.com/Chakra-Network/console/commit/f81d56e94d089b17a6a0f2f939735c5f8e053278)), closes [#477](https://github.com/Chakra-Network/console/issues/477)
* **template:** use env var for cicd template check ([3650daa](https://github.com/Chakra-Network/console/commit/3650daa9c968fe3af0df524b891adf0ef38c9011)), closes [#477](https://github.com/Chakra-Network/console/issues/477)
* **template:** utilize new GET /v1/templates/{id} endpoint for template and deployment detail ([57a2aad](https://github.com/Chakra-Network/console/commit/57a2aad5a1d9bd13e5bf02f43325b59d81cdd1b6)), closes [#477](https://github.com/Chakra-Network/console/issues/477)

## [2.66.0](https://github.com/akash-network/console/compare/console-web/v2.65.1...console-web/v2.66.0) (2025-04-02)


### Features

* dynamic amount of storages ([411aa68](https://github.com/akash-network/console/commit/411aa68273926d51eec4511929e17e09baae4b7a)), closes [#175](https://github.com/akash-network/console/issues/175)

## [2.65.1](https://github.com/akash-network/console/compare/console-web/v2.65.0...console-web/v2.65.1) (2025-04-01)


### Bug Fixes

* **deployment:** append trial attribute for anon only ([#1155](https://github.com/akash-network/console/issues/1155)) ([814e154](https://github.com/akash-network/console/commit/814e154a4bcaaea74507a87a3af3c9a628154835))

## [2.65.0](https://github.com/akash-network/console/compare/console-web/v2.64.0...console-web/v2.65.0) (2025-03-31)


### Features

* **deployment:** managed wallet api update deployment ([#1093](https://github.com/akash-network/console/issues/1093)) ([6998834](https://github.com/akash-network/console/commit/699883436cc1763a20f65cce17390403107b179a))
* show a popup on start trial ([#1116](https://github.com/akash-network/console/issues/1116)) ([fdee6e6](https://github.com/akash-network/console/commit/fdee6e6148a4b14d857aeb91f1612a634e72f5e0)), closes [#826](https://github.com/akash-network/console/issues/826)
* upgrade nodejs version to 22.14 (latest lts) ([#1095](https://github.com/akash-network/console/issues/1095)) ([8533b35](https://github.com/akash-network/console/commit/8533b355762016829c4435fd67c7885df79b251e))


### Bug Fixes

* **deployment:** fix import sdl in render ([#1127](https://github.com/akash-network/console/issues/1127)) ([7e34b7c](https://github.com/akash-network/console/commit/7e34b7c1703ae76d77bdb76269b7cd7e9626ea04))


### Code Refactoring

* moves trial authorization spending out of db transaction ([#1129](https://github.com/akash-network/console/issues/1129)) ([8c8e372](https://github.com/akash-network/console/commit/8c8e3729ce7c1f7ad2c387b471b326f1fbc0d353))

## [2.64.0](https://github.com/akash-network/console/compare/console-web/v2.63.0...console-web/v2.64.0) (2025-03-28)


### Features

* **deployment:** show banner for trial users with no bids ([#922](https://github.com/akash-network/console/issues/922)) ([344af36](https://github.com/akash-network/console/commit/344af36c7c9172f22e4bcfdc2ea3fe62284a49a8)), closes [#887](https://github.com/akash-network/console/issues/887)


### Bug Fixes

* change the link to "learn more" during tx sign ([#1122](https://github.com/akash-network/console/issues/1122)) ([e77d95a](https://github.com/akash-network/console/commit/e77d95ab4525fbae02bcca856040ae677f61fbf5))

## [2.63.0](https://github.com/akash-network/console/compare/console-web/v2.62.4...console-web/v2.63.0) (2025-03-26)


### Features

* adds basic feature flags support to api and deploy-web ([#1113](https://github.com/akash-network/console/issues/1113)) ([130407c](https://github.com/akash-network/console/commit/130407ce8632cde4cea49394ba01267a1962d158))


### Bug Fixes

* update nextjs version ([#1105](https://github.com/akash-network/console/issues/1105)) ([5d24cd8](https://github.com/akash-network/console/commit/5d24cd851eac88a0fbf04899ffdda689994c2b8b))
* update react-query in a few places ([#1084](https://github.com/akash-network/console/issues/1084)) ([7473929](https://github.com/akash-network/console/commit/7473929504ad9d3527688082084e521a64741a25)), closes [#337](https://github.com/akash-network/console/issues/337)

## [2.62.4](https://github.com/akash-network/console/compare/console-web/v2.62.3...console-web/v2.62.4) (2025-03-24)


### Bug Fixes

* **deployment:** sign up for trial ([#1098](https://github.com/akash-network/console/issues/1098)) ([777340d](https://github.com/akash-network/console/commit/777340da91505a3dd1754ee5aea4e9d9f47f8108))

## [2.62.3](https://github.com/akash-network/console/compare/console-web/v2.62.2...console-web/v2.62.3) (2025-03-21)


### Bug Fixes

* **auth:** removes turnstile widget before rendering ([bd32f01](https://github.com/akash-network/console/commit/bd32f0132e6151ebb46f6b03903cb0cbd82cbd4f))

## [2.62.2](https://github.com/akash-network/console/compare/console-web/v2.62.1...console-web/v2.62.2) (2025-03-21)


### Bug Fixes

* **auth:** removes a turnstile widget before rendering ([153c1d1](https://github.com/akash-network/console/commit/153c1d157e837abf4597d1f0439f183b2cd45b92))

## [2.62.1](https://github.com/akash-network/console/compare/console-web/v2.62.0...console-web/v2.62.1) (2025-03-20)


### Bug Fixes

* **auth:** removes a turnstile widget before rendering ([69bb2b0](https://github.com/akash-network/console/commit/69bb2b06c1c68fe96a16faf0f7e292c7d9a5aa9b))


### Code Refactoring

* enable eslint rules which restricts what dependencies can be used ([#1074](https://github.com/akash-network/console/issues/1074)) ([509fcd3](https://github.com/akash-network/console/commit/509fcd39831311950afdfb51c189ef46b02c855f))

## [2.62.0](https://github.com/akash-network/console/compare/console-web/v2.61.1...console-web/v2.62.0) (2025-03-20)


### Features

* improves error logging for AggregateError ([#1072](https://github.com/akash-network/console/issues/1072)) ([c0ca85c](https://github.com/akash-network/console/commit/c0ca85c13b608457e65b8e90dad2d6cc310dd643))
* introduce multi-line commands ([e58349b](https://github.com/akash-network/console/commit/e58349b7eeb5f28adc80dbedd4cf3b5ca304b72f)), closes [#175](https://github.com/akash-network/console/issues/175)


### Bug Fixes

* ensure release can detect changes for apps based on local packages ([#1070](https://github.com/akash-network/console/issues/1070)) ([e1053c4](https://github.com/akash-network/console/commit/e1053c456ba718fc58a93799e550e9338d9aea45))
* updates dockerfile for node apps ([#1068](https://github.com/akash-network/console/issues/1068)) ([54194a0](https://github.com/akash-network/console/commit/54194a08ca514f1be623a20e7a01cfbbf2e2244a))

## [2.61.1](https://github.com/akash-network/console/compare/console-web/v2.61.0...console-web/v2.61.1) (2025-03-19)


### Code Refactoring

* migrates console-web components to strict types ([#1050](https://github.com/akash-network/console/issues/1050)) ([bd1e3e7](https://github.com/akash-network/console/commit/bd1e3e734d249d36189d49e3fabad7d22d43fd99))
* refactors console-web pages to strict types ([#1052](https://github.com/akash-network/console/issues/1052)) ([68c0ef0](https://github.com/akash-network/console/commit/68c0ef07ab35ce2a2bc5e94b8d47ce1740c98236))

## [2.61.0](https://github.com/akash-network/console/compare/console-web/v2.60.0...console-web/v2.61.0) (2025-03-18)


### Features

* **deployment:** managed api deposit ([#1055](https://github.com/akash-network/console/issues/1055)) ([f407320](https://github.com/akash-network/console/commit/f40732079f79c39cceb533c82ac6d48f058dd388))

## [2.60.0](https://github.com/akash-network/console/compare/console-web/v2.59.0...console-web/v2.60.0) (2025-03-18)


### Features

* **deployment:** limit number of deployments for trials ([#923](https://github.com/akash-network/console/issues/923)) ([d681d51](https://github.com/akash-network/console/commit/d681d51c02501f61b81742fb4fd36aea6f536cea)), closes [#827](https://github.com/akash-network/console/issues/827)

## [2.59.0](https://github.com/akash-network/console/compare/console-web/v2.58.0...console-web/v2.59.0) (2025-03-17)


### Features

* **analytics:** move lease created script ([#1051](https://github.com/akash-network/console/issues/1051)) ([65ac516](https://github.com/akash-network/console/commit/65ac5163e2760ca25e71a9c8f686313304774413))

## [2.58.0](https://github.com/akash-network/console/compare/console-web/v2.57.1...console-web/v2.58.0) (2025-03-17)


### Features

* **wallet:** improve coupon codes ux ([#1028](https://github.com/akash-network/console/issues/1028)) ([b4a81c7](https://github.com/akash-network/console/commit/b4a81c79b97213ae72d37efe4771129f5b69b5ef))


### Code Refactoring

* refactors queries and hooks to strict types ([#1044](https://github.com/akash-network/console/issues/1044)) ([6f520ba](https://github.com/akash-network/console/commit/6f520ba6e0fe4b38b39a61841141513b1c6c8980))

## [2.57.1](https://github.com/akash-network/console/compare/console-web/v2.57.0...console-web/v2.57.1) (2025-03-14)


### Bug Fixes

* **wallet:** fix fetching of authz ([#1017](https://github.com/akash-network/console/issues/1017)) ([37a0b2d](https://github.com/akash-network/console/commit/37a0b2d0f29ed11e4aa0b11c1d4fd919094373fb))
* **wallet:** fix top-up amount button spacing ([#964](https://github.com/akash-network/console/issues/964)) ([15ab5a2](https://github.com/akash-network/console/commit/15ab5a240db371ec19f16cd52a3723243c3a0ece)), closes [#668](https://github.com/akash-network/console/issues/668)

## [2.57.0](https://github.com/akash-network/console/compare/console-web/v2.56.0...console-web/v2.57.0) (2025-03-13)


### Features

* **analytics:** adds more user onboarding events ([4e87ad4](https://github.com/akash-network/console/commit/4e87ad445d6e233dc1986e757b850082f65c172d))


### Code Refactoring

* refactors part of deploy-web to strict typescript types ([#1003](https://github.com/akash-network/console/issues/1003)) ([6ac6bb2](https://github.com/akash-network/console/commit/6ac6bb2ba919c933b923d40c56ea26f9788caed7))
* refactors services in console-web to strict types ([#1004](https://github.com/akash-network/console/issues/1004)) ([fd85685](https://github.com/akash-network/console/commit/fd85685858b64ead49a946955fe8da48ea9cc49b))

## [2.56.0](https://github.com/akash-network/console/compare/console-web/v2.55.0...console-web/v2.56.0) (2025-03-13)


### Features

* **analytics:** add pixels scripts ([#1005](https://github.com/akash-network/console/issues/1005)) ([010210b](https://github.com/akash-network/console/commit/010210b957f9cc53d867f26b635a6a0993bf5da6))
* **deployment:** remove maintenance banner ([#1006](https://github.com/akash-network/console/issues/1006)) ([705952e](https://github.com/akash-network/console/commit/705952e5d5f29429e98399878b32b24f557b618e))

## [2.55.0](https://github.com/akash-network/console/compare/console-web/v2.54.0...console-web/v2.55.0) (2025-03-11)


### Features

* **deployment:** re-add banner vars ([#992](https://github.com/akash-network/console/issues/992)) ([8575352](https://github.com/akash-network/console/commit/85753529636e238323f542db1c068304b60406de))

## [2.54.0](https://github.com/akash-network/console/compare/console-web/v2.53.4...console-web/v2.54.0) (2025-03-11)


### Features

* **deployment:** add maintenant banner component ([#991](https://github.com/akash-network/console/issues/991)) ([d939e25](https://github.com/akash-network/console/commit/d939e25a9d03ad3876e6fdef624105a70a60c45d))


### Code Refactoring

* moves ProviderRawData and its unit tests under a single folder ([#978](https://github.com/akash-network/console/issues/978)) ([962fe7e](https://github.com/akash-network/console/commit/962fe7ea106ce9f62bb772358508d94cacb6fd38))

## [2.53.4](https://github.com/akash-network/console/compare/console-web/v2.53.3...console-web/v2.53.4) (2025-03-10)


### Bug Fixes

* **template:** eliminates eternal loop when query if failing  ([ca93b51](https://github.com/akash-network/console/commit/ca93b5123725394094aada5149811de548717d94))

## [2.53.3](https://github.com/akash-network/console/compare/console-web/v2.53.2...console-web/v2.53.3) (2025-03-10)


### Bug Fixes

* fix border clipping on EnvFormModal ([e8b2d5f](https://github.com/akash-network/console/commit/e8b2d5f90c16d25330995a07bec436968111b318))

## [2.53.2](https://github.com/akash-network/console/compare/console-web/v2.53.1...console-web/v2.53.2) (2025-03-07)


### Bug Fixes

* ensure that sdl is truthy before passing it to `importSimpleDSL` ([#960](https://github.com/akash-network/console/issues/960)) ([08a00cd](https://github.com/akash-network/console/commit/08a00cd204f67c469da0ee607542cf6bcf0106a9))

## [2.53.1](https://github.com/akash-network/console/compare/console-web/v2.53.0...console-web/v2.53.1) (2025-03-06)


### Bug Fixes

* handles case when service.uris is null ([#957](https://github.com/akash-network/console/issues/957)) ([82b43c5](https://github.com/akash-network/console/commit/82b43c58786bf31af94cd1c12c2ab572dede4fb5))
* renders turnstile only on client side ([#949](https://github.com/akash-network/console/issues/949)) ([d282d20](https://github.com/akash-network/console/commit/d282d20ae2cb5e78704190a5016081766467d6ff))

## [2.53.0](https://github.com/akash-network/console/compare/console-web/v2.52.0...console-web/v2.53.0) (2025-03-05)


### Features

* **certificate:** managed wallet api create certificates ([#903](https://github.com/akash-network/console/issues/903)) ([e00ef07](https://github.com/akash-network/console/commit/e00ef07444a9a8bce9c5c4d5749b4adff5e8903b))


### Bug Fixes

* ensure user has local certificate before checking lease status ([#943](https://github.com/akash-network/console/issues/943)) ([c53dfc1](https://github.com/akash-network/console/commit/c53dfc1006f2eb3ea30092efd05715f842090150))

## [2.52.0](https://github.com/akash-network/console/compare/console-web/v2.51.0...console-web/v2.52.0) (2025-03-04)


### Features

* displays first lease service uri on deployment list if deployment name is unknown and small UX improvements ([#924](https://github.com/akash-network/console/issues/924)) ([f3e9b8d](https://github.com/akash-network/console/commit/f3e9b8d96878fab4cc89c37a2ad7747ab844c1b1))


### Bug Fixes

* **template:** forces templates seo meta rendering on the backend ([cc674d8](https://github.com/akash-network/console/commit/cc674d807526fde167c9a768ec2cd5be7075a040)), closes [#786](https://github.com/akash-network/console/issues/786)


### Code Refactoring

* replaces TemplatesContext with direct usage of useTemplates on top of react-query ([#935](https://github.com/akash-network/console/issues/935)) ([ce5dc1e](https://github.com/akash-network/console/commit/ce5dc1e04737765f76b486356d77d9ddc3723317))

## [2.51.0](https://github.com/akash-network/console/compare/console-web/v2.50.0...console-web/v2.51.0) (2025-03-03)


### Features

* **analytics:** improves amplitude reporting ([c8399ae](https://github.com/akash-network/console/commit/c8399ae3a08d13de35679bd6e6acac49f504a66a))


### Bug Fixes

* **auth:** patches fetch to retry on cloudflare challenge ([c6f4c7d](https://github.com/akash-network/console/commit/c6f4c7d5f97e318cef77d232011dcee9b10f5aa8)), closes [#836](https://github.com/akash-network/console/issues/836)

## [2.50.0](https://github.com/akash-network/console/compare/console-web/v2.49.1...console-web/v2.50.0) (2025-02-24)


### Features

* **billing:** unify deployment modals ([#804](https://github.com/akash-network/console/issues/804)) ([03137c6](https://github.com/akash-network/console/commit/03137c68740b76a7ad162415425b566148dd7bd3)), closes [#628](https://github.com/akash-network/console/issues/628) [#628](https://github.com/akash-network/console/issues/628) [#628](https://github.com/akash-network/console/issues/628) [#628](https://github.com/akash-network/console/issues/628) [#628](https://github.com/akash-network/console/issues/628)


### Bug Fixes

* **provider:** render longer provider names, make them copiable ([#898](https://github.com/akash-network/console/issues/898)) ([64f8fa0](https://github.com/akash-network/console/commit/64f8fa02a5b98a75b08382db97c0534ed26ed959)), closes [#858](https://github.com/akash-network/console/issues/858) [#858](https://github.com/akash-network/console/issues/858)

## [2.49.1](https://github.com/akash-network/console/compare/console-web/v2.49.0...console-web/v2.49.1) (2025-02-21)


### Bug Fixes

* **deployment:** only enables auto top up if deposit is successful ([151b781](https://github.com/akash-network/console/commit/151b78178ff392fd2106e598bb01e481ddf8086d))

## [2.49.0](https://github.com/akash-network/console/compare/console-web/v2.48.0...console-web/v2.49.0) (2025-02-20)


### Features

* **users:** api keys UI ([#857](https://github.com/akash-network/console/issues/857)) ([32f9567](https://github.com/akash-network/console/commit/32f9567f05590c2d9bbd6445366570c474f8e063))

## [2.48.0](https://github.com/akash-network/console/compare/console-web/v2.47.0...console-web/v2.48.0) (2025-02-20)


### Features

* **deployment:** requires a deposit to maintain a deployment till the next auto top up ([e3ad957](https://github.com/akash-network/console/commit/e3ad9579d6336912b1e51ca8f983f64322571d2d)), closes [#714](https://github.com/akash-network/console/issues/714)


### Bug Fixes

* **sdl:** can use AMD GPUs  ([1569a35](https://github.com/akash-network/console/commit/1569a35fda166bab34d3ba5e41207acf2545ed80)), closes [#64](https://github.com/akash-network/console/issues/64)

## [2.47.0](https://github.com/akash-network/console/compare/console-web/v2.46.0...console-web/v2.47.0) (2025-02-19)


### Features

* **auth:** adds turnstile interceptor to all the services ([f4b517a](https://github.com/akash-network/console/commit/f4b517a35a1bf54ccad26304f37c5213d8635ab8))

## [2.46.0](https://github.com/akash-network/console/compare/console-web/v2.45.0...console-web/v2.46.0) (2025-02-19)


### Features

* **analytics:** integrates amplitude ([c88ff59](https://github.com/akash-network/console/commit/c88ff59c19c0096916afa3774b2d15a1bd30d3eb))

## [2.45.0](https://github.com/akash-network/console/compare/console-web/v2.44.0...console-web/v2.45.0) (2025-02-14)


### Features

* **user:** add user api keys schema + api ([2eac7e9](https://github.com/akash-network/console/commit/2eac7e97246f63570bdd7d9d9700438e99948c7f)), closes [#787](https://github.com/akash-network/console/issues/787)


### Bug Fixes

* **sdl:** break controls earlier so columns don't overlap  ([c9d3b45](https://github.com/akash-network/console/commit/c9d3b4528a7a1e864f98541d1a93fbf7622f7cde)), closes [#828](https://github.com/akash-network/console/issues/828)

## [2.44.0](https://github.com/akash-network/console/compare/console-web/v2.43.0...console-web/v2.44.0) (2025-02-10)


### Features

* **analytics:** lease conversion events ([76beedf](https://github.com/akash-network/console/commit/76beedf2cb17d94ca53df127a40f9cfabb852231)), closes [#817](https://github.com/akash-network/console/issues/817)

## [2.43.0](https://github.com/akash-network/console/compare/console-web/v2.42.1...console-web/v2.43.0) (2025-02-07)


### Features

* **deployment:** creates setting if not exists on get ([66cd74b](https://github.com/akash-network/console/commit/66cd74b039e6fab8c848a296047d1669b9c5a574)), closes [#714](https://github.com/akash-network/console/issues/714)


### Bug Fixes

* ensure that deployment details are not fetched unless node api endpoint is not empty ([#806](https://github.com/akash-network/console/issues/806)) ([8fc4523](https://github.com/akash-network/console/commit/8fc4523034e06036bddc75378d1503d7ba8ead64))

## [2.42.1](https://github.com/akash-network/console/compare/console-web/v2.42.0...console-web/v2.42.1) (2025-02-06)


### Bug Fixes

* **deployment:** adds usdc option to parse pricing amount ([0f38c18](https://github.com/akash-network/console/commit/0f38c18c521b2cc68fe79d3634623baea5a59f64)), closes [#714](https://github.com/akash-network/console/issues/714)

## [2.42.0](https://github.com/akash-network/console/compare/console-web/v2.41.0...console-web/v2.42.0) (2025-02-06)


### Features

* **deployment:** adds auto top feature flag ([da008e9](https://github.com/akash-network/console/commit/da008e9251a52bbd53a0cc10ac3e026ddd8652f1)), closes [#714](https://github.com/akash-network/console/issues/714)

## [2.41.0](https://github.com/akash-network/console/compare/console-web/v2.40.0...console-web/v2.41.0) (2025-02-06)


### Features

* adds certificate validation to ws proxy ([#780](https://github.com/akash-network/console/issues/780)) ([2d1cc3d](https://github.com/akash-network/console/commit/2d1cc3d7c39ec50ea3ca292d3d3bce47db3185ca)), closes [#170](https://github.com/akash-network/console/issues/170)
* **deployment:** add new badge ([dd338ee](https://github.com/akash-network/console/commit/dd338ee7b4e6378a5627d4ea16fdf14a056145c6)), closes [#796](https://github.com/akash-network/console/issues/796)

## [2.40.0](https://github.com/akash-network/console/compare/console-web/v2.39.0...console-web/v2.40.0) (2025-02-05)


### Features

* **deployment:** add help sidebar link ([54c501c](https://github.com/akash-network/console/commit/54c501c65276c621b7bf440d758a7c5a4ae3acb6)), closes [#788](https://github.com/akash-network/console/issues/788)

## [2.39.0](https://github.com/akash-network/console/compare/console-web/v2.38.0...console-web/v2.39.0) (2025-02-05)


### Features

* **deployment:** implements ui auto top up toggle ([f03df32](https://github.com/akash-network/console/commit/f03df324e1064f76b477cf888278eb4ad8f443cf)), closes [#714](https://github.com/akash-network/console/issues/714)

## [2.38.0](https://github.com/akash-network/console/compare/console-web/v2.37.1...console-web/v2.38.0) (2025-02-03)


### Features

* **deployment:** reworks top up deployments to rely on db setting ([2762b97](https://github.com/akash-network/console/commit/2762b97bbbb8d63566a258a683a5a0989f6885b4)), closes [#714](https://github.com/akash-network/console/issues/714)

## [2.37.1](https://github.com/akash-network/console/compare/console-web/v2.37.0...console-web/v2.37.1) (2025-01-31)


### Bug Fixes

* **dx:** fix e2e tests ([9ab53ef](https://github.com/akash-network/console/commit/9ab53eff42a43c4f02757b4b19aa5877f25c366e)), closes [#741](https://github.com/akash-network/console/issues/741)

## [2.37.0](https://github.com/akash-network/console/compare/console-web/v2.36.2...console-web/v2.37.0) (2025-01-30)


### Features

* **auth:** forwards cf cookies in proxy ([3711a9d](https://github.com/akash-network/console/commit/3711a9d3b780c2fb3215168cc017dd4794233faa))

## [2.36.2](https://github.com/akash-network/console/compare/console-web/v2.36.1...console-web/v2.36.2) (2025-01-29)


### Bug Fixes

* **auth:** simplifies turnstile widget error display ([198fe5d](https://github.com/akash-network/console/commit/198fe5d893e6e0d501707a61711f0f8215b1849f))

## [2.36.1](https://github.com/akash-network/console/compare/console-web/v2.36.0...console-web/v2.36.1) (2025-01-29)


### Bug Fixes

* **auth:** checks for cf error more generally ([1582ff8](https://github.com/akash-network/console/commit/1582ff81eff9fa0546c7c372d24a061756261840))

## [2.36.0](https://github.com/akash-network/console/compare/console-web/v2.35.0...console-web/v2.36.0) (2025-01-29)


### Features

* adjusts logic to send provider and chain details to provider proxy ([#742](https://github.com/akash-network/console/issues/742)) ([a5ca831](https://github.com/akash-network/console/commit/a5ca8313c9ef545336889d8a536e4cf92c537c61))

## [2.35.0](https://github.com/akash-network/console/compare/console-web/v2.34.0...console-web/v2.35.0) (2025-01-28)


### Features

* only shows turnstile widget when cf rejects ([#722](https://github.com/akash-network/console/issues/722)) ([0537f2c](https://github.com/akash-network/console/commit/0537f2cece2c9e1a95547f41ac5c802471342b94))


### Code Refactoring

* changes provider-proxy URL for console-web staging env ([#731](https://github.com/akash-network/console/issues/731)) ([e89994e](https://github.com/akash-network/console/commit/e89994e2f1c00780ba1f5d333eb87c600669ca80))

## [2.34.0](https://github.com/akash-network/console/compare/console-web/v2.33.1...console-web/v2.34.0) (2025-01-27)


### Features

* **deployment:** add deepseek showcase ([#724](https://github.com/akash-network/console/issues/724)) ([926cae8](https://github.com/akash-network/console/commit/926cae830314c35cff8b03dfa76bc6719ab9da00))

## [2.33.1](https://github.com/akash-network/console/compare/console-web/v2.33.0...console-web/v2.33.1) (2025-01-24)


### Bug Fixes

* **deployment:** fix deployment not found ([#709](https://github.com/akash-network/console/issues/709)) ([548e538](https://github.com/akash-network/console/commit/548e5387f2265290af872e35393b1f430737c9a3))

## [2.33.0](https://github.com/akash-network/console/compare/console-web/v2.32.0...console-web/v2.33.0) (2025-01-21)


### Features

* **auth:** implement verification email re-send and rework relevant UI ([#676](https://github.com/akash-network/console/issues/676)) ([c2de6a6](https://github.com/akash-network/console/commit/c2de6a6f92dbb44b1758836f2a42de8eb81f4c94)), closes [#663](https://github.com/akash-network/console/issues/663)

## [2.32.0](https://github.com/akash-network/console/compare/console-web/v2.31.0...console-web/v2.32.0) (2025-01-20)


### Features

* **stats:** shows ephemeral and persistent storage separately on pie chart ([#647](https://github.com/akash-network/console/issues/647)) ([7512198](https://github.com/akash-network/console/commit/75121983391db0b932b324656a939370c47827c7)), closes [#645](https://github.com/akash-network/console/issues/645) [#665](https://github.com/akash-network/console/issues/665)


### Bug Fixes

* **wallet:** crash when spend limit not set ([0280e58](https://github.com/akash-network/console/commit/0280e58e09427f115ea1a73b614388af075b20b1)), closes [#651](https://github.com/akash-network/console/issues/651)

## [2.31.0](https://github.com/akash-network/console/compare/console-web/v2.30.1...console-web/v2.31.0) (2025-01-17)


### Features

* **auth:** improve turnstile widget UX ([#666](https://github.com/akash-network/console/issues/666)) ([b42714e](https://github.com/akash-network/console/commit/b42714e77fc0feed65af6f959cd0dc27e750994a))

## [2.30.1](https://github.com/akash-network/console/compare/console-web/v2.30.0...console-web/v2.30.1) (2025-01-16)


### Bug Fixes

* **auth:** revert cf clearance cookie forwarding to api via auth proxy ([ac6aca5](https://github.com/akash-network/console/commit/ac6aca5752fd66d144fcb6c5eafbe69c6bc91401))

## [2.30.0](https://github.com/akash-network/console/compare/console-web/v2.29.2...console-web/v2.30.0) (2025-01-16)


### Features

* **auth:** forward cf clearance cookie to api via auth proxy ([bd81f2f](https://github.com/akash-network/console/commit/bd81f2f36c8f8f53e01d5dd4c879f99de1b9d151))

## [2.29.2](https://github.com/akash-network/console/compare/console-web/v2.29.1...console-web/v2.29.2) (2025-01-16)


### Code Refactoring

* **dx:** fix linting issues ([1115a60](https://github.com/akash-network/console/commit/1115a609ba6a080e4c91331f45fb0d12b48c5504))

## [2.29.1](https://github.com/akash-network/console/compare/console-web/v2.29.0...console-web/v2.29.1) (2025-01-16)


### Bug Fixes

* **auth:** ensure turnstile widget is only shown initially on when interactive ([71f7ea8](https://github.com/akash-network/console/commit/71f7ea8ae843bade1a8fb4bbe7f71cc0731cf42e)), closes [#627](https://github.com/akash-network/console/issues/627)

## [2.29.0](https://github.com/akash-network/console/compare/console-web/v2.28.3...console-web/v2.29.0) (2025-01-15)


### Features

* **auth:** add a turnstile widget ([d485fbb](https://github.com/akash-network/console/commit/d485fbbf292a8a671d478eb1f03cfc208cda5e6f)), closes [#627](https://github.com/akash-network/console/issues/627)

## [2.28.3](https://github.com/akash-network/console/compare/console-web/v2.28.2...console-web/v2.28.3) (2025-01-14)


### Bug Fixes

* **deployment:** provider label ([#632](https://github.com/akash-network/console/issues/632)) ([f96c570](https://github.com/akash-network/console/commit/f96c570cf31b4ab3cb6470dc1ad043a7173c3792))

## [2.28.2](https://github.com/akash-network/console/compare/console-web/v2.28.1...console-web/v2.28.2) (2025-01-08)


### Bug Fixes

* **deployment:** validate max deposit amount correctly ([44c0274](https://github.com/akash-network/console/commit/44c02745635510b8b5eb6bb4f9462b232543f393)), closes [#603](https://github.com/akash-network/console/issues/603)

## [2.28.1](https://github.com/akash-network/console/compare/console-web/v2.28.0...console-web/v2.28.1) (2025-01-02)


### Bug Fixes

* **user:** revoke stale users expired grants ([21cbfa6](https://github.com/akash-network/console/commit/21cbfa654d2a3effa11b8b83404158256142c1d5))

## [2.28.0](https://github.com/akash-network/console/compare/console-web/v2.27.10...console-web/v2.28.0) (2025-01-02)


### Features

* **user:** remove anonymous user from localstorage if it's removed ([36298ee](https://github.com/akash-network/console/commit/36298ee0ba4426d5fe2e70cf741b90e26773fc01))


### Bug Fixes

* **billing:** properly reference a var in balances hook ([ba53d6b](https://github.com/akash-network/console/commit/ba53d6b70341f0bb03aaa609a05b8a73931b5120))

## [2.27.10](https://github.com/akash-network/console/compare/console-web/v2.27.9...console-web/v2.27.10) (2024-12-30)


### Bug Fixes

* **billing:** fix usdc balance calculation ([18b6ef3](https://github.com/akash-network/console/commit/18b6ef3a0785f115651eec5afcbe25ab433af386))

## [2.27.9](https://github.com/akash-network/console/compare/console-web/v2.27.8...console-web/v2.27.9) (2024-12-30)


### Bug Fixes

* **billing:** properly check fee grant before tx ([b721141](https://github.com/akash-network/console/commit/b72114172847514cbccbd831db3503d20f533aed))

## [2.27.8](https://github.com/akash-network/console/compare/console-web/v2.27.7...console-web/v2.27.8) (2024-12-30)


### Bug Fixes

* **billing:** disable grantee grants query for managed deployments deposit modal ([91bf940](https://github.com/akash-network/console/commit/91bf9401bf8d9558465f009a0c01b39afef6a349))

## [2.27.7](https://github.com/akash-network/console/compare/console-web/v2.27.6...console-web/v2.27.7) (2024-12-30)


### Bug Fixes

* **billing:** enable balances fetching back ([eaa42a5](https://github.com/akash-network/console/commit/eaa42a5ecd04db87bcbd5f4d9ac75771f4e20244))

## [2.27.6](https://github.com/akash-network/console/compare/console-web/v2.27.5...console-web/v2.27.6) (2024-12-30)


### Bug Fixes

* **billing:** use specific endpoint to check managed wallet grants ([d87d79f](https://github.com/akash-network/console/commit/d87d79fbe29350c57c625e61e7f9805c5dc0b6ea))

## [2.27.5](https://github.com/akash-network/console/compare/console-web/v2.27.4...console-web/v2.27.5) (2024-12-27)


### Bug Fixes

* make sure to deposit with 0 balance ([8246395](https://github.com/akash-network/console/commit/8246395ba15e622ba5c82824548e18b16ffc0101))

## [2.27.4](https://github.com/akash-network/console/compare/console-web/v2.27.3...console-web/v2.27.4) (2024-12-27)


### Bug Fixes

* make sure to deposit with 0 balance ([c166b0e](https://github.com/akash-network/console/commit/c166b0e5a76f7099160cde6dfbe449e0ff266058))

## [2.27.3](https://github.com/akash-network/console/compare/console-web/v2.27.2...console-web/v2.27.3) (2024-12-27)


### Bug Fixes

* update balance warning ([ec004a7](https://github.com/akash-network/console/commit/ec004a78631cc32bc281b50d1af3c0225faf2f19))

## [2.27.2](https://github.com/akash-network/console/compare/console-web/v2.27.0...console-web/v2.27.2) (2024-12-27)


### Bug Fixes

* disable grantee grants temporarily ([1a992c1](https://github.com/akash-network/console/commit/1a992c1031ca8b17d6c0c613d9eba4286e54175b))
* update package version ([a873df7](https://github.com/akash-network/console/commit/a873df7dcc77b57c065ac1bb5783603e921bf673))

## [2.27.1](https://github.com/akash-network/console/compare/console-web/v2.27.0...console-web/v2.27.1) (2024-12-27)


### Bug Fixes

* disable grantee grants temporarily ([1a992c1](https://github.com/akash-network/console/commit/1a992c1031ca8b17d6c0c613d9eba4286e54175b))

## [2.27.0](https://github.com/akash-network/console/compare/console-web/v2.26.0...console-web/v2.27.0) (2024-12-19)


### Features

* **billing:** resolve with valid only grants and allowances from http service ([77a0ffc](https://github.com/akash-network/console/commit/77a0ffcfe0ce912814d3e3803af6b1ac803cde71))

## [2.26.0](https://github.com/akash-network/console/compare/console-web/v2.25.4...console-web/v2.26.0) (2024-12-18)


### Features

* **wallet:** save selected wallet type local storage ([9d1c5b5](https://github.com/akash-network/console/commit/9d1c5b5a444633012cdda800a55b4ff904b6ee58)), closes [#570](https://github.com/akash-network/console/issues/570)

## [2.25.4](https://github.com/akash-network/console/compare/console-web/v2.25.4-beta.0...console-web/v2.25.4) (2024-12-10)

## [2.25.4-beta.0](https://github.com/akash-network/console/compare/console-web/v2.25.3...console-web/v2.25.4-beta.0) (2024-12-10)


### Bug Fixes

* **billing:** check for email verified to add funds ([e1cfa10](https://github.com/akash-network/console/commit/e1cfa10835ad29938f12812f8b28d582213850ec)), closes [#535](https://github.com/akash-network/console/issues/535)

## [2.25.3](https://github.com/akash-network/console/compare/console-web/v2.25.3-beta.1...console-web/v2.25.3) (2024-12-05)

## [2.25.3-beta.1](https://github.com/akash-network/console/compare/console-web/v2.25.3-beta.0...console-web/v2.25.3-beta.1) (2024-12-05)


### Bug Fixes

* **config:** increase nginx large header buffer limit ([#526](https://github.com/akash-network/console/issues/526)) ([192b9a2](https://github.com/akash-network/console/commit/192b9a27d1f43f88762cca625ff19460281a9995))

## [2.25.3-beta.0](https://github.com/akash-network/console/compare/console-web/v2.25.2...console-web/v2.25.3-beta.0) (2024-12-05)


### Bug Fixes

* **billing:** mobile banner styling ([566d941](https://github.com/akash-network/console/commit/566d9416149698d195e2463f32903496ff497a22)), closes [#525](https://github.com/akash-network/console/issues/525)

## [2.25.2](https://github.com/akash-network/console/compare/console-web/v2.25.2-beta.0...console-web/v2.25.2) (2024-12-04)

## [2.25.2-beta.0](https://github.com/akash-network/console/compare/console-web/v2.25.1...console-web/v2.25.2-beta.0) (2024-12-04)


### Bug Fixes

* **billing:** banner light mode styling ([a5aa61b](https://github.com/akash-network/console/commit/a5aa61bff15bfbb4f2e4bdf7664f983f79b10f3a)), closes [#520](https://github.com/akash-network/console/issues/520)

## [2.25.1](https://github.com/akash-network/console/compare/console-web/v2.25.1-beta.2...console-web/v2.25.1) (2024-12-04)

## [2.25.1-beta.2](https://github.com/akash-network/console/compare/console-web/v2.25.1-beta.1...console-web/v2.25.1-beta.2) (2024-12-04)

## [2.25.1-beta.1](https://github.com/akash-network/console/compare/console-web/v2.25.1-beta.0...console-web/v2.25.1-beta.1) (2024-12-03)


### Bug Fixes

* ensure proper schema type on server props getter ([aedf03d](https://github.com/akash-network/console/commit/aedf03d837fd6b2ebd6e76b32a694e043053a441))

## [2.25.1-beta.0](https://github.com/akash-network/console/compare/console-web/v2.25.0...console-web/v2.25.1-beta.0) (2024-11-28)


### Bug Fixes

* **observability:** ensure pino-pretty works in built app ([7f6f9ca](https://github.com/akash-network/console/commit/7f6f9ca7ca4e1ff4bc3b85735270f61cc8120242)), closes [#474](https://github.com/akash-network/console/issues/474)

## [2.25.0](https://github.com/akash-network/console/compare/console-web/v2.25.0-beta.1...console-web/v2.25.0) (2024-11-26)

## [2.25.0-beta.1](https://github.com/akash-network/console/compare/console-web/v2.25.0-beta.0...console-web/v2.25.0-beta.1) (2024-11-26)


### Features

* **deployment:** implement ato top up setting ([1301314](https://github.com/akash-network/console/commit/130131485a68f699587415f96283e0dc83072502)), closes [#412](https://github.com/akash-network/console/issues/412)


### Bug Fixes

* **billing:** ensure checkout pricing is displayed correctly ([3bcb4a8](https://github.com/akash-network/console/commit/3bcb4a881e3bb58e741de8bb8a0a661dede0d8ae))

## [2.25.0-beta.0](https://github.com/akash-network/console/compare/console-web/v2.24.1...console-web/v2.25.0-beta.0) (2024-11-23)


### Features

* **provider:** new provider trial endpoint ([2712e38](https://github.com/akash-network/console/commit/2712e380b8f5af0930abbdf9347a1dee3eb75f8a)), closes [#488](https://github.com/akash-network/console/issues/488)

## [2.24.1](https://github.com/akash-network/console/compare/console-web/v2.24.1-beta.2...console-web/v2.24.1) (2024-11-23)

## [2.24.1-beta.2](https://github.com/akash-network/console/compare/console-web/v2.24.1-beta.1...console-web/v2.24.1-beta.2) (2024-11-21)


### Bug Fixes

* **deployment:** latest processed height deployment stale ([8d8384f](https://github.com/akash-network/console/commit/8d8384f519ae958e324a81fbf5a2ae00383bddc3)), closes [#491](https://github.com/akash-network/console/issues/491)

## [2.24.1-beta.1](https://github.com/akash-network/console/compare/console-web/v2.24.1-beta.0...console-web/v2.24.1-beta.1) (2024-11-21)


### Bug Fixes

* **deployment:** git template fetch in deploy ([094aaf4](https://github.com/akash-network/console/commit/094aaf48b7b00ed4af3299fac0fb584a09e12866)), closes [#489](https://github.com/akash-network/console/issues/489)

## [2.24.1-beta.0](https://github.com/akash-network/console/compare/console-web/v2.24.0...console-web/v2.24.1-beta.0) (2024-11-21)


### Bug Fixes

* **billing:** only show pricing options when available ([6e31276](https://github.com/akash-network/console/commit/6e31276d4fcb56d9a74d7b1b04226a80a5795bec))

## [2.24.0](https://github.com/akash-network/console/compare/console-web/v2.24.0-beta.0...console-web/v2.24.0) (2024-11-21)

## [2.24.0-beta.0](https://github.com/akash-network/console/compare/console-web/v2.23.0...console-web/v2.24.0-beta.0) (2024-11-21)


### Features

* **billing:** enable checkout options with promo codes ([0cb439d](https://github.com/akash-network/console/commit/0cb439dcf4ca21974d7dacd784570cd032ee9f7b))

## [2.23.0](https://github.com/akash-network/console/compare/console-web/v2.23.0-beta.3...console-web/v2.23.0) (2024-11-19)

## [2.23.0-beta.3](https://github.com/akash-network/console/compare/console-web/v2.23.0-beta.2...console-web/v2.23.0-beta.3) (2024-11-19)


### Features

* **sdl:** sdl builder private containers ([95a6e2b](https://github.com/akash-network/console/commit/95a6e2b11353b1c07a23f763ef9c9216855025b1)), closes [#479](https://github.com/akash-network/console/issues/479)

## [2.23.0-beta.2](https://github.com/akash-network/console/compare/console-web/v2.23.0-beta.1...console-web/v2.23.0-beta.2) (2024-11-19)


### Bug Fixes

* **deployment:** managed wallet user template ([ab83f2f](https://github.com/akash-network/console/commit/ab83f2f699e84b3a4f90739d2d003a9f8e9d27aa)), closes [#483](https://github.com/akash-network/console/issues/483)

## [2.23.0-beta.1](https://github.com/akash-network/console/compare/console-web/v2.23.0-beta.0...console-web/v2.23.0-beta.1) (2024-11-19)


### Features

* **analytics:** add user analytics and refactor analytic related logic ([552cd82](https://github.com/akash-network/console/commit/552cd8244634bf1de49875ce0d9b7490466ae5b0))

## [2.23.0-beta.0](https://github.com/akash-network/console/compare/console-web/v2.22.1...console-web/v2.23.0-beta.0) (2024-11-18)


### Features

* **deployment:** implement concurrency option for stale deployments cleaner ([54cae5d](https://github.com/akash-network/console/commit/54cae5d0f3c37dd6fe6623bcc249379f99cad247))

## [2.22.1](https://github.com/akash-network/console/compare/console-web/v2.22.1-beta.0...console-web/v2.22.1) (2024-11-14)

## [2.22.1-beta.0](https://github.com/akash-network/console/compare/console-web/v2.22.0...console-web/v2.22.1-beta.0) (2024-11-14)


### Bug Fixes

* **wallet:** wallet connect managed to custodial ([037f3f6](https://github.com/akash-network/console/commit/037f3f689a6d7c86ef282771366e481eb6532ba7)), closes [#469](https://github.com/akash-network/console/issues/469)

## [2.22.0](https://github.com/akash-network/console/compare/console-web/v2.22.0-beta.0...console-web/v2.22.0) (2024-11-12)

## [2.22.0-beta.0](https://github.com/akash-network/console/compare/console-web/v2.21.1-beta.1...console-web/v2.22.0-beta.0) (2024-11-12)


### Features

* **deployment:** implement top up message sending ([f5d7233](https://github.com/akash-network/console/commit/f5d7233c6ce1e7fc880e817e7d8ff66967b8a547)), closes [#395](https://github.com/akash-network/console/issues/395)

## [2.21.1-beta.1](https://github.com/akash-network/console/compare/console-web/v2.21.1-beta.0...console-web/v2.21.1-beta.1) (2024-11-11)


### Bug Fixes

* **deployment:** trial provider attributes ([6f5c94d](https://github.com/akash-network/console/commit/6f5c94d41879a8d23ed129857f5d28285d4f9ee9)), closes [#453](https://github.com/akash-network/console/issues/453)

## [2.21.1-beta.0](https://github.com/akash-network/console/compare/console-web/v2.21.0...console-web/v2.21.1-beta.0) (2024-11-08)


### Bug Fixes

* **auth:** fix logout button not logging out completely ([#446](https://github.com/akash-network/console/issues/446)) ([96f45dd](https://github.com/akash-network/console/commit/96f45dd617ef32fe813de03026c9370498099f34))

## [2.21.0](https://github.com/akash-network/console/compare/console-web/v2.21.0-beta.2...console-web/v2.21.0) (2024-11-08)

## [2.21.0-beta.2](https://github.com/akash-network/console/compare/console-web/v2.21.0-beta.1...console-web/v2.21.0-beta.2) (2024-11-08)


### Features

* **deployment:** implement clean up of managed deployments ([882fac4](https://github.com/akash-network/console/commit/882fac457f91d968bd9ecd3129c9a2113c3dd0bf)), closes [#395](https://github.com/akash-network/console/issues/395)

## [2.21.0-beta.1](https://github.com/akash-network/console/compare/console-web/v2.21.0-beta.0...console-web/v2.21.0-beta.1) (2024-11-07)


### Features

* **deployment:** improve new deployment page ([3ffc38b](https://github.com/akash-network/console/commit/3ffc38b2e942f11fc1ab11624aaa653745de6637)), closes [#444](https://github.com/akash-network/console/issues/444)

## [2.21.0-beta.0](https://github.com/akash-network/console/compare/console-web/v2.20.3...console-web/v2.21.0-beta.0) (2024-11-04)


### Features

* **deployment:** enable deployment from git repositories ([dfbaeb7](https://github.com/akash-network/console/commit/dfbaeb78843341633025a0812a2fdb021de12c70)), closes [#417](https://github.com/akash-network/console/issues/417)


### Bug Fixes

* **wallet:** init nextPageKey with null when paginating grants ([2698b14](https://github.com/akash-network/console/commit/2698b14fc9ade6eab56e189daab753372677b9de))

## [2.20.3](https://github.com/akash-network/console/compare/console-web/v2.20.3-beta.0...console-web/v2.20.3) (2024-10-30)

## [2.20.3-beta.0](https://github.com/akash-network/console/compare/console-web/v2.20.2...console-web/v2.20.3-beta.0) (2024-10-30)


### Bug Fixes

* **network:** safely parse initial selected network ([8f0e2de](https://github.com/akash-network/console/commit/8f0e2de54b64469bfbb9e169030435c04060739b))

## [2.20.2](https://github.com/akash-network/console/compare/console-web/v2.20.2-beta.1...console-web/v2.20.2) (2024-10-30)

## [2.20.2-beta.1](https://github.com/akash-network/console/compare/console-web/v2.20.2-beta.0...console-web/v2.20.2-beta.1) (2024-10-30)


### Bug Fixes

* improve perf ([d9de0eb](https://github.com/akash-network/console/commit/d9de0eba93d0c4ee4d7e051f98843578ba30a258)), closes [#427](https://github.com/akash-network/console/issues/427)

## [2.20.2-beta.0](https://github.com/akash-network/console/compare/console-web/v2.20.1...console-web/v2.20.2-beta.0) (2024-10-29)


### Bug Fixes

* **wallet:** ensure proper network and manage wallet switch ([39ee991](https://github.com/akash-network/console/commit/39ee991731145c3d3d8b3a6cb0ef37fe453b0d29))

## [2.20.1](https://github.com/akash-network/console/compare/console-web/v2.20.1-beta.0...console-web/v2.20.1) (2024-10-26)

## [2.20.1-beta.0](https://github.com/akash-network/console/compare/console-web/v2.20.0...console-web/v2.20.1-beta.0) (2024-10-26)


### Bug Fixes

* **styling:** fix typo on homepage ([#420](https://github.com/akash-network/console/issues/420)) ([938f6b7](https://github.com/akash-network/console/commit/938f6b7fcbe1a990cb6911a83000243ca6bb835c))

## [2.20.0](https://github.com/akash-network/console/compare/console-web/v2.20.0-beta.0...console-web/v2.20.0) (2024-10-23)

## [2.20.0-beta.0](https://github.com/akash-network/console/compare/console-web/v2.19.1-beta.0...console-web/v2.20.0-beta.0) (2024-10-23)


### Features

* **deployment:** add new endpoint to query filtered bids for trial accounts ([3d95615](https://github.com/akash-network/console/commit/3d95615a067b50a4c468e25535089ef9ca0a058c))
* **deployment:** refactor trial providers to config file ([b18a57a](https://github.com/akash-network/console/commit/b18a57aaf01392fb62ee6b2801d022ac3e4e8958))


### Bug Fixes

* **deployment:** added provider validation for trial ([ae03311](https://github.com/akash-network/console/commit/ae03311c5189d3569cad3ae45c662069c2e1eaaa))
* **styling:** remove beta logo ([b052151](https://github.com/akash-network/console/commit/b0521518709e2487208dd83256b4c630a1c7ac29))
* **wallet:** fix your account usdc display ([1dedde4](https://github.com/akash-network/console/commit/1dedde4078cc64ac9443ad458a2058f364d9e48a))

## [2.19.1-beta.0](https://github.com/akash-network/console/compare/console-web/v2.19.0...console-web/v2.19.1-beta.0) (2024-10-18)


### Bug Fixes

* **wallet:** authz pagination ([6193df5](https://github.com/akash-network/console/commit/6193df5f0820f67095ed9fe9280654b278f398a1)), closes [#415](https://github.com/akash-network/console/issues/415)

## [2.19.0](https://github.com/akash-network/console/compare/console-web/v2.19.0-beta.1...console-web/v2.19.0) (2024-10-17)

## [2.19.0-beta.1](https://github.com/akash-network/console/compare/console-web/v2.19.0-beta.0...console-web/v2.19.0-beta.1) (2024-10-17)


### Features

* **billing:** update master wallet and enable billing for prod ([90e0235](https://github.com/akash-network/console/commit/90e023594e6135d0e99f4b734c7e3706159d0fb4))

## [2.19.0-beta.0](https://github.com/akash-network/console/compare/console-web/v2.17.0...console-web/v2.19.0-beta.0) (2024-10-17)


### Features

* **wallet:** improve fiat payments ux ([295e085](https://github.com/akash-network/console/commit/295e08542deb57634de624c5815e1e7127333a16)), closes [#411](https://github.com/akash-network/console/issues/411)

## [2.17.0](https://github.com/akash-network/console/compare/console-web/v2.17.0-beta.0...console-web/v2.17.0) (2024-10-14)

## 2.17.0-beta.0 (2024-10-14)


### Features

* add beta env ([#326](https://github.com/akash-network/console/issues/326)) ([855ff4b](https://github.com/akash-network/console/commit/855ff4b084a68d6042fcb3cd181fc91abe998520))
* **auth:** implement anonymous user authentication ([fa9de2f](https://github.com/akash-network/console/commit/fa9de2f0d0f8d0a0c483f07856cebdb58d8f5344)), closes [#247](https://github.com/akash-network/console/issues/247)
* **auth:** implements basic anonymous user auth ([ca816f5](https://github.com/akash-network/console/commit/ca816f5e4136c1b4e515c73b249e10d0dc0964e3)), closes [#247](https://github.com/akash-network/console/issues/247)
* **billing:** add wallet trialing flag ([e9cc512](https://github.com/akash-network/console/commit/e9cc5125d7bf9b8853ea48f6e8ded87fd490d24a)), closes [#247](https://github.com/akash-network/console/issues/247)
* **billing:** adjust migrations and env for deployment ([45656d7](https://github.com/akash-network/console/commit/45656d7848ac0fdd5689b46a32221d48a7b32469)), closes [#247](https://github.com/akash-network/console/issues/247)
* **billing:** adjust some UI features for managed wallet users ([6af49da](https://github.com/akash-network/console/commit/6af49daa796856b363284431721799755dda54a3)), closes [#247](https://github.com/akash-network/console/issues/247)
* **billing:** change managed wallet button copy and style ([0fa46ac](https://github.com/akash-network/console/commit/0fa46ac017fd7835b4b5695d5489701a3d7693ef)), closes [#247](https://github.com/akash-network/console/issues/247)
* **billing:** ensure master wallet sequence is correct ([8372f38](https://github.com/akash-network/console/commit/8372f387718dec9a8fed81e4048690c46f7e8b10)), closes [#247](https://github.com/akash-network/console/issues/247)
* **billing:** handle tx errors ([3430a08](https://github.com/akash-network/console/commit/3430a089629e40019b90fa712d668279b9774982)), closes [#340](https://github.com/akash-network/console/issues/340) [#247](https://github.com/akash-network/console/issues/247)
* **billing:** implement balance refresh ([9d54f44](https://github.com/akash-network/console/commit/9d54f44c4024457b5bc339b6c32c67b3f3d37486)), closes [#247](https://github.com/akash-network/console/issues/247)
* **billing:** implement balance wallets refill ([fa1f252](https://github.com/akash-network/console/commit/fa1f252468bd30106a67be2fb011870d5e5e6c8d)), closes [#247](https://github.com/akash-network/console/issues/247)
* **billing:** implement managed wallet ([164d86b](https://github.com/akash-network/console/commit/164d86b56cb48d9ebb7b7102743d3c3fd363e6f6)), closes [#247](https://github.com/akash-network/console/issues/247)
* **billing:** implement managed wallet top up ([04f5aad](https://github.com/akash-network/console/commit/04f5aad51079bea8c8d58c2147c78598b5bb409d)), closes [#247](https://github.com/akash-network/console/issues/247)
* **billing:** implement managed wallet top up 1 ([bd4c06b](https://github.com/akash-network/console/commit/bd4c06bd49cc1c16380997b4af0185360ffd5f0b)), closes [#247](https://github.com/akash-network/console/issues/247)
* **billing:** implement wallet type switch ([155113c](https://github.com/akash-network/console/commit/155113c0aee2913d2cf4da839126a4a10768de05)), closes [#247](https://github.com/akash-network/console/issues/247)
* **billing:** remove some UI features for managed wallet users ([f021f07](https://github.com/akash-network/console/commit/f021f07458dd488f02ae37b6952b984fd70f1b71)), closes [#247](https://github.com/akash-network/console/issues/247)
* **billing:** update transactional messages for managed wallet ([efc0508](https://github.com/akash-network/console/commit/efc050860cc459625259be7ac041e15ce49dcfc1)), closes [#247](https://github.com/akash-network/console/issues/247)
* **console:** add all leap wallets ([#346](https://github.com/akash-network/console/issues/346)) ([f00c367](https://github.com/akash-network/console/commit/f00c3679ef997e5133dcdc46550deb2bcea81dd1))
* **console:** Add config from awesome akash for SSH toggle ([#301](https://github.com/akash-network/console/issues/301)) ([8765a4f](https://github.com/akash-network/console/commit/8765a4fe5123c868bacfa9c59cd0b6209a85224e))
* **console:** add llama 3.1 405 to staff picks ([#339](https://github.com/akash-network/console/issues/339)) ([6ad71ce](https://github.com/akash-network/console/commit/6ad71ce5e2f5339c6d791cf6759910a94ffeea83))
* **console:** add metamask ([#334](https://github.com/akash-network/console/issues/334)) ([bc68df8](https://github.com/akash-network/console/commit/bc68df8fe87c310f406663a73444f918d272422b))
* **console:** add rehypraw to display html for awesome akash templates ([#319](https://github.com/akash-network/console/issues/319)) ([0014109](https://github.com/akash-network/console/commit/00141098408668a542d65b77cf6084de9070ee7c))
* **console:** added application key to filter out third party exceptions ([#372](https://github.com/akash-network/console/issues/372)) ([d01b8d5](https://github.com/akash-network/console/commit/d01b8d5992ee12958562e73c7f06a333879e05ac))
* **console:** balance authz deployments ([#359](https://github.com/akash-network/console/issues/359)) ([abdb18a](https://github.com/akash-network/console/commit/abdb18a42af81e7e1724b7afbe8eb2b898b47f41))
* **console:** managed wallets popup confirmation ([#342](https://github.com/akash-network/console/issues/342)) ([c7d16d6](https://github.com/akash-network/console/commit/c7d16d6a0d942cef8e64c6978d9ff565a0336c0d))
* **console:** revoke all authz ([#308](https://github.com/akash-network/console/issues/308)) ([eb89ae0](https://github.com/akash-network/console/commit/eb89ae0bec1a50976389f05a172e3b451dff0029))
* **deploy-web:** improve provider detail uptime styling ([#221](https://github.com/akash-network/console/issues/221)) ([db1ee83](https://github.com/akash-network/console/commit/db1ee83a1ce3507b28d23312483b1978684f1874))
* **deploy-web:** show connect btn in authorization page if not connected ([1bb8618](https://github.com/akash-network/console/commit/1bb86187db8bdba578c567144ac9fb4650679c12))
* **deployment:** ensure usd values in deployments for managed wallets ([d1303d0](https://github.com/akash-network/console/commit/d1303d0bd6bc8917dec39fedb74fe46306cb2949)), closes [#247](https://github.com/akash-network/console/issues/247)
* **deployment:** ensure user can re-send manifest ([27e1289](https://github.com/akash-network/console/commit/27e12898755b720a0d5045225429e1e0c9bcb850))
* **deployment:** implement deployment deposit top up via managed wallet ([baa36d3](https://github.com/akash-network/console/commit/baa36d3b039c899fde0700bf3b1ae3c08209aa07)), closes [#247](https://github.com/akash-network/console/issues/247)
* **deployment:** implement plain linux deployment page ([6da5565](https://github.com/akash-network/console/commit/6da5565c049ab9f9debace6e42ec976347b6b3a0)), closes [#227](https://github.com/akash-network/console/issues/227)
* **deployment:** update ssh images ([6dbba51](https://github.com/akash-network/console/commit/6dbba511b3a0d10a148ddd71f0ccef97943cca79))
* **env:** implement unified file loading in console-web ([12f282a](https://github.com/akash-network/console/commit/12f282aa2798d9597a9f950520fb19d174cb635e)), closes [#313](https://github.com/akash-network/console/issues/313)
* **env:** unify app configs for api and indexer, update doc ([f3f7df4](https://github.com/akash-network/console/commit/f3f7df486e0feabdd672e3d7776c7dab49cde90d)), closes [#313](https://github.com/akash-network/console/issues/313)
* extract custom components ([#256](https://github.com/akash-network/console/issues/256)) ([2d3e889](https://github.com/akash-network/console/commit/2d3e8898f5d6e081f49da3ae5892023317f0b6e7))
* extract UI components shadcn ([#239](https://github.com/akash-network/console/issues/239)) ([f2da963](https://github.com/akash-network/console/commit/f2da963b4b56e6e006959216f35ca8cd7a4fb4f6))
* finish console rebrand ([#259](https://github.com/akash-network/console/issues/259)) ([ae272e8](https://github.com/akash-network/console/commit/ae272e81dc5bcadf6f8c8114514f2fee30d6e135))
* implement npm workspaces  ([#208](https://github.com/akash-network/console/issues/208)) ([c403dc1](https://github.com/akash-network/console/commit/c403dc155b9b213f5ba043d92ee1967e0b133fe3))
* improve provider leases graph ([#246](https://github.com/akash-network/console/issues/246)) ([f5fe74e](https://github.com/akash-network/console/commit/f5fe74e15d6b3d7fbccb28de141451ced5336823))
* merge "Upload SDL" to "Build your template" and add "Plain Linux" template ([#244](https://github.com/akash-network/console/issues/244)) ([0edf499](https://github.com/akash-network/console/commit/0edf4992b6e01f6243ab226f2666ec4e05c312e4))
* **network:** extract network store into a package ([608a16d](https://github.com/akash-network/console/commit/608a16dfd12e5beca628e3169a8fc6ea1c5d12c2))
* **network:** stick to a certain network for managed wallets ([652648a](https://github.com/akash-network/console/commit/652648ab7a765ff0ebe996aadf1680bab1ac7920)), closes [#247](https://github.com/akash-network/console/issues/247)
* **release:** implement release with image build ([a9fa7e8](https://github.com/akash-network/console/commit/a9fa7e80b373af4ca90438292f582e661680fb2d))
* **sdl:** add ssh to main builder ([868df46](https://github.com/akash-network/console/commit/868df46ab28f0a649bda48acf9b0adca995c2075)), closes [#227](https://github.com/akash-network/console/issues/227)
* **setting:** only show setting page for a connected user wallet ([66cadb0](https://github.com/akash-network/console/commit/66cadb0c7aa1bb37397a26ef4be37c52396aa735)), closes [#247](https://github.com/akash-network/console/issues/247)
* shared packages ([#237](https://github.com/akash-network/console/issues/237)) ([bd79006](https://github.com/akash-network/console/commit/bd79006abff3ee2d06657269ddd0e76d1554f275))
* templates logo url ([#315](https://github.com/akash-network/console/issues/315)) ([fd92d15](https://github.com/akash-network/console/commit/fd92d157884eab79e6dea7c248957fa1d61a58b3))
* **user:** implement anonymous user registration ([b58d74a](https://github.com/akash-network/console/commit/b58d74a8ba0412f1ff8eeeaecafa1a2369723cbf)), closes [#247](https://github.com/akash-network/console/issues/247)
* **wallet:** add fee granter to transaction signer ([2a06cc6](https://github.com/akash-network/console/commit/2a06cc64e831bb69763f7f32319f91982e64e09b)), closes [#219](https://github.com/akash-network/console/issues/219)
* **wallet:** ensure proper denom for a managed wallet ([2dbf6b1](https://github.com/akash-network/console/commit/2dbf6b15207530425415095c9cdb97429cadb32e)), closes [#247](https://github.com/akash-network/console/issues/247)
* **wallet:** implement fee granter as a global setting ([9fa3060](https://github.com/akash-network/console/commit/9fa3060098898115182f10916123abbf7768c34d)), closes [#219](https://github.com/akash-network/console/issues/219)
* **wallet:** update copy and remove allowance notifications ([022b219](https://github.com/akash-network/console/commit/022b2194102f6d969ccfadb38c99d0a0606530fa)), closes [#247](https://github.com/akash-network/console/issues/247)


### Bug Fixes

* **auth:** avoid fetching profile via proxy ([ffce24e](https://github.com/akash-network/console/commit/ffce24e64ea4e89423634ece4cdb047aeee21d92))
* **auth:** properly authenticate new endpoints ([ce241e1](https://github.com/akash-network/console/commit/ce241e1a7edb079e014f2d95bab1ce1902b94656)), closes [#247](https://github.com/akash-network/console/issues/247)
* **certificate:** certificates pagination bug ([#384](https://github.com/akash-network/console/issues/384)) ([a068b15](https://github.com/akash-network/console/commit/a068b15024f0d1f0b45526eda5ecc83763b95625))
* console your account ([#328](https://github.com/akash-network/console/issues/328)) ([f26958b](https://github.com/akash-network/console/commit/f26958b0cfacd5b39829fc43236ae064dae7d44b))
* **console:** add null check for user in sign and broadcast ([#304](https://github.com/akash-network/console/issues/304)) ([8eae178](https://github.com/akash-network/console/commit/8eae17825dc401c3776be492ca853e27b7e6a934))
* **console:** default uakt 10000 ([#324](https://github.com/akash-network/console/issues/324)) ([7b5f258](https://github.com/akash-network/console/commit/7b5f25899cb0f44f09878673d5c48db23c143b8e))
* **console:** managed wallet manifest fix error ([#351](https://github.com/akash-network/console/issues/351)) ([69880b0](https://github.com/akash-network/console/commit/69880b0390dfc632b55fe56e9db27cd0bd8db8d6))
* **console:** refactor useAllowance hook ([#336](https://github.com/akash-network/console/issues/336)) ([269d227](https://github.com/akash-network/console/commit/269d22709a485bb0b1bec8f34e8a66a2c3625480))
* **console:** return 404 when template is not found ([6c6e0a9](https://github.com/akash-network/console/commit/6c6e0a9585037934e12ecd47ce579e84e902152d))
* **console:** update CustomGoogleAnalytics.tsx ([#290](https://github.com/akash-network/console/issues/290)) ([48d855b](https://github.com/akash-network/console/commit/48d855b30af3bca7baf90303f6839b241d27508e))
* **deploy-web:** fix provider uptime sorting during ssr ([3ece973](https://github.com/akash-network/console/commit/3ece9735e5c7f69f58aa5ad56b58b34d7a82c52e))
* **deploy-web:** fix spacing for uptime ([#222](https://github.com/akash-network/console/issues/222)) ([3f7193a](https://github.com/akash-network/console/commit/3f7193ab053e4f008cd661ae5a869fe92e475615))
* **deploy-web:** fixed error handling for transaction page ([#213](https://github.com/akash-network/console/issues/213)) ([a006e03](https://github.com/akash-network/console/commit/a006e03ad7a18679eee1d0870dec724f3a632d84))
* **deploy-web:** handle sdl parsing error in sdl builder ([#228](https://github.com/akash-network/console/issues/228)) ([5da2bc9](https://github.com/akash-network/console/commit/5da2bc9647ac8b6ba189eb67632a43697304511d))
* **deployment:** managed walllet fixes ([#382](https://github.com/akash-network/console/issues/382)) ([4a43483](https://github.com/akash-network/console/commit/4a4348390c56d0f2794b6689cf19ef84edaf9c54))
* **deployment:** only set the template and redirect once when loading new deployment ([#394](https://github.com/akash-network/console/issues/394)) ([654dbae](https://github.com/akash-network/console/commit/654dbaed6bc7fbd37b6261c0a65510fde1859a51))
* **deployment:** remove control over deployment detail fetching ([7c2263b](https://github.com/akash-network/console/commit/7c2263b5cc99a0886e7ee1a1b018691d7a64782f)), closes [#247](https://github.com/akash-network/console/issues/247)
* **deployment:** templates new deploy ([#403](https://github.com/akash-network/console/issues/403)) ([c0d50b1](https://github.com/akash-network/console/commit/c0d50b1d50a1f083105afd877a2c370dfcb34dd8))
* ensure apps build consistently in docker and locally ([f4dbd88](https://github.com/akash-network/console/commit/f4dbd88a886d683062eebd7495375bff0bd4aa54)), closes [#209](https://github.com/akash-network/console/issues/209)
* ensure deploy web type check is passing ([62acb44](https://github.com/akash-network/console/commit/62acb44e7625063a39a53ac87e4902a3dfc6d4fb))
* **env:** parse process env with zod to ensure default values ([0224f79](https://github.com/akash-network/console/commit/0224f79a231df9acc66f965469e5df59b60896ad))
* handle provider active leases graph when no leases or new provider ([#253](https://github.com/akash-network/console/issues/253)) ([a7feeda](https://github.com/akash-network/console/commit/a7feedaa50cc37960323182a97f4d26df59960c5))
* improve the settings node fetching to avoid having a failing node ([#262](https://github.com/akash-network/console/issues/262)) ([07fd696](https://github.com/akash-network/console/commit/07fd696989d9d16c6e5b07071e2260f749fab4d0))
* move leapwallet CSS library import to component-specific usage ([#281](https://github.com/akash-network/console/issues/281)) ([333e29a](https://github.com/akash-network/console/commit/333e29afd5a05602e58760234b171278b6f7960e))
* type button code snippet ([51bd8cc](https://github.com/akash-network/console/commit/51bd8cc45caf50b39574771da866b1893a5f2704))
* **user:** ensure user pages are properly loaded ([463bfee](https://github.com/akash-network/console/commit/463bfeeb531ba79bfc8bba3d8e3f7520fb4803d6)), closes [#247](https://github.com/akash-network/console/issues/247)
* **wallet:** ensure managed wallet is gone after logout ([a7d4873](https://github.com/akash-network/console/commit/a7d4873ed9e94f037d3ee3e78397f3da33b32f17))
* **wallet:** ensure managed wallet selected on create ([9f5bd71](https://github.com/akash-network/console/commit/9f5bd71faca4b64c427ed6dfa7c458e3fdc52314))
* **wallet:** refetch using query directly to avoid circular dep ([e88ed70](https://github.com/akash-network/console/commit/e88ed706efd5e6e1b27969a7efaa09f8b4157be5))
* **wallet:** remove managed wallet on registered user logout ([ab6188e](https://github.com/akash-network/console/commit/ab6188e1f100e9598afc8524daa8fd50fc860b1a)), closes [#247](https://github.com/akash-network/console/issues/247)
