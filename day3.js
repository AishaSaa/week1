/*
Build two objects for 2 students, assign them names and grades for some subject.
Print the name of the student that has a higher grade in a certain subject.
*/

let Chris =
{
    name: 'Chris',
    grade: 80
}

let Steve =
{
    name: 'Steve',
    grade: 69
}

if (Chris.grade > Steve.grade)
{
    console.log("Chris has the higher grade!")
} else
{
    console.log("Steve has the higher grade!")
}