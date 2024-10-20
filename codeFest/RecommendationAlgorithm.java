
const userMap = {
    userTravelers: "",
    userRoom: "",
    userDestination: "",
    userWeather: "",
    userDietary: ["", ""],
    userCuisine: ["", ""],
    userBudget: "",
    userTransport: ["", ""],
    userActivity: ["", ""]}

this.counts = [];

async function fetchData()
{
    const fs = require('fs')
    
    fs.readFile('CodeFestSampleDataSet.json', 'utf8', (err, JSONdata) =>
    {
        if (err)
        {
            console.error('Error reading File:', err);
            return;
        }
    }
    
    const data = JSON.parse(JSONdata);

    data.forEach(item =>
    {
        const count = 0;

        for (const travelers of item["Number Of Travelers"]) 
        {
            if (travelers === this.userMap[userTravelers]) 
            {
                count++;
            }
        }

        if (item["Connecting Rooms"] === this.userArray[1][userRoom]) 
        {
            count++;
        }

        if (item["Type of Destination"] === this.userArray[2][userDestination]) 
        {
            count++;
        }

        if (item["Weather"] === this.userArray[3][userWeather]) 
        {
            count++;
        }

        for (const dietType of item["Dietary"]) 
        {
            for (const user of this.userArray[4][userDietary]) 
            {
                if (dietType === user) 
                {
                    count++;
                }
            }
        }

        for (const cuisineType of item["Cuisine"]) 
        {
            for (const user of this.userArray[5][userCuisine]) 
            {
                if (cuisineType === user) 
                {
                    count++;
                }
            }
        }

        if (item["Budget"] === this.userArray[6][userBudget]) 
        {
            count++;
        }

        for (const transportType of item["Transport"]) 
        {
            for (const user of this.userArray[7][userTransport]) 
            {
                if (transportType === user) 
                {
                    count++;
                }
            }
        }

        for (const activityType of item["Activities"]) 
        {
            for (const user of this.userArray[8][userActivity]) 
            {
                if (activityType === user) 
                {
                        count++;
                }
            }
        } 

        this.counts.concat(count);
    });

    console.log(this.counts);
}

function findMaxCountIndex()
{
    const max = 0;
    const index = -1;

    for (let i = 0; i < counts.length; i++)
    {
        if (counts[i] > max)
        {
            max = count[i];
            index = i;
        }
    }

    return index;
}

function findBestDestination(maxIndex)
{
    return data[maxIndex]["Location"];
}

this.fetchData();
