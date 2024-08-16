export async function getSolutions() {
    let solutions = await fetch('http://localhost:2005/solutions');

    return solutions
}