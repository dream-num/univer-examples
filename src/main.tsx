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

import React from 'react';
import { createRoot } from 'react-dom/client';

import styles from './styles.module.less';

// package info
// eslint-disable-next-line no-console
console.table({
    // eslint-disable-next-line node/prefer-global/process
    NODE_ENV: process.env.NODE_ENV,
    // eslint-disable-next-line node/prefer-global/process
    GIT_COMMIT_HASH: process.env.GIT_COMMIT_HASH,
    // eslint-disable-next-line node/prefer-global/process
    GIT_REF_NAME: process.env.GIT_REF_NAME,
    // eslint-disable-next-line node/prefer-global/process
    BUILD_TIME: process.env.BUILD_TIME,
});

function Examples() {
    return (
        <div>

            <div className={styles.examples}>
                <h1>Univer Sheets</h1>

                <section className={styles.examplesSection}>
                    <a className={styles.btn} href="./sheets/">
                        <span>Sheets</span>
                        <div className={styles.btnBg}>→</div>
                        {' '}
                    </a>
                    <a className={styles.btn} href="./sheets-multi/">
                        <span>Sheets Multi</span>
                        <div className={styles.btnBg}>→</div>
                        {' '}
                    </a>
                    <a className={styles.btn} href="./sheets-uniscript/">
                        <span>Sheets Uniscript</span>
                        <div className={styles.btnBg}>→</div>
                        {' '}
                    </a>
                    
                </section>
                
            </div>

            <div className={styles.examples}>

                <h1>Univer Docs</h1>

                <section className={styles.examplesSection}>
                    <a className={styles.btn} href="./docs/">
                        <span>Docs</span>
                        <div className={styles.btnBg}>→</div>
                        {' '}
                    </a>
                    <a className={styles.btn} href="./docs-multi/">
                        <span>Docs Multi</span>
                        <div className={styles.btnBg}>→</div>
                        {' '}
                    </a>
                    <a className={styles.btn} href="./docs-uniscript/">
                        <span>Docs Uniscript</span>
                        <div className={styles.btnBg}>→</div>
                        {' '}
                    </a>
                </section>
            </div>


            <div className={styles.examples}>

                <h1>Univer Slides [coming soon]</h1>

                <section className={styles.examplesSection}>
                    <a className={styles.btn} href="./">
                            <span>Slides</span>
                            <div className={styles.btnBg}>→</div>
                            {' '}
                    </a>
                    <a className={styles.btn} href="./">
                            <span>Slides Multi</span>
                            <div className={styles.btnBg}>→</div>
                            {' '}
                    </a>
                    <a className={styles.btn} href="./">
                            <span>Slides Uniscript</span>
                            <div className={styles.btnBg}>→</div>
                            {' '}
                    </a>
                </section>
            </div>
        
        </div >

    );
}

createRoot(document.getElementById('app')!).render(<Examples />);
