import React from 'react'
import Typing from "react-code-auto-typing";
import '../styles/console.css'


const console = () => {
    const snippet: String = `
class Human( 
   val firstName: String = "Damon",
   val lastName: String = "Montague",
   val suffix: String = "Jr.",
   val age: Int = 21,
   val interest: List<String> = listOf(
       "Programming",
       "Technology",
       "Personal Finance",
       "Paintball"
   ),
   val socials: Map<String, String> = mapOf(
       "github" to "https://github.com/day-mon",
       "linkedin" to "https://damon.systems/linkedin",
       "discord" to "damon#9999"
   )
 )`
    return (
        <div className={"codeBlock"}>
           <Typing syntaxHighlighterProps={{ showLineNumbers: false, useInlineStyles: false}}  >
               {snippet}
           </Typing>
        </div>

    )
}

export default console;
