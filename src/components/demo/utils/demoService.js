export const sendDemoRequest = async (data) => {
  // In a real implementation, this would send the data to a backend service
  // For now, we'll simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Demo request sent:', {
        to: data.to,
        subject: data.subject,
        body: `
          Name: ${data.firstName} ${data.lastName}
          Company: ${data.company}
          Email: ${data.email}
        `
      });
      resolve();
    }, 1500);
  });
};