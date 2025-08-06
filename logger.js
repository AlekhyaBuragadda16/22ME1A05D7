export const logAction = (message) => {
  // Use backticks (`) to correctly create a template literal string
  const logEntry = `[${new Date().toISOString()}] ${message}`;
  
  let logs = JSON.parse(localStorage.getItem("logs")) || [];
  logs.push(logEntry);
  localStorage.setItem("logs", JSON.stringify(logs));
};