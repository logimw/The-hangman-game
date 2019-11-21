const getWord = async () =>  {
    const res = await fetch("//puzzle.mead.io/puzzle")
    const task = await res.json()
    return task.puzzle
}
