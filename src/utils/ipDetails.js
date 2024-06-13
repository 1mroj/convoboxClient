export async function getIpDetails() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
