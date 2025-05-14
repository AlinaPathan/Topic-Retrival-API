const fs = require('fs');
const path = require('path');

exports.getTopics = (req, res) => {
  const search = req.query.search;
  const sort = req.query.sort;

  if (!search) {
    return res.status(400).json({ error: 'Missing search query parameter' });
  }

  const filePath = path.join(__dirname, '../data/topics.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading JSON file:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    try {
      const topics = JSON.parse(data);

      //to make the search case insensitive
      let filtered = topics.filter(topic =>
        topic.name.toLowerCase().includes(search.toLowerCase())
      );

     //to get results sorted by name    
      if (sort === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      }

      res.status(200).json(filtered);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      res.status(500).json({ error: 'Error parsing data file' });
    }
  });
};
