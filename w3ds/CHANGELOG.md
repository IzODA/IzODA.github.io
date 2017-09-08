# w3DS Changelog

All notable changes to this project will be documented in this file. Please see the [README](README.md) for more project details.

### Known Issues
See [https://github.ibm.com/w3/w3DS/issues](https://github.ibm.com/w3/w3DS/issues)

<!--  TEMPLATE -->

<!-- ---------------------------------

## w3DS v? - yyyy-mm-dd

## Code
### Fixed
### Added
### Changed

## Sketch
### Fixed
### Added
### Changed

## Doc site
### Fixed
### Added
### Changed

-->

<!-- END TEMPLATE -->


<!-- --------------------------------- -->

## w3DS v2.1.0 - 2017-08-25

## Code
### Fixed
+ selected checkbox hover state
+ selected radio button hover state
+ selected toggle hover state
+ carousel initialization bug preventing slide indicator icons from showing a position other than first slide
+ hover activated tooltips on ios now work as click activated
+ dropdown menu caret no longer overlapping title text

### Added
+ danger button

### Changed
+ systematic border radius across components that use them:
  + buttons
  + button groups
  + tabs
  + dropdown menus
  + pagination
  + input fields
  + keyboard type
  + tooltip
  + panels


## Sketch
### Fixed
+ secondary tag hover state
+ badge position on navigation bar
+ color update for breadcrumbs
+ revise the close icon of dismissible tag
+ fixed ordered list numbering

### Added
+ useful links on intro page
+ customized color tags

### Changed
+ updated border radius for buttons, button groups, tabs, paginations, dropdown menus, input field, keyboard type, tooltip, panels, media groups- hover background, badges, toggle, tags
+ changed danger button colors
+ added selected hover states and revised selected color for radio buttons, checkboxes, and toggles
+ removed warning and success buttons


## Doc site
### Fixed
+ add Font Face Observer plug-in to call set-same-height after fonts finish loading
+ font size in code block accordions corrected to 15px
+ thumbnails for color palette, checkboxes, radios, tags, and toggles now reflect current state of those components

### Added
+ deprecated color classes
+ custom color tags
+ js in code block accordions highlighted for legibility


<!-- --------------------------------- -->

## w3DS v2.0.1 - 2017-08-16

## Code
### Fixed
+ h4 is now medium weight
+ responsive headings' weights now match unresponsive headings'

## Sketch
### Fixed
+ navbar's badge positioning
+ secondary tab hover state now matches secondary buttons
+ breadcrumbs fully updated to new palette
+ dimissible tag's close button positioning

## Doc site
### Added
+ adds vector vs raster image comparison to media forced growing documentation
### Fixed
+ corrects version tag in side nav and mobile expanded menu to match home page and mobile header
+ fixes link to moment.js in date input docs
+ corrects colors in w3ds logo on home page main section
+ fixes media documentation images to correctly show image scaling behavior
+ automates example page count on showcase page, now displaying count correctly
+ fixes inbox example page nav bar height issue
+ fixes code block example to correctly render text-wrap code block



<!-- --------------------------------- -->

## w3DS v2.0.0 - 2017-08-11

## Doc site
### Added
+ favicon with updated colors
+ type color usage section
+ palette conversion chart 
### Changed
+ type documentation to reflect introduction of plex
+ fonts download now contains only plex and source code pro
+ updated npm enterprise login guide to reflect change in npm enterprise documentation
+ favicon with updated colors
+ logo with updated colors and plex font



## Code
### Added
+ grey type color classes
+ new color palette - supporting partial backwards compatibility
+ contextual border colors
+ contextual side border colors
### Changed
+ font family is now plex -- weights, sizes, and letter spacing of some type styles are slightly altered
+ dropdown menu and accordion controls (arrow and plus) now use plex as font family
+ toggles style
+ checkboxes style
+ radio buttons style



## Sketch
### Fixed
+ secondary button hover state
+ contrast accessibility issues for some components with new color palette

### Added
+ applied type styles to instances of type
+ refined radio buttons, checkboxes, and toggles
+ grey type options for all type styles
+ light and gray type options for small text

### Changed
+ reorganized type styles section
+ color palette naming convention to match code



<!-- --------------------------------- -->

## w3DS v1.0.0 - 2017-07-28

## Doc site
### Fixed
+ General maintenance of component examples

### Added
+ 'Components in this pattern' to Documentation page template
+ Page title on browser tab
+ Downloadable html starter kit on get-starter/developer-guide page
+ Accordion with right-aligned open/close
+ Color palette usage guide including responsive color class

### Changed
+ Images

## Code
### Fixed
+ Convert overflows with 'scroll' value to 'auto' so scrollbar only show up when needed in IE
+ Collapsable tables now correctly collapse at small screen sizes
+ *Breaking* Panel images with class `ds-img-responsive` are no longer always full-width, instead use `ds-img-force-grow`, as described in media component docs
+ Code block html structure - default and text wrap

### Added
+ Basic screen reader accessibility to dropdown components
+ Basic screen reader accessibility to accordion components
+ Indeterminate checkbox style
+ Scrollspy: internal scroll at component level
+ Static side navigation component
  + Left and right positioning
  + Optional mobile-specific treatment
+ Icons
  + Communications
    + announcement
    + thumbs-down
    + thumbs-up
  + Media
    + mic-off-fill
    + mic-on-fill
    + pause-fill
    + play-fill
    + stop-fill
    + volume-down-fill
    + volume-off-fill
    + volume-up-fill
    + volume-0-fill
    + volume-1-fill
    + volume-2-fill
    + volume-3-fill
  + Symbols
    + calculator
    + currency
    + recommended
    + travel
    + wiki
  + UI controls
    + cloud-download
    + cloud-upload
    + expand

### Changed
+ *Breaking* Scrollspy now derived from static side nav classes

## Sketch
### Fixed
+ Grid issues in example page sketch files
### Added
### Changed



<!-- --------------------------------- -->

## w3DS v1.0.0-beta - 2017-06-30

## Doc site
### Added
+ Icon sizing documentation
+ Motion Guide in Design section on Documentation page
+ JS usage guide

## Code
### Fixed
+ Scrollspy documentation and example page, class name updates
+ Carousel html structure and class names, remove unnecessary ds-row affecting slides transition

### Added
+ Date inputs
+ Icons
  + UI controls
    + edit-document
    + first page
    + last page
    + sort
    + sort-ascending
    + sort-descending
  + Communications
    + forum
    + role
    + video-chat
  + Symbols
    + new
    + payment
    + tag
    + transfer

## Sketch
### Fixed
+ Flat tab inactive state label color now matches code
+ Inactive and disabled secondary tabs
  + Line weight to 2px
  + Divider line height to pixel-perfect
+ Mobile hero body copy expansion

### Added
+ Disabled states of tabs in the styles section on sticker sheet
+ Icons
  + UI controls
    + sort
    + sort-ascending
    + sort-descending
    + first page
    + last page
    + edit-document
  + Communications
    + video-chat
    + forum
    + role
  + Symbols
    + payment
    + new
    + tag
    + transfer

### Changed
+ Label of File inputs changed to File upload





<!-- --------------------------------- -->

## w3DS v0.16.0 - 2017-06-19


## Code
### Fixed
+ Codeblocks no longer show a scrollbar in windows if no content overflows
+ Tab buttons now correctly use `auto` width

### Added
+ File input styles
+ Close icon with circle to support file input styles
+ Links: single color (no color changes in states), and unstyled (no color changes or underline)
+ Scrollspy: added opt-in for mobile scrollspy buttons
+ Overlay js emita a warning if no open control is associated with an overlay

### Changed
+ Set same height no longer requires `ds-set-height-___` to be first class
+ **Breaking** Scrollspy: performance refinements, styling changes, changes in html structure

## Sketch
Sketch is now included in the w3DS repository.

### Fixed
+ Ordered list
+ Unordered list
+ Icon list
+ Accordions
+ Contextual-blue-1: wrong color in symbol artboard
+ Matched badge red to palette contextual-red
+ Disabled input text: matched type color across all inputs

### Added
+ Generic Ordered list
+ Generic Unordered list
+ All images
+ Date input
+ File input
+ Close-circle icon
+ side navigation symbols

### Changed
+ Removed outline from tray symbol



<!-- --------------------------------- -->

## w3DS v0.15.1 - 2017-06-06

## Code

### Fixed
+ Horizontal button groups -- fixed an issue with grid and button class widths colliding
+ Scrollspy -- fixed an error caused by bad order of execution, scrollspy init now exits if required elements are not available


<!-- --------------------------------- -->

## w3DS v0.15.0 - 2017-06-05

## Code

### Fixed
+ tray component for firefox & safari
+ nav bar megamenu for firefox & safari

### Changed
+ homepage gifs


## Sketch

### Fixed
+ default loaders and progress bars color refinement
  + light color neutral-cool-1
  + dark color blue-primary-4
+ dropdown menus
  + fixed alignment issues
  + better resizing
+ nav bar with tools resizing after Sketch update

### Added
+ Icons
  + more-filled-vertical
  + more-filled-horizontal
  + pie-chart
  + product

### Changed
+ pagination symbols were moved from Navigational to Patterns


## Doc site

### Tables
+ Interactive tables intro copy now clearly states that datatables.js is not included


<!-- --------------------------------- -->

## w3DS v0.14.0 - 2017-05-19

## Code

### Fixed
+ screen reader accessibility for:
  + tabs
  + tooltips
  + trays
+ select inputs now same height as other inputs
+ overlay now has correct bottom margin in firefox

### Added
+ icons
  + tablet
  + desktop
  + code
+ navbar megamenu accessibility
+ navbar megamenu animations
+ panel link
+ select input now has small and large classes like text inputs

### Changed
+ secondary and basic button border widths now match
+ button border radius is reduced to 1px from 2px

## Sketch

### Fixed
+ refined naming of layers within symbols
+ ordered layers within symbol for ordered overrides
+ added color mask to sentiment icons
+ breadcrumbs symbols now able to resize/override while maintaining two text styles
+ matched color of secondary badges to the updated primary color
+ added icon symbol to alert with icon
+ button groups
  + sizes are now pixel-perfect and match buttons
  + placement of buttons on art board to be pixel-perfect and consistent for perfect alignment in groups
  + separate lines that made the open-border to single line (secondary and basic styles)
  + dividing line settings and height
+ icon naming to match code
  + user
  + phone
+ matched basic pagination color to basic button style (now matches code)
+ matched secondary pagination border width to secondary button (now matches code)
+ in unordered list, separate circle from text layer so that it stays when text override is applied
+ dark rule symbol size now matches light rule size and appears as override when nested
+ default navbar
  + mobile: replaced _nested accordion symbols with regular symbols for cleaner pattern overrides
  + fixed spacing between buttons
+ nav bar with tools
  + replaced _nested type, panel and button symbol with regular symbols
  + made background a symbol so user can change the color in pattern overrides
  + inserted badge as symbol (was layers)
+ footers
  + made background a symbol so user can change the color in pattern overrides

### Added
+ generic icon list symbol in dark version
+ icons
  + tablet
  + desktop
  + code
+ center alignment symbols for
  + text link
  + small text link
+ link to download fonts in intro guidance
+ guidance for button groups

### Changed
+ icons (design)
  + mobile
+ organize art boards in Symbols page by category
+ radius from 1.3 to 1 for following components:
  + bent panel
  + alerts
  + buttons
  + button groups
  + checkbox
  + inputs
  + dropdown menus
  + pagination
  + tabs


<!-- --------------------------------- -->

## w3DS v0.13.2 - 2017-05-08

## Code

### Fixed
+ Sticky footer css now included

<!-- --------------------------------- -->

## w3DS v0.13.1 - 2017-05-05

## Code

### Fixed
+ Docsite color: Red 6 - #9E0606 (mistakenly attributed to v0.13.0)
+ Mobile icon on docsite homepage


<!-- ---------------------------------- -->
# w3DS v0.13.0 - 2017-05-05

## Code

### Added
+ Bent (ds-bent) and rounded (ds-rounded) panels
+ Icon added:
 + sentiment-mute
 + sentiment-sad
 + sentiment-meh
 + sentiment-wink
 + sentiment-smile
 + sentiment-wow
 + sentiment-great
 + cart
+ Layout utilities: sticky footer
+ Accordions: generic show/hide

### Fixed
+ Navbar component: removed ds-tab, tray-based nav behavior is unchanged
+ Docsite color: Red 6 - #9E0606 (edit: mistakenly omitted)
+ Carousel left paging button sometimes went right

### Changed
+ Icon design changed:
 + save
 + image
 + phone
 + archive
 + star-half
 + cloud

## Sketch

### Fixed
+ Added background color to default media lists 
+ Removed orphan symbol Choose_file
+ Increased opacity of image tint on carousel for legibility 
+ Type artboards in Symbols page arranged
+ Re-built all heros

### Added
+ Intro guidance
  + How to attach icon to component
  + Useful links section
+ Special case type guidance
+ Icon usage guidance, with:
  + Buttons
  + Tables
  + Inputs
  + Dropdown menus
  + Tabs
+ Components with icons
  + Accordions
  + List
  + Badges
+ Circle crop image symbol
+ Trays section in Foundational 
+ Bent panels on sticker sheet 
+ Block quote Dark symbols
+ Icons
  + sentiment-mute
  + sentiment-sad
  + sentiment-meh
  + sentiment-wink
  + sentiment-smile
  + sentiment-wow
  + sentiment-great
  + cart
+ Image swatch

### Changed
+ Shadow section moved from Design page to Structural page
+ Icons guidance
+ Brand blue palette naming to remove extra folder in Symbol menu
+ Icons
  + save
  + image
  + phone
  + archive
  + star-half
  + cloud



<!-- ---------------------------------- -->
# w3DS v0.12.0 - 2017-04-21

### Added
#### Components
+ Side navigation: scrollspy (mobile and desktop)

#### Javascript
+ API for manual use

### Fixed
+ Panel floating shadow
+ Input and dropdown menu heights
+ Jump links function correctly regardless of scroll position on page load
+ Carousel icons
+ Rows nested within no-gutter columns no longer overflow
+ Dist css header is now a comment :D


<!-- ---------------------------------- -->
# w3DS v0.11.1 - 2017-04-13

### Fixed
#### Icons
+ Adds missing file-zip icon in medium-light style
+ Adds missing caret-select icon in default style

#### Alerts
+ Dismissible: fixes close button background opacity

#### Tags
+ Dismissible: fixes close button width issue

### Added
#### Icons
+ Adds filled circle icons
+ Adds camera icons

### Changed



<!-- ---------------------------------- -->
# w3DS v0.11.0 - 2017-04-07

### Fixed
#### Components
+ Disabled buttons no longer showing a hover state, which varied from just a cursor change to color changes as well

#### Documentation
+ Nav bar (with application or system tools) menu button's padding on mobile screen
+ Tray - bottom tray example, fixed tabindex order

### Added
#### Keyboard accessibility
+ Accordions
+ Dropdowns
+ Tabs
+ Tooltips
+ Trays

#### Components
+ Jump links
+ Icon button styles & focus states

#### Documentation
+ Disabled button styles


### Changed
#### Documentation
+ Now hosted on Github Pages
+ Github Pages change requires a direct Sketch download for now
+ Fonts for use with Sketch are now included as a download below the Sketch download



<!-- ---------------------------------- -->
# w3DS v0.10.0 - 2017-03-24

<!-- FIXED -->
### Fixed
+ Hex code for blue-dull-6 corrected
+ Hex code for blue-dull-2 corrected
+ Keyboard code style's border reimplemented
+ Tooltip open/close on click bugs corrected for both standalone and navbar tooltips
+ Small label now documented

<!-- ADDED -->
### Added
+ Fallback font stack for Montserrat

#### Iconography
+ `align-center`
+ `align-justify`
+ `align-left`
+ `align-right`
+ `indent-left`
+ `indent-right`
+ `list-ordered`
+ `list-unordered`
+ `type-bold`
+ `type-italic`
+ `type-underline`

#### NEW: Set-same-height utility
+ A generic JS utility for any group of elements, often used on columns and panels

#### NEW:Shadow utility

#### NEW: Carousels
+ Panel and hero space variations found on their respective pages

#### Lists
+ Hover states

#### Tables
+ Hover states

#### NEW: Media groups

#### Doc site
+ Hex codes for color palette
+ Code example sections are now syntax highlighted
+ Code example sections of many components cleaned up and better organized for clarity

<!-- CHANGED -->
### Changed

#### Icons
+ *Deprecated:* `x` icon, move to `close` icon before next version



<!-- ---------------------------------- -->
# v0.9.2 - 2017-03-22
### Added
Auto-width dropdown class added to reintroduce functionality that was possible in v0.8 and lower


<!-- ---------------------------------- -->
# v0.9.1 - 2017-03-10

<!-- FIXED -->
### Fixed
Default button hover state on `a:visited` now working correctly.

<!-- ---------------------------------- -->
# v0.9.0 - 2017-03-10

<!-- FIXED -->
### Fixed
Overhaul of specificity and cascading issues that caused unexpected results when combining classes and components.

#### Tooltips
+ Bug was preventing a tooltip from opening on click if another tooltip was already open &mdash; second tooltip will now open as first tooltip closes
+ Clicking inside a tooltip no longer closes it

#### Inputs
+ **Breaking?** Bug with radio, checkbox, and toggle were causing layout issues, especially at small sizes, due to the native input affecting layout flow. Native input is now positioned absolute so it won't affect the custom input

<!-- ADDED -->
### Added

#### Accordions
+ Add `ds-small` or `ds-large` to `ds-accordion` to achieve sizes in addition to `ds-accordion-small` and `ds-accordion-large`

#### Overlays
+ Open/close animations

#### Tags
+ Dismiss animation

#### Tooltips
+ Open/close animations

##### Trays
+ Column-based and full-width options
+ Triggers specified by id so they can be in separate markup
+ Sliding direction needs to be indicated

#### Alerts
+ Dismiss animation

##### Dropdown menus
+ Hover-activated dropdowns

#### Doc site
+ Article example page

<!-- CHANGED -->
### Changed

#### Typography
+ Text highlight color is now a blue from the palette
+ **Breaking** `kbd`, `abbr`, `sub`, and `sup` HTML elements no longer have styles directly applied to them &mdash; use appropriate classes instead

#### Layout utilities
+ Display classes now override float/clearfix classes (`ds-hide` will always hide) &mdash; both screen size agnostic classes and screen size range classes

#### Code blocks
+ Removes requirement of using `code` or `pre` HTML element, although usage of these elements is still highly encouraged

#### Badges
+ **Breaking (for now)** Secondary badges temporarily removed to match Sketch file

#### Buttons
+ **Breaking?** Buttons now default to the width of their container to make grid usage natural
+ Primary and secondary buttons no longer expand on hover (to be reintroduced as an opt-in later)

#### Inputs
+ **Breaking** Radio, checkbox, and toggle classes have been altered for clarity and brevity

#### Doc site
+ Navigation bar examples reorganized into a modular approach
+ Mobile nav menu button is now on the right
+ Inbox example page styles updated
+ Portfolio example page removed



<!-- ---------------------------------- -->
# v0.8.2 - 2017-03-03
### Added
+ Added scope to support pushing to IBM npm enterprise


<!-- ---------------------- -->
# v0.8.1
### Fixed
+ Fixes broken accordion in documentation site's mobile nav

<!-- ---------------------- -->
# v0.8.0
(incomplete, major fixes, additions, and changes are covered)

<!-- FIXED -->
### Fixed

<!-- ADDED -->
### Added

##### [Breaking] Overlays
+ Close button is now auto-injected, with an opt-out
+ Keyboard focus moves to the overlay close button when opened, and back to the open control when closed
+ Keyboard focus is constrained to the overlay
+ Screen readers see only overlays &mdash; all other elements have aria-hidden applied &mdash; and operate as usual as long as `role=dialog` is *not* present

##### Panels
+ Grid-based panels (including full-width) with outlines and shadow options

<!-- CHANGED -->
### Changed
**[Breaking]** Accordions are now javascript-driven and input-based accordions are no longer supported.

#### Tooltips
    + Outlined appearance for visibility on backgrounds of the same color
    + Groups &mdash; only one tooltip in a group can be open at a time

##### Navigation bar
+ "Tools" option added for navigation bar pattern


#### Gulp
    + Production task added, primarily for stripping source maps for production version of the code
