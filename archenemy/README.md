Magic the Gathering Archenemy Tool
==================================

For use with Magic the Gathering [Archenemy](https://mtg.gamepedia.com/Archenemy_(format)) games

Instructions
------------

- Navigate to the page from a browser--clicking on any scheme will cause a new scheme to load.
- Any ongoing scheme will stay visible until you hit the `Abandon` button on the scheme.
- If you run out of schemes in your deck, your starting deck will be reshuffled (minus any active ongoing schemes).

Options
-------

Including `?remote=1` on the end of the URL will enable only remote-friendly schemes (e.g. No extra turns, creature stealing/Control magic)

Installation
------------

1. Download all the scheme PNGs from [scryfall](https://scryfall.com/search?q=t%3Ascheme) and store in same directory as the index.html file.
2. Run the script `rename_scryfall_files.sh` to rename the files to eliminate unicode characters.
3. If your files are running on a web server, navigate to the appropriate URL in your browser. Otherwise open `index.html` as a file in your browser.