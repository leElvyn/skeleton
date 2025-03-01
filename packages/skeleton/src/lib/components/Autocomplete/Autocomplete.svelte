<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	// import { flip } from 'svelte/animate';
	// import {slide} from 'svelte/transition';

	// Types
	import type { AutocompleteOption } from './types.js';

	// Event Dispatcher
	type AutocompleteEvent = {
		selection: AutocompleteOption;
	};
	const dispatch = createEventDispatcher<AutocompleteEvent>();

	// Props
	/**
	 * Bind the input value.
	 * @type {unknown}
	 */
	export let input: unknown = undefined;
	/**
	 * Define values for the list.
	 * @type {AutocompleteOption[]}
	 */
	export let options: AutocompleteOption[] = [];
	/** Limit the total number of suggestions. */
	export let limit: number | undefined = undefined;
	/**
	 * Provide allowlist values.
	 * @type {unknown[]}
	 */
	export let allowlist: unknown[] = [];
	/**
	 * Provide denylist values.
	 * @type {unknown[]}
	 */
	export let denylist: unknown[] = [];
	/** Provide a HTML markup to display when no match is found. */
	export let emptyState = 'No Results Found.';
	// Props (region)
	/** Provide arbitrary classes to nav element. */
	export let regionNav = '';
	/** Provide arbitrary classes to each list. */
	export let regionList = 'list-nav';
	/** Provide arbitrary classes to each list item. */
	export let regionItem = '';
	/** Provide arbitrary classes to each button. */
	export let regionButton = 'w-full';
	/** Provide arbitrary classes to empty message. */
	export let regionEmpty = 'text-center';
	// TODO: These are slated to be removed!
	/** DEPRECATED: replace with allowlist */
	export let whitelist: unknown[] = [];
	/** DEPRECATED: replace with denylist */
	export let blacklist: unknown[] = [];
	/** DEPRECATED: Set the animation duration. Use zero to disable. */
	export let duration = 200;
	// Silence warning about unused props:
	const deprecated = [whitelist, blacklist, duration];

	// Local
	$: listedOptions = options;

	function filterByAllowDeny() {
		let _options = [...options];
		// Allowed Options
		if (allowlist.length) {
			_options = _options.filter((option) => allowlist.includes(option.value));
		}

		// Denied Options
		if (denylist.length) {
			_options = _options.filter((option) => !denylist.includes(option.value));
		}

		// Reset options
		if (!allowlist.length && !denylist.length) {
			_options = options;
		}

		listedOptions = _options;
	}

	function filterOptions(): AutocompleteOption[] {
		// Create a local copy of options
		let _options = [...listedOptions];
		// Filter options
		_options = _options.filter((option) => {
			// Format the input search value
			const inputFormatted = String(input).toLowerCase().trim();
			// Format the option
			let optionFormatted = JSON.stringify([option.label, option.value, option.keywords]).toLowerCase();
			// Check Match
			if (optionFormatted.includes(inputFormatted)) return option;
		});
		return _options;
	}

	function onSelection(option: AutocompleteOption) {
		/** @event {AutocompleteOption} selection - Fire on option select. */
		dispatch('selection', option);
	}

	// State
	$: if (allowlist.length || denylist.length) filterByAllowDeny();
	$: optionsFiltered = input ? filterOptions() : listedOptions;
	$: sliceLimit = limit !== undefined ? limit : optionsFiltered.length;
	// Reactive
	$: classesBase = `${$$props.class ?? ''}`;
	$: classesNav = `${regionNav}`;
	$: classesList = `${regionList}`;
	$: classesItem = `${regionItem}`;
	$: classesButton = `${regionButton}`;
	$: classesEmpty = `${regionEmpty}`;
</script>

<!-- animate:flip={{ duration }} transition:slide|local={{ duration }} -->
<div class="autocomplete {classesBase}" data-testid="autocomplete">
	{#if optionsFiltered.length > 0}
		<nav class="autocomplete-nav {classesNav}">
			<ul class="autocomplete-list {classesList}">
				{#each optionsFiltered.slice(0, sliceLimit) as option (option)}
					<li class="autocomplete-item {classesItem}">
						<button class="autocomplete-button {classesButton}" type="button" on:click={() => onSelection(option)} on:click on:keypress>
							{@html option.label}
						</button>
					</li>
				{/each}
			</ul>
		</nav>
	{:else}
		<div class="autocomplete-empty {classesEmpty}">{emptyState}</div>
	{/if}
</div>
