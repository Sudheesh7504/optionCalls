import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'binaryFormat'
})
export class BinaryFormatPipe implements PipeTransform {
  transform(data: ArrayBuffer | Blob, format: string = 'hex'): string {
    if (data instanceof ArrayBuffer) {
      if (format === 'hex') {
        // Convert ArrayBuffer to hexadecimal string
        const byteArray = new Uint8Array(data);
        return Array.from(byteArray)
          .map(byte => byte.toString(16).padStart(2, '0'))
          .join('');
      } else if (format === 'base64') {
        // Convert ArrayBuffer to base64 string
        const binaryArray = new Uint8Array(data);
        const binaryString = String.fromCharCode.apply(null, Array.from(binaryArray));
        return btoa(binaryString);
      }
    } else if (data instanceof Blob) {
      // Handle Blob data if needed
      const objectUrl = URL.createObjectURL(data);
      return objectUrl; // Return the object URL
    } else {
      console.error('Invalid data type for createObjectURL:', typeof data);
      return 'Invalid Data';
    }

    return ''; // Add a default return statement here
  }
}
