// =================== Fetch Bonuses
//
// -- Ex. 1
//
// In your data directory, create a profiles.json file with the following...
//
// {
//     "sandy123": "brown",
//     "bob234": "green",
//     "sally345": "blue"
// }

// Add an input field and submit button (you will need to prevent the default behaviour if inside a form element) that when clicked, runs the following function...
// Create a function that takes in a username and fetch's the color preference based on the username and sets the background color to that color.
// document.write('testing ');
//
fetch('data/profiles.json')
    .then(response => {
        let profiles = response.json().then(profiles => {
            console.log(profiles);
            let sandy = profiles.sandy123;
            console.log(sandy);
            let bob = profiles.bob234;
            console.log(bob);
            let sally = profiles.sally345;
            console.log(sally);
            let colorChange = input => {
                $('body').css('background', `${input}`);
            };
            colorChange(bob);
        });
    });


//
//
//

//     fetch('https://swapi.co/api/planets/')
//         .then((response) => {
//             const planet = response.json().then((planets) => {
//                 console.log(planets.results);
//             });
//         });
//
//
// //
