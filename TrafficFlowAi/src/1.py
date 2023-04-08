from browser import document
import cohere
co = cohere.Client('micByy2WhwQYMJ874RWn1Mnx9jnkshJ4krYk7plc')
userInput = document["text"].value
response = co.generate(
model='command-xlarge-beta',
prompt=userInput,
max_tokens=300,
temperature=0.9,
k=0,
stop_sequences=[],
return_likelihoods='NONE')
def show_text(e):
  document["output"].textContent = response.generations[0].text;
  document["btn"].bind("click", show_text)
