# domino club website
## running locally
 * install hugo: https://gohugo.io/installation/
 * start server: `hugo server`

## adding a jam
to add a jam you need the jam page (which includes all game metadata), the jam banner image, and the jam thumbnails (taken from itch). `[itch-page-name]` is the last part of the game's itch page url

 * `content/jams/[jam-name].md`
 * `assets/img/[jam-name]/banner.png`
 * `assets/img/[jam-name]/[itch-page-name].png`

## places of interest
### layouts
 * `layouts/_default/baseof.html` - base of all pages
 * `layouts/index.html` - homepage
 * `layouts/_default/jam.html` - jam pages
 * `layouts/partials/game-entry` - individual games on jam pages

### content
 * `content/_index.md` - "content" of homepage
 * `content/jams/` - individual jams + games

### non-generated
 * `static/img/` - jam banners, game thumbnails etc
 * `static/css/ `- css styles

everything in these folders gets copied verbatim to the website
