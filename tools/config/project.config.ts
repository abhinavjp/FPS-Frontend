import { ExtendPackages } from './seed.config.interfaces';
import { join } from 'path';

import { SeedConfig } from './seed.config';
// import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
  FONTS_DEST = `${this.APP_DEST}/fonts`;
  FONTS_SRC = [
    'node_modules/font-awesome/fonts/**'
  ];
  constructor() {
    super();
    this.APP_TITLE = 'Pro-Vision';
    let additionalPackages: ExtendPackages[] = [{
      name: '@ng-bootstrap/ng-bootstrap',
      // Path to the package's bundle
      path: 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js'
    }, {
      name: '@progress/kendo-angular-grid',
      // Path to the package's bundle
      path: 'node_modules/@progress/kendo-angular-grid/dist/cdn/js/kendo-angular-grid.js'
    }
    ];

    this.addPackagesBundles(additionalPackages);
    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true },
      { src: '@progress/kendo-theme-default/dist/all.css', inject: true },
      { src: 'font-awesome/css/font-awesome.css', inject: true },
      { src: '@progress/kendo-angular-grid/dist/cdn/js/kendo-angular-grid.js', inject: 'libs' },
      { src: '@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js', inject: 'libs' },
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    // Add packages (e.g. ng2-translate)
    // let additionalPackages: ExtendPackages[] = [{
    //   name: 'ng2-translate',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
    // }];
    //
    // this.addPackagesBundles(additionalPackages);

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
