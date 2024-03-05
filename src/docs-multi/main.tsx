import "react-mosaic-component/react-mosaic-component.css";
import "./index.css";
import "@univerjs/design/lib/index.css";
import "@univerjs/sheets-formula/lib/index.css";
import "@univerjs/sheets-numfmt/lib/index.css";
import "@univerjs/sheets-ui/lib/index.css";
import "@univerjs/ui/lib/index.css";

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
import ReactDOM from "react-dom";
import { Mosaic, MosaicWindow } from "react-mosaic-component";
import React from "react";
import { DEFAULT_WORKBOOK_DATA_DEMO } from "../data";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { ALL_FEATURES_DOCUMENT_DATA } from "../data/docs/features";
import { locales } from "./locales";

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
    univer.registerPlugin(UniverFormulaEnginePlugin);
    univer.registerPlugin(UniverUIPlugin, {
      container: id,
      header: true,
      toolbar: true,
    });
    // docs plugin
    univer.registerPlugin(UniverDocsPlugin, {
      standalone: true,
    });
    univer.registerPlugin(UniverDocsUIPlugin);
    

    // create univer sheet instance
    univer.createUniverDoc(Tools.deepClone(ALL_FEATURES_DOCUMENT_DATA));

    univers.push(univer);
  };
}

const TITLE_MAP: Record<ViewId, string> = {
  a: "Doc 1",
  b: "Doc 2",
  c: "Doc 3",
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
