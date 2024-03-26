import "react-mosaic-component/react-mosaic-component.css";
import "./index.css";

import { LocaleType, LogLevel, Tools, Univer } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsNumfmtPlugin } from "@univerjs/sheets-numfmt";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";
import { UniverSheetsZenEditorPlugin } from '@univerjs/sheets-zen-editor';
import ReactDOM from "react-dom";
import { Mosaic, MosaicWindow } from "react-mosaic-component";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { locales } from "./locales";
import { ALL_FEATURES_WORKBOOK_DATA } from "../data/sheets/demo/features";

const univers: Univer[] = [];

function factory(id: string) {
  return function createUniverOnContainer() {
    const univer = new Univer({
      theme: defaultTheme,
      locale: LocaleType.EN_US,
      locales,
      logLevel: LogLevel.VERBOSE,
    });


    univer.registerPlugin(UniverRenderEnginePlugin);
    univer.registerPlugin(UniverUIPlugin, {
      container: id,
      header: true,
      toolbar: true,
      footer: true,
    });
    // docs plugin
    univer.registerPlugin(UniverDocsPlugin, {
      standalone: true,
    });
    univer.registerPlugin(UniverDocsUIPlugin);
    // sheets plugin
    univer.registerPlugin(UniverSheetsPlugin);
    univer.registerPlugin(UniverSheetsUIPlugin);

    // sheet feature plugins
    univer.registerPlugin(UniverSheetsNumfmtPlugin);
    univer.registerPlugin(UniverFormulaEnginePlugin);
    univer.registerPlugin(UniverSheetsFormulaPlugin);
    univer.registerPlugin(UniverSheetsZenEditorPlugin);

    // create univer sheet instance
    univer.createUniverSheet(Tools.deepClone(ALL_FEATURES_WORKBOOK_DATA));

    univers.push(univer);
  };
}

const TITLE_MAP: Record<ViewId, string> = {
  a: "Sheet 1",
  b: "Sheet 2",
  c: "Sheet 3",
};

export type ViewId = "a" | "b" | "c";

export const App = (
  <Mosaic<ViewId>
    renderTile={(id, path) => (
      <MosaicWindow<ViewId>
        path={path}
        title={TITLE_MAP[id]}
        toolbarControls={<div />}
      >
        <div id={`app-${id}`} style={{ height: "100%" }}>
          {TITLE_MAP[id]}
        </div>
      </MosaicWindow>
    )}
    initialValue={{
      direction: "row",
      first: "a",
      second: {
        direction: "column",
        first: "b",
        second: "c",
      },
    }}
  />
);

ReactDOM.render(App, document.getElementById("container"));

factory("app-a")();
factory("app-b")();
factory("app-c")();