// lib/utils.ts

/**
 * Formats a date string to MM/DD/YYYY format, avoiding timezone issues
 * @param dateString - ISO date string (e.g., "2022-05-22T00:00:00.000Z")
 * @returns formatted date string (e.g., "5/22/2022")
 */
export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('T')[0].split('-')
  return `${parseInt(month)}/${parseInt(day)}/${year}`
}
