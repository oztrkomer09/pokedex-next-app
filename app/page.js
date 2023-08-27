export default async function Home() {
  const pokemons = await getPokemons()

  return (
    <div className="bg-white w-full h-full">
      PokeApp
    </div>
  )

}
export const getPokemons = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=-1')
  const data = await res.json()
  return data
}