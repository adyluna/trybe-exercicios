const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => setTimeout(() => console.log(`
Right now, its doing
${(getMarsTemperature())} celsius degrees in Mars!`), messageDelay());

sendMarsTemperature() ;
