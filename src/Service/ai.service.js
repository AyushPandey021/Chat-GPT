const { GoogleGenAI } = require("@google/genai")
const ai = new GoogleGenAI()

async function generateResponcse(content){
 
    const responce = await ai.models.generateContent({
        model:"gemini-2.0-flash",
        contents: prompt
       
    })

    return responce.text
}
module.exports={
    generateResponcse
}