export function convertMMMDDYYYY(originalDate: string) {
  const months: Record<string, string> = {
    jan: '01',
    feb: '02',
    mar: '03',
    apr: '04',
    may: '05',
    jun: '06',
    jul: '07',
    aug: '08',
    sep: '09',
    oct: '10',
    nov: '11',
    dec: '12',
  };

  // Convert the original date to lowercase to handle both cases
  originalDate = originalDate.toLowerCase();

  const dateParts = originalDate.split(' ');
  const month = months[dateParts[0] as keyof typeof months];
  const day = dateParts[1].replace(',', '');
  const year = dateParts[2];

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
}

export function convertMDDYY(originalDate: string): string {
  const date = new Date(originalDate);

  if (isNaN(date.getTime())) {
    return 'Invalid Date';
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
