export default fetch("https://swapi.dev/api/")
    .then((value) => {
        return value.json();
    })
    .then((value) => {
        return value;
    })
    .catch((err) => {
        console.log(err);
    });

// const navigation = [
//     "Characters",
//     "Films",
//     "Starships",
//     "Vehicles",
//     "Species",
//     "Planets",
// ];

// export default navigation;
