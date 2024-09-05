function employees(arr) {
    for (let i = 0; i < arr.length; i++) {
        let personalName = arr[i];
        let length = arr[i].length;
        console.log(`Name: ${personalName} -- Personal Number: ${length}`);
    }
}
employees(['Silas Butler',
           'Adnaan Buckley',
           'Juan Peterson',
           'Brendan Villarreal']);