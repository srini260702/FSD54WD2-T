



React Card Task

import React from 'react';

const Card = ({title1, title, items }) => (
  <div style={{backgroundColor:'#2191F3',padding:'10px', width:'350px'}}>
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '15px', backgroundColor:'white', color:'black', height:'450px' }}>
    <h4 style={{textAlign: 'center', color:'lightgrey'}}>{title1}</h4>
    <h2 style={{textAlign: 'center'}}>{title}</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.isCorrect ? '?' :<span style={{color:'lightgrey'}}>?</span> } {item.text}</li>
      ))}
    </ul>
    <button style={{backgroundColor:'#2191F3',marginLeft:'90px',marginTop:'30px'}}>BUTTON</button>
  </div>
  </div>
);


const App = () => {
  // Sample data for the three cards
  const cardsData = [
    {
      title1: 'Free',
      title: '$0/month',
      items: [
        { text: 'single User', isCorrect: true },
        { text: '50GB Storage', isCorrect: true },
        { text: 'Unlimited Public Projects', isCorrect: true },
        { text: 'Community Access', isCorrect: true },
        { text: 'Unlimited Private Projects', isCorrect: false },
        { text: 'Dedicated Phone Support', isCorrect: false },
        { text: 'Free Subdomain', isCorrect: false },
        { text: 'Monthly Status Report', isCorrect: false },
      ],
    },
    {
      title1: 'Plus',
      title: '$9/month',
      items: [
        { text: '5 Users', isCorrect: true },
        { text: '50GB Storage', isCorrect: true },
        { text: 'Unlimited Public Projects', isCorrect: true },
        { text: 'Community Access', isCorrect: true },
        { text: 'Unlimited Private Projects', isCorrect: true },
        { text: 'Dedicated Phone Support', isCorrect: true },
        { text: 'Free Subdomain', isCorrect: true },
        { text: 'Monthly Status Report', isCorrect: false },
        
      ],
    },
    {
      title1: 'Pro',
      title: '$49/month',
      items: [
        { text: 'Unlimited Users', isCorrect: true },
        { text: '50GB Storage', isCorrect: true },
        { text: 'Unlimited Public Projects', isCorrect: true },
        { text: 'Community Access', isCorrect: true },
        { text: 'Unlimited Private Projects', isCorrect: true },
        { text: 'Dedicated Phone Support', isCorrect: true },
        { text: 'Free Subdomain', isCorrect: true },
        { text: 'Monthly Status Report', isCorrect: true },
      ],
    },
  ];

  return (
    <div style={{display:'flex', marginLeft:'230px'}}>
      {cardsData.map((card, index) => (
        <Card key={index} title1={card.title1} title={card.title} items={card.items} />
      ))}
    </div>
  );
};

export default App;