import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent } from '@ionic/react'

export const LocalSchedule = () => {
    return (
        <>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>Local Schedule</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">Local Schedule content!</IonContent>
            </IonPage>
        </>
    )
}