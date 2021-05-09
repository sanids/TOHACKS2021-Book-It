## Inspiration

A recent study from the American Psychological Association concluded that reading rates have halved amongst 12th graders between the late 1970's and 2016. As digital media continues to exponentially conquer the online space, attention spans are decreasing and more are becoming accustomed to the dopamine-filled and eye catching nature of today's internet. For the up and coming generations who have grown up in an era where endless content is constantly being served by state of the art algorithms, traditional media such as books and articles can feel very disconnected from their lifestyles. Reading often becomes a daunting task that gets left behind the flurry of everyday tasks. Our product was inspired by the need to create a solution that connects users to traditional written media in a way that complements their digital consumption habits. 

## What it does
Our product aims to make finding books a seamless process by integrating with Youtube videos a person watches. Using intelligent natural language processing and text categorization, the product curates a list of books to an individual catered to the content of the video they are currently watching. This is all packed into a chrome extension, so individuals can get a side by side suggestion of books customized to their browsing without compromising their viewing experience. 

## How we built it
The product utilizes React and Ionic Framework for the frontend, and Node.js and Express for the backend. We heavily utilized Google Cloud for deep learning API's and grabbing data from the Youtube and Google Books APIs. As a user clicks on a video, the transcript of the video is retrieved and processed to run topic classification algorithms on. Once possible topics are found, these are fed into an algorithm to retrieve a list of related books found in Google Books, sorted by relevance. 

## Challenges we ran into
Often outdated videos (5+ years old) don't contain transcripts that our chrome extension needs to discover relevant books. Secondly, very long format videos that exceed an hour of length can contain noise and irrelevant topics that can interfere with the algorithms ability to output relevant topics. This can be solved by running text summarization algorithms on the long form transcript before running topic categorization, but for the scope of this hackathon it was too lengthy of a process. 

## Accomplishments that we're proud of
We are proud that this app addresses a positive educational issue encouraging people to harness the priceless benefits of including reading to their routine activities. Secondly, we are very proud of the fact that we have a finished product that is ready to published as a chrome extension. Finally we were proud to see the product work effectively on a variety of different YouTube videos, as seen in the demo video.

## What we learned
At first the idea of making this concept come to life felt like a very daunting task, but we realized after breaking the problem into small pieces and connecting the bits one by one, any big project becomes achievable. From a technical perspective, we appreciated the opportunity to learn how to use Google's Cloud platform to manage such a project. 

## What's next for Book It 
We feel that Book It has major potential from this point onwards. As mentioned in the challenges we faced, adding a text summarization component to make the algorithm more effective on very long form content would be beneficial. In terms of a user perspective, we feel like this can branch out into a social platform containing individualized reading lists and creating the opportunity to form digital "book clubs" with other people with similar interests. We aim to make reading as attractive as listening to podcasts, music and other digital content. 
