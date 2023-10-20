// export default fetch("https://swapi.dev/api/")
//     .then((value) => {
//         return value.json();
//     })
//     .then((value) => {
//         return value;
//     })
//     .catch((err) => {
//         console.log(err);
//     });

export const request = async (url) => {
    const data = await fetch(url);
    return data.json();
};

// const navigation = [
//     "Characters",
//     "Films",
//     "Starships",
//     "Vehicles",
//     "Species",
//     "Planets",
// ];

// export default navigation;
