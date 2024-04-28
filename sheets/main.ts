
import "./style.css";

import { LocaleType, LogLevel, Univer, UniverInstanceType } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from '@univerjs/docs-ui';
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsNumfmtPlugin } from "@univerjs/sheets-numfmt";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";
import { UniverSheetsZenEditorPlugin } from '@univerjs/sheets-zen-editor';
import { UniverFindReplacePlugin } from '@univerjs/find-replace';
import { UniverSheetsFindReplacePlugin } from '@univerjs/sheets-find-replace';
import { UniverDataValidationPlugin } from '@univerjs/data-validation';
import { UniverSheetsDataValidationPlugin } from '@univerjs/sheets-data-validation';
import { UniverSheetsConditionalFormattingUIPlugin } from '@univerjs/sheets-conditional-formatting-ui';
import { DebuggerPlugin } from '../plugins/debugger';
import { ALL_FEATURES_WORKBOOK_DATA } from "../data/sheets/demo/features";
import { locales } from "./locales";
// import { IUniverRPCMainThreadConfig, UniverRPCMainThreadPlugin } from "@univerjs/rpc";

// const LOAD_LAZY_PLUGINS_TIMEOUT = 1_000;
// univer
const univer = new Univer({
  theme: defaultTheme,
  locale: LocaleType.EN_US,
  locales,
  logLevel: LogLevel.VERBOSE,
});

// core plugins
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
  header: true,
  footer: true,
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);

// sheet feature plugins
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(DebuggerPlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
// univer.registerPlugin(UniverFormulaEnginePlugin, {
//   notExecuteFormula: true,
// });
univer.registerPlugin(UniverSheetsFormulaPlugin);
// univer.registerPlugin(UniverRPCMainThreadPlugin, {
//   workerURL: './worker.js',
// } as IUniverRPCMainThreadConfig);
univer.registerPlugin(UniverSheetsZenEditorPlugin);

// find replace
univer.registerPlugin(UniverFindReplacePlugin);

// data validation
univer.registerPlugin(UniverDataValidationPlugin);
univer.registerPlugin(UniverSheetsDataValidationPlugin);
univer.registerPlugin(UniverSheetsFindReplacePlugin);

// sheet condition formatting

// create univer sheet instance
univer.createUnit(UniverInstanceType.UNIVER_SHEET, ALL_FEATURES_WORKBOOK_DATA);

univer.registerPlugin(UniverSheetsConditionalFormattingUIPlugin);
// setTimeout(() => {
//   import('./lazy').then((lazy) => {
//       const plugins = lazy.default();
//       plugins.forEach((p) => univer.registerPlugin(p[0], p[1]));
//   });
// }, LOAD_LAZY_PLUGINS_TIMEOUT);
