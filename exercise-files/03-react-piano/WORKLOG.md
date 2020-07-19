Add initial App template made with `create-react-app`. Cleanup.

===

ROADMAP:

Sound:

- [x] Select pre-rendered sounds collection.
- [x] Mess around with simple provider for playing sounds from that collection.
- [x] Extract typings and shared types to domain to be able to use them in different types of provider.
- [x] Create 3 different types of provider:
  - [x] Using HOC.
  - [x] Using Render-Prop.
  - [x] Using React.Hooks.

Connection:

- [x] Try each provider to connect UI to sound logic.
  - [x] HOC.
  - [x] Render-Prop.
  - [x] React.Hooks.
- [x] Notice the differences between providers.

UI:

- [x] Create basic `App` layout.
- [x] Create a screen for case when API is not available.
- [x] Create `Keyboard`, `Key` components.
- [x] Create container and styles.
- [x] Bind russian keys as well.
- [x] Create instruments list.

Misc:

- [x] Refactor `keyboard.ts`.
- [x] Refactor Providers a bit.
- [ ] Refactor Providers yet again.
- [ ] Rename directory to satisfy new chapters order.

Text:

- [x] Make an outline for the chapter.
- [x] Transfer to main repo.
- [ ] Split large examples into many small ones.
- [ ] Order all the examples.

===

Add `soundfont-player` package to play sounds. It is a library which contains collection of pre-rendered sounds of many instruments. _(Link to lib, describe why not MIDI.js — the size.)_

===

Add simple provider just to make sure that everything is working and to try the Soundfont out. Not to forget to extract `AudioContext` creation in a different module to make code SRP compliant and ensure fallback to different screen when Audio is not available.

**While talking about Provider pattern tell about DI and injecting services.**

Tell about `async` functions and how they work under the hood, tell about `Promise`s and `Promise.resolve()` static method.

Also, make a not about `Web Audio API` and `audio.state`.

===

Found an [article](http://www.flutopedia.com/octave_notation.htm) which explains how we can conveniently store all the pitches and represent them on a keyboard.

===

Start creating an adapter based on `React hooks`. Will be called `useSoundfont` since it connects concrete service to an app. Will take an `AudioContext` constructor as an argument.

The reason why we extract constructor determination out of this hook is that this way we can ensure that a browser supports the `Audio API` and we can use it. Otherwise we will render fallback screen in our App.

Tell about updating dictionaries via `set*` hooks and its gotchas.

Make a not about placing `Soundfont` in `Settings` along with the `Context` to be able to inject it for testing. Replace `typeof Soundfont` with more abstract interface to be able to mock that in the future.

===

Make a note about `FunctionComponent<TProps>` generic type and generic types in general (no pun intended).

Tell about `AudioContextProvider` and Provider pattern in general. Explain how a Render-Prop patter works and why we extract a logic of getting `AudioContext` from the `App` component to a different component.

Tell about preventing `props-drilling` and not drilling them through the `MainScreen` component and using `AudioContextProvider` deeper to get `AudioContext` instead.

===

Add `usePressObserver` to watch over pressed keys on a real keyboard. It will be needed to observe pressed keys and match them to virtual keys on a piano board.

**Make a note** about cleaning up in react hooks when using effects that bind some handlers to events to prevent memory leaks.

===

Add a basic layout features. Add `clsx` package for composing `className`s, write about composition a bit.

Add `Keyboard` and `Key` components. Write about union types and enums, and a difference between them: runtime, const enum, scope, passing as a prop and autocomplete.

Write about `ReactEventHandler<HTMLButtonElement>` and `KeyboardEvent`.

===

Enrich `usePressObserver` with callbacks for press-start and press-end events.
Preserve `AudioContext` in a state to prevent resetting when a component rerenders.

===

Create a hook for `AudioContextProvider` to be able to use it in FunctionComponents around.

===

Connect `Key` component to press events via `usePressObserver` and callbacks from props. Also, those callbacks are being fired at the click event time. Write about handling events in React.

===

Make some research on the MIDI representation on sheet music notation. Add `note` module to domain with utils for conversion from MIDI to humane notation.

===

Create notes generator using `Array.fill` and mapping over it with `noteFromMidi`.
Create Keyboard keys mapper for rendering keys on a screen. Use generated notes to map over for rendering keys list.
**Think about more compact structure for creating octaves source.**

===

Add `SoundfontProvider` as a Render-prop pattern. **Write** about how Render-prop pattern works and how it can implement `Provider` pattern. **Make a note** about `instrument` prop, and why we don't wanna call `load` in `render`. **Write** that `load` can now be used only when some user event happens, and initial instrument loading should be initiated via `instrument` prop.

**Make a note** about `useMount` and why it is useful: more clear name, no empty dependencies list. Make a not about why we need `mount` event in a first place.

**Pros:**

- Explicitly shows where all the methods come from.
- Declaratively loads the instrument via prop.
- Can be written as a class and as a function component.

**Cons:**

- Breaks SRP a little when forces to load initial instrument via prop instead of calling `load` method. (But this is debatable.)
- Adds 1-2 nesting levels to a component which uses it.
- Needs a render to be called.

When using class-component **make a note** about using `setState` and updating class-fields without changing state. Which one to use when.

===

**Mention link** to a [cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/HOC.md).

**Pros:**

- Static composition possibility. (However it can be done in other patterns via Factory pattern or currying.)
- Implementation of a Decorator pattern.

**Cons:**

- Extra encapsulation and “implicitness”.
- Not obvious typings strategy and presence of generics, type-casting “on the fly”.
- Overall difficulty level.
- HOCs are too verbose.

**Make a not** about Decorator pattern.

When talking about `withAudioContext` HOC **tell about** `Either` and concept of `Left` and `Right` for render branching.

**Explain** the example with currying for `withStaticInstrument` when we cannot change instrument in runtime. Mention that we also can pass `AudioContext` right here instead of creating another HOC, however it will break SRP and ISP.

**Make a note** about `forwardRef`. **Explain** what a `ref` is and what it is for. Write about how it should be forwarded when enhancing components. **Explain** why we need `ComponentClass` instead of `ComponentType` and what's the difference. **Tell about** how `React.forwardRef` works.

**Write** about a TS [issue](https://github.com/Microsoft/TypeScript/issues/28938#issuecomment-450636046) that is a reason to write `...props as TProps`.

===

Remove unused.
Refactor.
Add some reminders of what to write about.

===

Use `event.code` to map russian keyboard layout as well.

===

Update meta-info and add SVG favicon.

===

Add some adaptiveness.

===

Add a instruments list and a selector component.
_If not explained yet_ make a note about `React.Context` and how `Provider` and `Consumer` work. why not to export `Context` by itself.

===

Add dynamic instrument loading. Write about preventing constant updates when having stateful components.

Use `withAudioContext` only as an example of a composition. But real examples will be the same as the first one, just to clarify the differences.

Write about cons of composition and reasons for [forwarding refs](https://reactjs.org/docs/forwarding-refs.html).

===

Add an outline for this chapter.

===

Transfer WORKLOG and OUTLINE to a project main repo.
