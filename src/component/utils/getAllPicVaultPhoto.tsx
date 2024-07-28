
// const getAllPicVaultPhoto = async () => {
//     const res = await fetch("http://localhost:5000/allPhoto", {
//         cache: "no-store"
//     });

//     return res.json()
// }
// export default getAllPicVaultPhoto;

const API_URL = "http://localhost:5000";
const getAllPicVaultPhotos = async () => {
    try {
        const res = await fetch(`${API_URL}/allPhoto`, {
            cache: "no-store"
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        // You can add more validation logic here if necessary
        if (!Array.isArray(data)) {
            throw new Error('Invalid response format');
        }

        return data;
    } catch (error) {
        console.error('Failed to fetch photos:', error);
        return null; // or handle error as per your application's requirement
    }
}

export default getAllPicVaultPhotos;