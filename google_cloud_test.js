// Imports the Google Cloud client library
const language = require('@google-cloud/language');

module.exports = {
    getVideoTopics: async function getVideoTopics(data) {
        // Creates a client
        const client = new language.LanguageServiceClient();
        
        try {  
            const document = {
            content: data,
            type: 'PLAIN_TEXT',
            };
        
            // Classifies text in the document
            const [classification] = await client.classifyText({document});
            // const cat = classification.categories[0];
            // console.log(cat.type);

            const classifications = classification.categories;
            // console.log(classifications[0].name.type)
            

            // console.log('Categories:');
            // classification.categories.forEach(category => {
            // console.log(`Name: ${category.name}, Confidence: ${category.confidence}, Parsed Name: ${getCategoryName(category)}`);        
            // });

            // Detects entities in the document
            const [result] = await client.analyzeEntities({document});

            const entities = result.entities;
            // console.log([classifications[0].name, entities[0].name, entities[1].name]);

            // console.log('Entities:');
            // entities.forEach(entity => {
            // console.log(entity.name);
            // console.log(` - Type: ${entity.type}, Salience: ${entity.salience}`);
            // if (entity.metadata && entity.metadata.wikipedia_url) {
            //     console.log(` - Wikipedia URL: ${entity.metadata.wikipedia_url}`);
            // }
            // });

            return classifications[0].name.split("/").pop() //.replace(/&/g, "").replace(/ /g, "+")

        } catch(e) {
            console.log('Error:', e.stack);
        }
        
        // const text = "Google, headquartered in Mountain View (1600 Amphitheatre Pkwy, Mountain View, CA 940430), unveiled the new Android phone for $799 at the Consumer Electronic Show. Sundar Pichai said in his keynote that users love their new Android phones.";

        
    }
}
// getVideoTopics().then(arr => console.log(arr));
