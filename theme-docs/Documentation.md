# DOCUMENTATION

## Nav Bar
### Change Nav links to left
If you want the nav buttons aligned to the left, next to the brand logo just add this class **".ml-auto"** right after the **.navbar-nav** class in the UL element. Example: "navbar-nav ml-auto"


## Folder Structure

/dist
    - css (Styles)
    - bootstrap-components (All boostrap components)
    - img
    - vendor (Plugins)
    - js (Template scripts)
    index.html
/dev
    - bootstrap-components (All boostrap components)
    - includes (Partials of template: head - nav - scripts)
    master.pug (Base template)
    index.pug (Main page)

## Functional Ajax Contact form 
Contact form is functional. Uses form-sender.php file to process form.
You only have to add the target email.


## Development tools
We use Sass as Css preprocessor and Pug as template preprocessor.
You can find a gulpfile.js configured to work nicely with this tools.
Also includes error handling via plumber.
The pug templates are structured with includes, master views, etc.