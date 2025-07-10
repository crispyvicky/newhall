useEffect(() => {
  setTimeout(() => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#FFD700", "#FF69B4", "#00FFFF", "#7CFC00", "#FF4500"],
      scalar: 1.2,
      zIndex: 9999,
    });
  }, 500);
}, []);
