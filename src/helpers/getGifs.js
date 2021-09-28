
     export const getGifs = async( categorias) => {
        
        const key  = 'D8ORAZvzoGvzmGCWmZhFn8JxPtVW3egZ&q'
        const url = `https://api.giphy.com/v1/gifs/search?q=${categorias}&limit=30&api_key=${key}`
        const resp = await fetch(url)
        const {data} = await resp.json()

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
             }
          })

        return gifs;
    }