export default (req, res) => {
  const {
    query: { pid },
  } = req

  res.end(`Post: ${pid}`)
}


export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
}

// Go to http://localhost:3000/api/post/10