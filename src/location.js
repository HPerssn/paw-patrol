export function getLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const date = new Date(position.timestamp);
          const hours = date.getHours();
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            time: position.timestamp,
            hours: hours,
          });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}
