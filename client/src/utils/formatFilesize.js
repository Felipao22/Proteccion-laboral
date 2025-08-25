export const formatFileSize = (bytes) => {
    if (bytes >= 1024 * 1024) {
      const megabytes = (bytes / (1024 * 1024)).toFixed(3);
      return `(${megabytes} MB)`;
    } else {
      const kilobytes = (bytes / 1024).toFixed(2);
      return `(${kilobytes} KB)`;
    }
  }