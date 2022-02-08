// Call, Apply, Bind

let fullName = {
  firstName: "Abhishek",
  lastName: "Kumar",
};

function print(hometown, state) {
  console.log(this);
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
}

print.call(fullName, "Dhanbad", "Jharkhand");

print.apply(fullName, ["Dhanbad", "Jharkhand"]);

const p = print.bind(fullName, "Dhanbad", "UP");
p();
