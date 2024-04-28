/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import "./style.css";

import { LocaleType, Univer, UniverInstanceType } from '@univerjs/core';
import { defaultTheme } from '@univerjs/design';
import { UniverDocsPlugin } from '@univerjs/docs';
import { UniverDocsUIPlugin } from '@univerjs/docs-ui';
import { UniverRenderEnginePlugin } from '@univerjs/engine-render';
import { UniverUIPlugin } from '@univerjs/ui';

import { UniverFormulaEnginePlugin } from '@univerjs/engine-formula';
import { DebuggerPlugin } from '../plugins/debugger';
import { locales } from './locales';
import { DOCS_BIG_DATA } from "../data/docs/docs-big-data";

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
});
univer.registerPlugin(UniverDocsPlugin);
univer.registerPlugin(UniverDocsUIPlugin);

univer.createUnit(UniverInstanceType.UNIVER_DOC, DOCS_BIG_DATA)

// add read only tip
setTimeout(() => {

    document.body.insertAdjacentHTML('afterend', '<div class="header-tip" style="position: fixed; top: 0; right: 10px; height: 32px; line-height: 32px; color: rgba(32, 32, 32, .8); font-size: 14px; font-family: sans-serif; z-index: 1000; pointer-events: none;">Read Only</div>');

},3000)