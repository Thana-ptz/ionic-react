import React from 'react';
import { IonToolbar, IonTitle, IonContent, IonCard, IonHeader, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/react'

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

          <IonButton>Blog</IonButton>
        </IonCardContent>
      </IonCard>
    </IonContent>
  </>
)
export default HomePage
