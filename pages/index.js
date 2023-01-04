import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Home({data}) {

  const [expanded, setexpanded] = useState(false)
  let meal = data.meals[0]


  const getIngredients = (meal) =>{
    var allIngredients = []
    // filtering ingredients and putting them in a list
    allIngredients.push(meal.strMeasure1 + " " +meal.strIngredient1)
    allIngredients.push(meal.strMeasure2 + " " +meal.strIngredient2) 
    allIngredients.push(meal.strMeasure3 + " " +meal.strIngredient3) 
    allIngredients.push(meal.strMeasure4 + " " +meal.strIngredient4) 
    allIngredients.push(meal.strMeasure5 + " " +meal.strIngredient5) 
    allIngredients.push(meal.strMeasure6 + " " +meal.strIngredient6)
    allIngredients.push(meal.strMeasure7 + " " +meal.strIngredient7)
    allIngredients.push(meal.strMeasure8 + " " +meal.strIngredient8)
    allIngredients.push(meal.strMeasure9 + " " +meal.strIngredient9)
    allIngredients.push(meal.strMeasure10 + " " +meal.strIngredient10) 
    allIngredients.push(meal.strMeasure11 + " " +meal.strIngredient11) 
    allIngredients.push(meal.strMeasure12 + " " +meal.strIngredient12) 
    allIngredients.push(meal.strMeasure13 + " " +meal.strIngredient13)
    allIngredients.push(meal.strMeasure14 + " " +meal.strIngredient14)
    allIngredients.push(meal.strMeasure15 + " " +meal.strIngredient15)
    allIngredients.push(meal.strMeasure16 + " " +meal.strIngredient16)
    allIngredients.push(meal.strMeasure17 + " " +meal.strIngredient17)
    allIngredients.push(meal.strMeasure18 + " " +meal.strIngredient18)
    allIngredients.push(meal.strMeasure19 + " " +meal.strIngredient19)
    allIngredients.push(meal.strMeasure20 + " " +meal.strIngredient20)
    
    allIngredients = allIngredients.filter(e => e != " " && e != "  " && e.indexOf("null") == -1)

    return allIngredients
  }


  const cardBody = (meal) =>{
    return (
      <div>
          <button className="bg-secondary w-fit active:drop-shadow-none active:translate-x-1 active:translate-y-1 transition-all p-4 border-2 text-2xl  drop-shadow-hard  border-black  font-bold  rounded-xl">

          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="flex items-center w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
            <p> Watch Tutorial </p>
          </a>
          </button >
        <div>
          <h3 className="text-xl font-bold py-4">Ingredients</h3>
          <ul className="grid grid-cols-2 gap-4 list-disc list-inside">
            {getIngredients(meal).map(e => <li key={e}>{e}</li>)}
          </ul>
        </div>
        <h3 className="text-xl font-bold py-4">Instructions</h3>

        <ol className="list-decimal flex flex-col gap-4 list-inside">
          {meal.strInstructions.split('.').filter(i => i != '').map(item => 

          <li key={item}>{item}</li>
          )}
        </ol>
        
      </div>
    )
  }


  const router = useRouter()

  const refresh = ()=>{
    router.replace(router.asPath)
  }

  const handleClick = ()=>{
    const vis = !expanded
    getIngredients(meal)
    setexpanded(vis)
    document.getElementById('body').style.height = vis? 'fit-content' : '0px'
    
  }
  return (
    <div className="bg-primary">
      <Head>
        <title>Munchees - What´s for dinner?</title>
        <meta name="description" content="Simple meal randomizer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="bg-primary min-h-[100dvh] flex flex-col justify-between" >
        <h1 className="text-center text-accent stroke drop-shadow-hard italic  font-black  text-6xl lg:text-7xl p-10">MUNCHEES</h1>
        <main className="flex flex-col gap-4 lg:w-1/2 m-2 lg:m-auto">
          <button  onClick={refresh} className="bg-secondary  active:drop-shadow-none active:translate-x-1 active:translate-y-1 transition-all p-4 border-2 text-2xl w-full  drop-shadow-hard  border-black  font-bold  rounded-xl m-auto">Random!</button>
          
          <div className="border-2 border-black  bg-accent shadow-black drop-shadow-hard rounded-xl p-12 mb-20">
            <div  className="flex flex-col gap-4">
              <h3 className="text-3xl font-bold" >{meal.strMeal}</h3>
              <img src={meal.strMealThumb} className="rounded-xl border-2 h-[50dvh] object-cover border-black shadow-black drop-shadow-hard"/>
              <button title="click to show recipe" onClick={handleClick} className="bg-secondary w-fit p-4 rounded-full grid place-content-center border-2 border-black drop-shadow-hard shadow-black absolute bottom-4 right-4 active:drop-shadow-none active:translate-x-1 active:translate-y-1 transition-all ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>

              </button>
            </div>
            <div id="body" className="pt-4 transition-[height] max-h-fit overflow-hidden" style={{height:'0px'}}>
              {cardBody(meal)}
            </div>
          </div>
        </main>

        <footer className="fixed bottom-4 left-4 font-bold" >
            <a href="https://github.com/Andreas-Espelund" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center hover:cursor-pointer gap-2 rounded-full w-fit py-1 px-4 bg-accent border-2 border-black drop-shadow-hard text-[0px] hover:text-lg transition-all"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>
              Made by Andreas Espelund 
            </a>
        </footer>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  const data = await res.json()
  return { props: {data}}
}