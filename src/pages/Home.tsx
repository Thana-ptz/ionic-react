import React from 'react';
import { IonToolbar, IonTitle, IonContent, IonCard, IonHeader, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/react'

import { useHistory } from 'react-router-dom';

const MyComponent = () => {
  const history = useHistory();

  const handleBlogButtonClick = () => {
    // Navigate to the 'blog' route when the button is clicked
    history.push('/blog');
  };

  return (
    <div>
      {/* Your component content */}
      <button onClick={handleBlogButtonClick}>Go to Blog</button>
    </div>
  );
};

export default MyComponent;

const HomePage: React.FC = () => (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>THANA Business</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Home Page</IonCardSubtitle>
          <IonCardTitle>Let's take a look at the blog</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>Sounds like a great idea. Click the button below!</p>

          <MyComponent />
        </IonCardContent>
      </IonCard>
    </IonContent>
  </>
)
export default HomePage
