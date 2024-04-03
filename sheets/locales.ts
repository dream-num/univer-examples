import { LocaleType } from '@univerjs/core'

import { zhCN, enUS } from 'univer:locales'
import { enUS as UniverSheetsUIEnUS } from '@univerjs/sheets-ui';
import { enUS as UniverSheetsConditionalFormattingUIEnUS } from '@univerjs/sheets-conditional-formatting-ui';
export const locales = {
    [LocaleType.ZH_CN]: zhCN,
    [LocaleType.EN_US]: {
        ...enUS,
        ...UniverSheetsConditionalFormattingUIEnUS
    }
};
