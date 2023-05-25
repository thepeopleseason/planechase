Magic the Gathering Planechase Utility
======================================

For use with Magic the Gathering [Planechase](https://mtg.gamepedia.com/Planechase) games

Features
--------

- Single-deck Planechase featuring all published planes
- Automatic planeswalking when virtual die roller achieves planeswalk
- [Eternities Map](https://web.archive.org/web/20220922215232/https://magic.wizards.com/en/articles/\
archive/feature/eternities-map-2010-07-19-0) variant
  - Phenomena occur only during Hellrides.

Shortcuts
------------------

Key | Function | Mouse | On
--- | -------- | ----- | --
`<SPACE>` | Reset planar die mana cost | Click on Cost number | Planechase / Eternties Map
`<ENTER>` `<R>` | Roll planar die | Click on Roll button | Planechase / Eternties Map
`<C>` `<=>` `<+>` | Add counter to current plane | Click on current plane | Planechase / Eternities Map
`<ESC>` | Toggle card-specific view | Click on 'Toggle' link in toolbar | Planechase / Eternities Map

The Eternities Map can be navigated by use of arrow keys, vi navigation (HJKL), and cardinal direction keys (NSEW).

Options
-------

- URL Parameters
  - `bigpreview=1` : enable large previews of planes when choosing which cards to include.
  - `chroma=1` : set background to chromakey green.
  - `size=2` : change the radius of visible/recycled planes on the eternities map. Default radius is 3, maximum 3.
  - `manual=1` : enable manual mode: disable automatic planeswalking. Right arrow manually planeswalks.
  - `custom=1` : enable custom planes from [Multiverse](https://www.reddit.com/r/custommagic/comments/7sgecl/multiverse_the_custom_planechase_expansion/), [digitalmayhemx](https://www.reddit.com/u/digitalmayhemx) and other potential sources

Norn's Seedcore
---------------
Norn's Seedcore is a new plane from the March of the Machine Commander
decks. It reads:

> When you planeswalk to Norn’s Seedcore, chaos ensues.
>
> Whenever chaos ensues, reveal cards from the top of your planar deck
> until you reveal a plane card. Planeswalk to it, except don’t
> planeswalk away from any plane. Put the rest of the revealed cards
> on the bottom of vour planar deck in any order.

One-at-a-time Planechase will reveal an additional plane with Norn's
Seedcore, and subsequent Chaos rolls will add additional planes to the
display. Planeswalking away from Norn's Seedcore will shuffle all
previously-associated planes with it into the Planes deck.

When planeswalking to Norn's Seedcore on the Eternities Map, the
interface will automatically reveal an additional plane. To return to
the map, click on Norn's Seedcore. If you return to Norn's Seedcore
while it is still on the map, any planes previously associated with it
will still be linked to it, and they will only be removed once Norn's
Seedcore has been removed from the map.

If you encounter a plane with plane-specific counters, pressing the
counter button in the toolbar will reveal all pertinent counter
values.

Note: A plane may both be on the map and associated with Norn's
Seedcore simultaneously.

Adding Custom Planes
--------------------

To add custom planes, update the `eternity` object located at the top
of `planechase.js`. Add the details of each plane under the
`custom_planes` key--each value should be an object with a `name`
(preferably with an indicator that it is different from WOTC-created
planes) and `type` where type can be either `plane` or `phenomenon`.

Submit a pull request with those changes, and I'll double-check them 
and update the site accordingly. 

TODO
----

* BUG: Sometimes Spatial Merging will show up in the map unbidden (EM)
* BUG: Sometimes the phenomenon/chaos divs will get into a bad toggle state
  (e.g. hidden when the plane div is hidden).
* BUG: Resetting the mana cost with the spacebar sometimes kicks off a roll of the planar die.
* BUG: Spatial Merging should allow for counter-enabled planes
* TODO: Pools of Becoming + Stairs to Infinity
* TODO: change get_next_planes to go through deck until plane
* TODO: full manual mode (no processing, enable scrying, game history);

Contact
-------

Please direct any questions, feature requests, etc. to the github repository or to [@thepeopleseason](https://twitter.com/thepeopleseason) on Twitter.
