// get data from API
// insert word to the container (results-word)
// add functionality for playing a sound
// insert data to the container with results

let state = {
  word: '',
}
const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
const input = document.getElementById('word-input')
const form = document.querySelector('.form')

const handleSubmit = async (e) => {
  e.preventDefault()
  if (!state.word.trim()) return
  try{
    const response = await fetch(`${url}${state.word}`)
    const data = await response.json()
    if(response.ok && data.length){
      
    }
  } catch(err){
    console.log(err)
  }
  console.log(data)
}
const handleKeyup = (e) => {
  const value = e.target.value
  state.word = value
}
// EVENTS
input.addEventListener('keyup', handleKeyup)
form.addEventListener('submit', handleSubmit)
