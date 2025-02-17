// Turn on full stack traces in errors to help debugging
Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

// Cancel Karma's synchronous start,
// we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function() {};

System.config({
    packages: {
        'base/temp': {
            defaultExtension: false,
            format: 'cjs',
            map: Object.keys(window.__karma__.files).filter(onlyAppFiles).reduce(createPathRecords, {})
        }
    }
});

System.import('angular2/testing')
    .then(function(testing) {
        return System.import('angular2/platform/testing/browser').then(function(testing_platform_browser) {
            testing.setBaseTestProviders(
                testing_platform_browser.TEST_BROWSER_PLATFORM_PROVIDERS,
                testing_platform_browser.TEST_BROWSER_APPLICATION_PROVIDERS);
        });
    })
    .then(function() { return Promise.all(resolveTestFiles()); })
    .then(function() { __karma__.start(); }, function(error) { __karma__.error(error.stack || error); });

function createPathRecords(pathsMapping, appPath) {
    // creates local module name mapping to global path with karma's fingerprint in path
    var moduleName = appPath.replace('/base/temp/', './').replace(/\.js$/, '');
    pathsMapping[moduleName] = appPath + '?' + window.__karma__.files[appPath];
    return pathsMapping;
}

function onlyAppFiles(filePath) {
    return /\/base\/temp\/(?!.*\.spec\.js$).*\.js$/.test(filePath);
}

function onlySpecFiles(path) {
    return /\.spec\.js$/.test(path);
}

function resolveTestFiles() {
    return Object
        .keys(window.__karma__.files)  // All files served by Karma.
        .filter(onlySpecFiles)
        .map(function(moduleName) {
            // loads all spec files via their global module names
            return System.import(moduleName);
        });
}
