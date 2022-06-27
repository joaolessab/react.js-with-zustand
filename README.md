# Zustand (State Manager) for React.js

<div align="center">
  <img src="https://raw.githubusercontent.com/joaolessab/react.js-with-zustand/main/repo_media/logo.png" width="500">
</div>

## Repository Menu
1. [How do I run this project, João?](https://github.com/joaolessab/react.js-with-zustand#how-do-i-run-this-project-jo%C3%A3o)
2. [What's Zustand?](https://github.com/joaolessab/react.js-with-zustand#whats-zustand)
3. [DevTools - Redux](https://github.com/joaolessab/react.js-with-zustand#devtools---redux)
4. [Persist data from State into Client Storage](https://github.com/joaolessab/react.js-with-zustand#persist-data-from-state-into-client-storage)
5. [References](https://github.com/joaolessab/react.js-with-zustand#references)

## How do I run this project, João?
1. Install the package dependencies:
```bash
npm install
```

2. Then, run the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the app running;

## What's Zustand?
- It's a pretty simple and easy state manager to use in your React apps;
- A pretty good alternative for Redux;
- Really small pieces of code;

## DevTools - Redux
- You can manipulate and see the Zustand states live! Using a Chrome Extension and the **devtools** method provided by Zustand;
1. Check the commits [here](https://github.com/joaolessab/react.js-with-zustand/commit/c6dc529331bc9cf4addd21d90b6ca3b954efdb51);
2. Install the [Redux extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en);
3. Then, you can check your browser:
- Initial State:
<img src="https://raw.githubusercontent.com/joaolessab/react.js-with-zustand/main/repo_media/devTools_1.png" width="600">
- State Diff (after inserting new people):
<img src="https://raw.githubusercontent.com/joaolessab/react.js-with-zustand/main/repo_media/devTools_2.png" width="600">

## Persist data from State into Client Storage
- You can persist data from the Zustand state in the Client local storage, using the **persist** method provided by Zustand;
1. Check the commits [here](https://github.com/joaolessab/react.js-with-zustand/commit/3a95dc0ad8c099e5b4cc3524e9c31f73a20b08a5) and [here](https://github.com/joaolessab/react.js-with-zustand/commit/30659b4706f4d012d732576d72306abd1af7773f);
2. Then, you can check your browser at the Application tab - dev mode:
- **undefined** variable:
<img src="https://raw.githubusercontent.com/joaolessab/react.js-with-zustand/main/repo_media/persist_1.png" width="600">
- <b>user_settings</b> variable:
<img src="https://raw.githubusercontent.com/joaolessab/react.js-with-zustand/main/repo_media/persist_2.png" width="600">

## References
- [Official Repo and API Docs](https://github.com/pmndrs/zustand)
- [Creating Stores: Best Practices](https://github.com/pmndrs/zustand/wiki/Flux-inspired-practice)
- [Splitting the store into separate slices](https://github.com/pmndrs/zustand/blob/main/docs/typescript.md#independent-slices-pattern)
- [Medium Blog](https://medium.com/@SlashArash/zustand-yet-another-lovely-state-manager-in-react-801b6bcf21ff)