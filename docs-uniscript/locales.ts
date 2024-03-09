import { LocaleType } from '@univerjs/core'

import { zhCN, enUS } from 'univer:locales'
import { enUS as UniverUiscriptEnUS } from '../plugins/uniscript';

export const locales = {
    [LocaleType.ZH_CN]: zhCN,
    [LocaleType.EN_US]: {
        ...enUS,
        ...UniverUiscriptEnUS,
    }
};
