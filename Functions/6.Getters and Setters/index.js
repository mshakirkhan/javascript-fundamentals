// Getter => Access Properties
// Setter => Change (Mutate) them
// If you use get you are able to access it as a property not a function.

let person = {
    firstName: 'Shakir',
    lastName: 'Khan',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        let getFullName = value.split(' ');
        this.firstName = getFullName[0];
        this.lastName = getFullName[1];
    }
}
person.fullname = "John Smith";

console.log(person);