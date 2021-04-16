import { format } from 'date-fns'

export const getFormattedDate = (
    date: Date,
    formatString = 'HH:mm, dd MMMM'
): string => format(date, formatString)

export const formatTemp = (str?: number): string =>
    str?.toString().replace(/\.\d*$/, '') || ''
