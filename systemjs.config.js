/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': 'dist', // 'dist',
    '@angular': '@angular',
    'angular2-in-memory-web-api': 'angular2-in-memory-web-api',
    'rxjs': 'rxjs'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  var progressPackageNames = [
    'kendo-angular-grid',
    'kendo-angular-intl',
    'kendo-data-query'
  ]
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Individual files (~300 requests):
  function packProgressIndex(pkgName) {
    packages['@progress/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packProgressUmd(pkgName) {
    if (pkgName === 'kendo-angular-grid')
      packages['@progress/' + pkgName] = { main: 'dist/cdn/js/' + pkgName + '.js', defaultExtension: 'js' };
    else
      packages['@progress/' + pkgName] = { main: 'dist/cdn/js/' + pkgName + '-base.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  var setProgressConfig = System.packageWithIndex ? packProgressIndex : packProgressUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  progressPackageNames.forEach(setProgressConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);