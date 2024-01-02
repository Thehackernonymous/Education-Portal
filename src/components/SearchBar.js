// import React, { useState, useEffect } from 'react';
// // import { Client } from '@elastic/elasticsearch';

// // const esClient = new Client({ node: 'http://localhost:9200' }); // Replace with your Elasticsearch host
// const index = 'universities'; // Replace with your Elasticsearch index

// const SearchBar = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     const searchUniversities = async () => {
//       try {
//         const { body } = await esClient.search({
//           index,
//           body: {
//             query: {
//               match: {
//                 university_name: searchQuery,
//               },
//             },
//           },
//         });

//         setSearchResults(body.hits.hits.map(hit => hit._source));
//       } catch (error) {
//         console.error('Error searching universities:', error);
//       }
//     };

//     // Perform the search when the searchQuery changes
//     searchUniversities();
//   }, [searchQuery]);

//   const redirectToUniversityWebsite = (university) => {
//     // Implement redirection logic to the university's website
//     window.location.href = university.website;
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search universities..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <ul>
//         {searchResults.map((university) => (
//           <li key={university.id} onClick={() => redirectToUniversityWebsite(university)}>
//             {university.university_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SearchBar;
