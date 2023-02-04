import {format as formatDate} from 'date-fns';
import {dateLocale, numberLocale} from './dict';

export const formatNumber = (
    currency: number | bigint,
    local: string,
    minI: number,
    minF: number,
    maxF: number,
    style = 'decimal'
) => {
    if (!currency) currency = 0;
    return new Intl.NumberFormat(numberLocale[local as keyof typeof numberLocale], {
        style: style,
        minimumIntegerDigits: minI || 1,
        minimumFractionDigits: minF || 0,
        maximumFractionDigits: maxF || 0
    }).format(currency);
};

export const formatTable = (
    value: string | number | undefined,
    type: string | undefined,
    format: string | undefined,
    local = 'ru'
) => {
    if (!value) return '';
    if (type === 'date') {
        return formatDate(new Date(value), format || 'P', {
            locale: dateLocale[local as keyof typeof dateLocale]
        });
    }

    if (type === 'number') {
        const innerFormat = String(format).split(/\.|-/);
        const innerNumber = formatNumber(Number(value), local, +innerFormat[0], +innerFormat[1], +innerFormat[2]).split(
            ','
        );
        return `<b>${innerNumber[0]}, </b>${innerNumber[1]}`;
    }
    return value;
};
