# spamDetector

to run the file
npm install
node index.js

you can change the username in index.js and run again

the first and primary method attempts to reformat the string into string of lowercase alphabet letters and check whether that string contains a list of banned words, which are stored in bannedwords.js.

the second strategy, which doesnt work accurately at all, relies on a Machine Learning model I made with Azure. I gathered username data from ChatGPT and trained a model. The data is stord in usernames3.csv. I did not have enough data nor was the data good enough to actually produce accurate results.
The model returns either a 1 (spam) or a 0 (not spam). I am including it in the code because even though it does not work with any accuracy (it thinks everything is spam) setting it up took alot of effort.
