export function list(req, res) {
  const { sort } = req.query
  console.log({ sort })
  res.json([])
}

export function create(req, res) {
  const { title, body } = req.body
  console.log(`${title} and ${body} received.`)
  res.send('OK')
}

export function read(req, res) {
  const { id } = req.params
  res.json({ id, title: 'A sample title', body: 'This is my note' })
}

export function update(req, res) {
  const { id } = req.params
  const { title, body } = req.body
  console.log(`Updating ${id} with ${title} and ${body}`)
  res.send('OK')
}
export function deleteNote(req, res) {
  const { id } = req.params
  console.log(`deleting ${id}`)
  res.send('OK')
}
