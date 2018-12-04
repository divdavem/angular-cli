/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BrowserBuilderSchema } from '../browser/schema';

export interface KarmaBuilderSchema extends Pick<BrowserBuilderSchema,
  'assets' | 'main' | 'polyfills' | 'tsConfig' | 'scripts' | 'styles' | 'stylePreprocessorOptions'
  | 'fileReplacements' | 'poll' | 'preserveSymlinks' | 'watch' | 'vendorSourceMap' | 'codeCoverage'
  | 'codeCoverageExclude'
  > {
  /**
   * The name of the Karma configuration file..
   */
  karmaConfig: string;

  /**
   * Output sourcemaps.
   */
  sourceMap: KarmaSourceMapOptions;

  /**
   * Override which browsers tests are run against.
   */
  browsers: string;

  /**
   * Karma reporters to use. Directly passed to the karma runner.
   */
  reporters?: string[];
}

export type KarmaSourceMapOptions = boolean | KarmaSourceMapObject;

export interface KarmaSourceMapObject {
  /** Resolve vendor packages sourcemaps */
  vendor?: boolean;
  /** Output sourcemaps for all scripts */
  scripts?: boolean;
  /** Output sourcemaps for all styles. */
  styles?: boolean;
}
