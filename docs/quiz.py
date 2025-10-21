from gtts import gTTS
import os
import json

with open("iq_data.json") as f:
    data = json.load(f)

for q in data["questions"]:
    tts = gTTS(q["question"], lang='en')
    tts.save("question.mp3")
    os.system("termux-media-player play question.mp3")
