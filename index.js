// Write your solution in this file!
const employee= {
    name: 'Paul',
    streetAddress: 134 Ollo St
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]:value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) { 
    cons newEployee={...employee};
    delete newEmployee[key];
    returm newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
