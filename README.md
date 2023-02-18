# domino club website
## running locally
 * install hugo: https://gohugo.io/installation/
 * start server: `hugo server`

## adding a jam
to add a jam you need the jam page (which includes all game metadata), the jam banner image, and the jam thumbnails (taken from itch). `[itch-page-name]` is the last part of the game's itch page url

 * `content/jams/[jam-name].md`
 * `assets/img/[jam-name]/banner.png`
 * `assets/img/[jam-name]/[itch-page-name].png`

## adding user pages
create a folder `static/~pseduonym` and add files there. everything in `static` is copied to the website verbatim
