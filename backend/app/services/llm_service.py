import os
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

def ask_medimind(question: str):

    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": "You are a helpful AI Healthcare Assistant. Give educational information only."
            },
            {
                "role": "user",
                "content": question
            }
        ],
        temperature=0.3
    )

    return completion.choices[0].message.content