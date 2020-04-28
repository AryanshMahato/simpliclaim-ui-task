// Returns current Time
const currentTime = (): string => {
  const today = new Date();

  return today.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export default currentTime;
