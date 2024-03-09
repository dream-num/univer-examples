import "./style.css";

import { LocaleType, Univer } from '@univerjs/core';
import { defaultTheme } from '@univerjs/design';
import { UniverDocsPlugin } from '@univerjs/docs';
import { UniverDocsUIPlugin } from '@univerjs/docs-ui';
import { UniverRenderEnginePlugin } from '@univerjs/engine-render';
import { UniverUIPlugin } from '@univerjs/ui';

import { UniverFormulaEnginePlugin } from '@univerjs/engine-formula';
import { DebuggerPlugin } from '../plugins/debugger';
import { UniverUniscriptPlugin } from "../plugins/uniscript/plugin";
import { locales } from './locales';
import { ALL_FEATURES_DOCUMENT_DATA } from "../data/docs/features";

// univer
const univer = new Univer({
    theme: defaultTheme,
    locale: LocaleType.EN_US,
    locales,
});

// core plugins
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(DebuggerPlugin);
univer.registerPlugin(UniverUIPlugin, {
    container: 'app',
    header: true,
    toolbar: true,
});
univer.registerPlugin(UniverDocsPlugin, {
    standalone: true,
});
univer.registerPlugin(UniverDocsUIPlugin);

const example = [
    {
        label: 'Insert Text',
        value: `const activeDoc = univerAPI.getActiveDocument();\nactiveDoc?.appendText('Univer')`
    }
]
univer.registerPlugin(UniverUniscriptPlugin, {
    getWorkerUrl(moduleID: string, label: string) {
        if (label === 'typescript' || label === 'javascript') {
            return './vs/language/typescript/ts.worker.js';
        }

        return './vs/editor/editor.worker.js';
    },
    example,
});
univer.createUniverDoc(ALL_FEATURES_DOCUMENT_DATA);