// import React, { useState } from 'react';
// import { Client } from '@elastic/elasticsearch';
// import axios from 'axios';

// const UniversitySearch = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const searchUniversities = async () => {
//     const client = new Client({ node: 'http://localhost:9200' }); // Replace with your Elasticsearch server URL

//     const response = await client.search({
//       index: 'universities',
//       body: {
//         query: {
//           match: {
//             name: query,
//           },
//         },
//       },
//     });

//     setResults(response.body.hits.hits.map(hit => hit._source));
//   };

//   const handleSearch = async () => {
//     await searchUniversities();
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>

//       <ul>
//         {results.map((university) => (
//           <li key={university.id}>{university.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UniversitySearch;
