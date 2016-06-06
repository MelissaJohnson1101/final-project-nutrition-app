/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    //'angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
// materialize map
    "materialize-css":            "node-modules/materialize-css",
    "materialize":                "node_modules/angular2-materialize",
    "angular2-materialize":       "node_modules/angular2-materialize",
    "angular2-modal":             "node_modules/angular2-modal", 
    "angular2/platform-browser":  "node_modules/angular2-modal/platform-browser"
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
// materialize
    "materialize-css":            {main: "dist/js/materialize"},
    "materialize":                {main: "dist/materialize-directive",defaultExtension: "js"},
    "angular2-modal":             {main: "index.js", defaultExtension: "js"}, 
    "angular2/platform-browser":  {main: "index.js", defaultExtension: "js"},
    "angular2-modal/plugins/bootstrap": {main: "index.js", defaultExtension: "js"} 
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  });
  var config = {
    map: map,
    packages: packages
  }
  System.config(config);
})(this);

