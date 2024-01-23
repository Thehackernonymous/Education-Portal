// import React, { useState, useEffect } from 'react';
// import { Client } from '@elastic/elasticsearch';
// import { useHistory } from 'react-router-dom';

// const esClient = new Client({ node: 'http://localhost:9200' });
// const index = 'universities';

// const SearchBar = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const history = useHistory();

//   useEffect(() => {
//     const searchUniversities = async () => {
//       try {
//         if (!searchQuery.trim()) {
//           setSearchResults([]);
//           return;
//         }

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

//     searchUniversities();
//   }, [searchQuery]);

//   const redirectToUniversityWebsite = (university) => {
//     history.push(`/university/${university.id}`);
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
