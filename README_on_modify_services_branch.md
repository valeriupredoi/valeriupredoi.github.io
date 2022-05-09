## Branch `modify_services` for Stephan and Uwe

### Checkout

```
git clone https://github.com/valeriupredoi/valeriupredoi.github.io.git
cd valeriupredoi.github.io
git checkout modify_services
git pull origin modify_services
```

### Contributing

To add a file

```
git pull origin modify_services  # to always have the latest HEAD
git add PATH-TO-FILE  # adding a file
git commit PATH-TO-FILE -m "commit message"  # commiting changes
git push origin modify_services  # to push to remote/HEAD
```

or use the GitHub web-based interface.

### Viewing (pushed) changes in the browser

Work on the site files can be done as per the main `master` branch, but vieweing the
newly created pages is a bit different since this ia branch off `master` and Github Pages
doesn't work straight out of the box. Instead, the user msut prepend (add at the start)
`https://htmlpreview.github.io/?`, e.g. to view in full-blown HTML the front of the site,
use the following web address:

https://htmlpreview.github.io/?https://github.com/valeriupredoi/valeriupredoi.github.io/blob/modify_services/_site/index.html

or for a specific page, in this case the sdm-which-model-data page, use:

https://htmlpreview.github.io/?https://github.com/valeriupredoi/valeriupredoi.github.io/blob/modify_services/_site/sdm-which-model-data/index.html
