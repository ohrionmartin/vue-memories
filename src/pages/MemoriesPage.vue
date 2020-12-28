<template>
   <base-layout page-title="All Memories">
        <ion-list>
            <ion-item router-link="/memories/1">Trip into mountains</ion-item>
            <ion-item>Surfing</ion-item>
            <ion-item>Swimming</ion-item>
            <ion-item>General</ion-item>
        </ion-list>
  </base-layout>
</template>

<script>
import { 
    IonList,
    IonItem
} from '@ionic/vue'
import BaseLayout from '@/components/BaseLayout.vue'

export default {
    components: {
        IonList,
        IonItem,
        BaseLayout
    }
    
}
</script>