import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`;

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState(null)

  // Para recuperar la cita al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // Para recuperar la imagen cada que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    // Siempre buscar MDN para fragmentar informacion
    // EN ESTE CASO FUE 'mdn separar string por separador'
    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>CATS</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
      </section>
    </main>
  )
}
