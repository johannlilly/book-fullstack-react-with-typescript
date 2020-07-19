2020-01-22 21:26:49 - Generate app `$ npx create-react-app --template typescript .`

2020-01-22 21:27:20 - Look for a drag and drop library

2020-01-26 16:10:24 - We'll use react-dnd

2020-01-26 16:12:01 - `yarn add react-dnd react-dnd-html5-backend` (git hash f057e89)

2020-01-26 16:14:23 - Setup `react-dnd` provider (git hash 5fa3644)

2020-01-26 16:20:22 - Create `<Column>` component that should be sortable

2020-01-26 23:18:33 - Created `<Card>` instead of a column, wrote a function to move cards around. Had so use `array.splice` twice. We'll be able to reuse this code for cards as well.

2020-01-27 21:12:28 - Remake `<Card>` to `<Column>`. Make it vertical.

2020-01-27 21:28:38 - Add `<Cards>` that can be dragged between inside one column.

2020-01-28 22:58:52 - move `useItems` to a separate hook;

2020-01-28 22:59:14 - remove `App.test.tsx`

2020-01-28 23:40:38 - Create `CustomDragLayer`

2020-01-29 00:15:53 - Move all state to `useReducer`, create `useDragAndDrop` custom hook, to combine `useRef`, `useDrag`, `useDrop` in one.

2020-01-29 20:40:41 - switch case needs to have `{}` block scope for each `case`, otherwise you'll get eslint warning `no-redeclare`

2020-01-29 21:48:19 - remember to return new state from reducer. For example `[...state]`

2020-01-29 22:03:31 - move columns drop target to app

2020-01-29 23:09:51 - Lanes: remove `order` attribute from items; when drag started - take item id. calculate new position in array from `x` coordinate; splice item into new position; use `id` as key; use position in array to calculate new coordinates.

Cards: Remove order attribute; each `id` should be unique; add `laneId` attribute; when moving between positions recalculate source lane; when hovering target lane  splice card by id from source lane, then splice card into target lane; before splicing into target lane update surce lane to target lane id;

2020-01-29 23:17:52 - Inside each lane card position y depends on current index in cards array of current lane;

2020-01-29 23:35:52 - Use `findIndex` to get current index of the item; if necessary get the source Lane as well; compare both to new values and if they are the same - return;

2020-02-01 23:59:01 - Problems with tweening, possibly because react reconciliation.

2020-02-02 01:45:27 - use React.memo to prevent extra renders

2020-02-02 17:04:56 - styled-components required installing `@types/styled-components`

2020-02-02 18:03:12 - before using styled components show how to use regular styles

2020-02-02 19:59:50 - nanoid also requires types installed separately