import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import youtubeIcon from '../public/youtube.png'
export default function Home({data}) {

  const [expanded, setexpanded] = useState(false)
  let meal = data.meals[0]


  const getIngredients = (meal) =>{
    const allIngredients = []
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
        <button>
          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
            Watch Tutorial
          </a>
          
          </button>
        <div className="box">
          <h3>Ingredients</h3>
          <ul>
            {getIngredients(meal).map(e => <li key={e}>{e}</li>)}
          </ul>
        </div>
        <h3>Instructions</h3>

        <p>
          {meal.strInstructions}
        </p>
        
      </div>
    )
  }


  const router = useRouter()

  const refresh = ()=>{
    router.replace(router.asPath)
  }

  const handleClick = ()=>{
    getIngredients(meal)
    setexpanded(!expanded)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Munchees - What´s for dinner?</title>
        <meta name="description" content="Simple meal randomizer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>MUNCHEES</h1>
        <button className={styles.button} onClick={refresh}>Randomize</button>

        <div className={styles.card}>
          <div onClick={handleClick}>
            <h2 >{meal.strMeal}</h2>
            <img src={meal.strMealThumb} title="Click to show recipe"/>
          </div>
          {expanded ? cardBody(meal) : ""}

        </div>

       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Andreas-Espelund"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Andreas Espelund
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  const data = await res.json()
  return { props: {data}}
}