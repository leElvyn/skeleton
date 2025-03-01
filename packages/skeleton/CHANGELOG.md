# @skeletonlabs/skeleton

## 1.10.0

### Minor Changes

- feat: AppRail has better support for padding, Tile and Anchors now include an `aspectRatio` property. ([#1727](https://github.com/skeletonlabs/skeleton/pull/1727))

- feat: A new `Tree View` component has been added. ([#1691](https://github.com/skeletonlabs/skeleton/pull/1691))

### Patch Changes

- bugfix: Fix accessibility warning in Ratings component due to applied `on:click` for non-interactive elements. ([#1739](https://github.com/skeletonlabs/skeleton/pull/1739))

- bugfix: Resolved an issue with Popups that caused them to be interactive when closed. ([#1721](https://github.com/skeletonlabs/skeleton/pull/1721))

- bugfix: Resolved an issue that prevented the Autocomplete `allowedlist` feature from working as expected. ([#1736](https://github.com/skeletonlabs/skeleton/pull/1736))

## 1.9.0

### Minor Changes

- feat: Adds support for Svelte 4 ([#1690](https://github.com/skeletonlabs/skeleton/pull/1690))

### Patch Changes

- bugfix: Enhanced types for the `clipboard` action ([#1692](https://github.com/skeletonlabs/skeleton/pull/1692))

- bugfix: resolved a spacing issue when using the vertical `radio group` setting ([#1696](https://github.com/skeletonlabs/skeleton/pull/1696))

- bugfix: resolved an issue when the drawer position suddenly changes sides ([#1679](https://github.com/skeletonlabs/skeleton/pull/1679))

- bugfix: paginator buttons now include accessible ARIA label props ([#1709](https://github.com/skeletonlabs/skeleton/pull/1709))

- bugfix: fixed `scroll` event type in `AppShell` ([#1715](https://github.com/skeletonlabs/skeleton/pull/1715))

- bugfix: Enhanced types for the `filter` action ([#1693](https://github.com/skeletonlabs/skeleton/pull/1693))

- bugfix: `InputChips` can now handle `undefined` values ([#1678](https://github.com/skeletonlabs/skeleton/pull/1678))

## 1.8.0

### Minor Changes

- feat: Implemented a new TabAnchor component for Tabs ([#1645](https://github.com/skeletonlabs/skeleton/pull/1645))

- feat: Expanded Toast features to allow hiding the dismiss button, allow toast to remain visible on hover, and programatically close each instance ([#1637](https://github.com/skeletonlabs/skeleton/pull/1637))

- feat: Added svelte Ratings component ([#1654](https://github.com/skeletonlabs/skeleton/pull/1654))

### Patch Changes

- bugfix: Fixed a typo for the Drawer component's backdrop `blur` property ([#1663](https://github.com/skeletonlabs/skeleton/pull/1663))

- bugfix: Tailwind plugin intellisense now properly displays all component classes ([#1664](https://github.com/skeletonlabs/skeleton/pull/1664))

- chore: Updated all project depedencies ([#1648](https://github.com/skeletonlabs/skeleton/pull/1648))

- bugfix: Fixed a typo for the typography-prose.css headers ([#1647](https://github.com/skeletonlabs/skeleton/pull/1647))

## 1.7.1

### Patch Changes

- bugfix: Resolved a bug preventing the prose stylesheet from being imported ([#1641](https://github.com/skeletonlabs/skeleton/pull/1641))

## 1.7.0

### Minor Changes

- feat: The Paginator component can now be displayed as a numeric row of pages ([#1573](https://github.com/skeletonlabs/skeleton/pull/1573))

- feat: Added additional forwarded events for AppRailTile and AppRailAnchor ([#1633](https://github.com/skeletonlabs/skeleton/pull/1633))

- feat: Added `digits` prop to Conic Gradient to limit decimal points ([#1607](https://github.com/skeletonlabs/skeleton/pull/1607))

- feat: Added a navigation slot to the Step component, which can replace the Back button for the first step only ([#1606](https://github.com/skeletonlabs/skeleton/pull/1606))

- feat: Modal backdrop clicks now take into account both the `mouseup` and `mousedown` events for better accuracy ([#1605](https://github.com/skeletonlabs/skeleton/pull/1605))

- feat: Added a `background` prop to the SlideToggle component ([#1627](https://github.com/skeletonlabs/skeleton/pull/1627))

- feat: Added a missing dark mode modifier for each background hover design token ([#1577](https://github.com/skeletonlabs/skeleton/pull/1577))

### Patch Changes

- chore: Added types to the `Stepper` store and `dispatchParent` ([#1567](https://github.com/skeletonlabs/skeleton/pull/1567))

- bugfix: Updated `focusablePopupElements` in Popup to resolve issues when tabbing into Autocomplete options ([#1592](https://github.com/skeletonlabs/skeleton/pull/1592))

- bugfix: The Drawer's `backdrop` event only fires on backdrop interaction ([#1611](https://github.com/skeletonlabs/skeleton/pull/1611))

- bugfix: `typography-prose.css` must now be imported directly to enable the default Tailwind Typography plugin styles ([#1608](https://github.com/skeletonlabs/skeleton/pull/1608))

- docs: Updated Autocomplete documentation to demonstrate Firefox tab navigation fix for wrapping elements ([#1604](https://github.com/skeletonlabs/skeleton/pull/1604))

- bugfix: Fixed an undesired jiggle within the animation for Toasts ([#1579](https://github.com/skeletonlabs/skeleton/pull/1579))

- chore: Added additional type safeguard to the Table of Contents `scrollToHeading` ([#1565](https://github.com/skeletonlabs/skeleton/pull/1565))

- bugfix: Replaced unicode arrows with SVGs for the Paginator component ([#1629](https://github.com/skeletonlabs/skeleton/pull/1629))

- bugfix: All relative import paths now fully specify the `.js` extension to adhere to Node's ESM algorithm ([#1584](https://github.com/skeletonlabs/skeleton/pull/1584))

- bugfix: ListBoxItem now supports the use of objects for the `value` property ([#1628](https://github.com/skeletonlabs/skeleton/pull/1628))

- bugfix: Updated `typesVersions` map to fix auto imports paths ([#1587](https://github.com/skeletonlabs/skeleton/pull/1587))

- chore: Replaced the now deprecated `eslint-plugin-svelte3` for `eslint-plugin-svelte` ([#1618](https://github.com/skeletonlabs/skeleton/pull/1618))
